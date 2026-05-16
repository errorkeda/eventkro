/** GA4 Measurement ID — format: G-XXXXXXXXXX (not the numeric Property ID). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || 'G-8SWNN1YN66';

export function isGaEnabled(): boolean {
  return GA_MEASUREMENT_ID.startsWith('G-');
}
