export function getBookingUrl(service?: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BOOKING_URL || 'https://booksy.com'; // TODO(cliente): URL real de reservas
  if (!service) return baseUrl;
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}service=${encodeURIComponent(service)}`;
}
