export const SITE_URL = 'https://www.eventkro.in';
export const SITE_NAME = 'Eventkro';
export const SITE_PHONE_PRIMARY = '+91 7017520811';
export const SITE_PHONE_SECONDARY = '+91 9869950233';
export const SITE_EMAIL = 'vipabhi12345@gmail.com';

/** Consistent canonical URLs (homepage always trailing slash). */
export function siteUrl(path = ''): string {
  if (!path || path === '/') return `${SITE_URL}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
