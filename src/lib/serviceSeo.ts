import type { Metadata } from 'next';
import type { Service } from '../app/data/servicesData';
import { services } from '../app/data/servicesData';
import { cityNameFromSlug, citySlugFromName } from './cities';
import { pageMetadata } from './seo';

export function getServiceCityContent(service: Service, cityName: string) {
  const cityLower = cityName.toLowerCase();

  return {
    h1: `${service.name} in ${cityName}`,
    title: `${service.name} in ${cityName} | Eventkro`,
    description: `Book ${service.name.toLowerCase()} in ${cityName} with Eventkro. Premium decor, on-time setup, and stress-free event styling. Free quote within 24 hours.`,
    intro: `Looking for professional ${service.name.toLowerCase()} in ${cityName}? Eventkro delivers premium setups, reliable on-site installation, and complete event styling trusted by families and businesses across the Agra Mandal region.`,
    keywords: [
      `${service.name.toLowerCase()} in ${cityLower}`,
      `${service.name.toLowerCase()} ${cityLower}`,
      `event planners ${cityLower}`,
      `event decoration ${cityLower}`,
      'Eventkro',
    ],
  };
}

export function buildServiceCityMetadata(
  service: Service,
  cityName: string,
  citySlug: string
): Metadata {
  const content = getServiceCityContent(service, cityName);

  return pageMetadata({
    title: content.title,
    description: content.description,
    path: `/services/${service.id}/${citySlug}`,
    keywords: content.keywords,
    image: service.image,
  });
}

export function serviceAvailableInCity(service: Service, citySlug: string): boolean {
  const cityName = cityNameFromSlug(citySlug);
  if (!cityName) return false;
  return service.cities.some((c) => c.toLowerCase() === cityName.toLowerCase());
}

export function getServiceCityParams(): { id: string; city: string }[] {
  const params: { id: string; city: string }[] = [];

  for (const service of services) {
    for (const cityName of service.cities) {
      const slug = citySlugFromName(cityName);
      if (slug) {
        params.push({ id: service.id, city: slug });
      }
    }
  }

  return params;
}

export function primaryCitySlug(service: Service): string {
  return citySlugFromName(service.cities[0]) ?? 'agra';
}
