export const BOOKING_URL = 'https://studiosatamelia.glossgenius.com/services';

export function getBookingUrl(_service?: string): string {
  return process.env.NEXT_PUBLIC_BOOKING_URL || BOOKING_URL;
}
