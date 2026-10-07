/**
 * GoHighLevel (GHL) Integration Helper for Studios at Amelia
 *
 * How to connect GoHighLevel:
 * 1. Go to GoHighLevel > Automations > Workflows > Create Workflow
 * 2. Select Trigger: "Inbound Webhook"
 * 3. Copy the Webhook URL provided by GoHighLevel
 * 4. Add this Webhook URL to Cloudflare Pages:
 *    - Cloudflare Dashboard > Workers & Pages > studiosamelia > Settings > Variables and Secrets
 *    - Add Variable: GHL_WEBHOOK_URL = <Your GHL Webhook URL>
 * 5. All website form submissions will automatically flow directly into your GoHighLevel CRM:
 *    - Creates/Updates Contact with First Name, Last Name, Email, Phone
 *    - Tags the contact: "Website Lead", "Studios at Amelia", and the specific service (e.g. "Beauty", "Classes", "Photography")
 *    - Fills Custom Fields: service_interest, inquiry_notes
 */

export interface GHLContactPayload {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  source: string;
  tags: string[];
  customFields: {
    service_interest: string;
    inquiry_notes: string;
  };
  submittedAt: string;
}

export function formatGHLPayload(data: {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}): GHLContactPayload {
  const parts = data.name.trim().split(/\s+/);
  const firstName = parts[0] || data.name;
  const lastName = parts.slice(1).join(' ') || '';

  return {
    firstName,
    lastName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    interest: data.interest,
    message: data.message,
    source: 'Studios at Amelia Website',
    tags: ['Website Lead', 'Studios at Amelia', data.interest],
    customFields: {
      service_interest: data.interest,
      inquiry_notes: data.message,
    },
    submittedAt: new Date().toISOString(),
  };
}
