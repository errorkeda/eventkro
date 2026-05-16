export const ALL_CITIES = [
  {
    slug: 'agra',
    name: 'Agra',
    postalCode: '282001',
    latitude: 27.1767,
    longitude: 78.0081,
  },
  {
    slug: 'mathura',
    name: 'Mathura',
    postalCode: '281001',
    latitude: 27.4924,
    longitude: 77.6737,
  },
  {
    slug: 'firozabad',
    name: 'Firozabad',
    postalCode: '283203',
    latitude: 27.1592,
    longitude: 78.3957,
  },
  {
    slug: 'mainpuri',
    name: 'Mainpuri',
    postalCode: '205001',
    latitude: 27.2296,
    longitude: 79.0234,
  },
] as const;

export type CitySlug = (typeof ALL_CITIES)[number]['slug'];

const slugToName = Object.fromEntries(
  ALL_CITIES.map((c) => [c.slug, c.name])
) as Record<CitySlug, string>;

const nameToSlug = Object.fromEntries(
  ALL_CITIES.map((c) => [c.name.toLowerCase(), c.slug])
) as Record<string, CitySlug>;

export function cityNameFromSlug(slug: string): string | null {
  return slugToName[slug as CitySlug] ?? null;
}

export function citySlugFromName(cityName: string): CitySlug | null {
  return nameToSlug[cityName.toLowerCase()] ?? null;
}

export function citiesLabel(cityNames: string[]): string {
  return cityNames.join(', ');
}

export function cityMetaFromSlug(slug: string) {
  return ALL_CITIES.find((c) => c.slug === slug) ?? null;
}
