import type { MetadataRoute } from 'next';
import { eventSlugs } from './data/eventData';
import { siteUrl } from '../lib/site';
import { getServiceCityParams } from '../lib/serviceSeo';

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
    '/cities/shikohabad',
    '/event-planner-in-agra',
    '/event-planner-in-mathura',
    '/event-planner-in-firozabad',
    '/event-planner-in-shikohabad',
    '/wedding-planner-in-agra',
    '/wedding-planner-in-mathura',
    '/wedding-planner-in-firozabad',
    '/wedding-planner-in-shikohabad',
    '/car-boot-decoration-in-agra',
    '/car-boot-decoration-in-mathura',
    '/car-boot-decoration-in-firozabad',
    '/car-boot-decoration-in-shikohabad',
    '/proposal-decoration-in-agra',
    '/proposal-decoration-in-mathura',
    '/proposal-decoration-in-firozabad',
    '/proposal-decoration-in-shikohabad',
    '/pricing',
    '/terms',
    '/privacy',
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: siteUrl(path === '' ? '/' : path),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...getServiceCityParams().map(({ id, city }) => ({
      url: siteUrl(`/services/${id}/${city}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...eventSlugs.map((slug) => ({
      url: siteUrl(`/events/${slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}
