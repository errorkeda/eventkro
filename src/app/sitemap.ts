import type { MetadataRoute } from 'next';
import { eventSlugs } from './data/eventData';
import { services } from './data/servicesData';
import { SITE_URL } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/contact',
    '/services',
    '/gallery',
    '/blog',
    '/cities',
    '/cities/agra',
    '/cities/mathura',
    '/cities/firozabad',
    '/cities/mainpuri',
    '/pricing',
    '/terms',
    '/privacy',
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...eventSlugs.map((slug) => ({
      url: `${SITE_URL}/events/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}
