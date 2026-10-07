interface Env {
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  GHL_WEBHOOK_URL?: string;
}

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  turnstileToken?: string;
  _honey?: string;
}

interface EventContext<E, P extends string, Data> {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<unknown>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: E;
  params: Record<P, string | string[]>;
  data: Data;
}

type PagesFunction<E = unknown, P extends string = string, Data = Record<string, unknown>> = (
  context: EventContext<E, P, Data>
) => Response | Promise<Response>;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = (await context.request.json()) as ContactPayload;

    // Honeypot anti-spam check
    if (data._honey) {
      return new Response(JSON.stringify({ success: true, message: "Message received." }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Required fields check
    const { name, email, phone, interest, message } = data;
    if (!name || !email || !phone || !interest || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Turnstile check if secret exists
    if (context.env.TURNSTILE_SECRET && data.turnstileToken) {
      const turnstileRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: context.env.TURNSTILE_SECRET,
            response: data.turnstileToken,
          }),
        }
      );
      const outcome = (await turnstileRes.json()) as { success: boolean };
      if (!outcome.success) {
        return new Response(
          JSON.stringify({ error: "Security check failed." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Split first and last name for GoHighLevel CRM contact creation
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(" ") || "";

    // Forward Lead to GoHighLevel (GHL) CRM if Webhook URL is configured
    if (context.env.GHL_WEBHOOK_URL) {
      try {
        await fetch(context.env.GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            name,
            email,
            phone,
            interest,
            message,
            source: "Studios at Amelia Website",
            tags: ["Website Lead", "Studios at Amelia", interest],
            customFields: {
              service_interest: interest,
              inquiry_notes: message,
            },
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (ghlErr) {
        console.error("Error forwarding lead to GoHighLevel:", ghlErr);
      }
    }

    // If Resend API Key is configured, send the notification email
    if (context.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Studios at Amelia Website <notifications@studiosatamelia.com>",
          to: ["hello@studiosatamelia.com"],
          reply_to: email,
          subject: `New Inquiry from ${name} (${interest})`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\nMessage:\n${message}`,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Thank you! Your message has been sent." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "Internal server error. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
