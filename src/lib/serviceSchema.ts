import type { Service } from '../app/data/servicesData';
import { cityMetaFromSlug } from './cities';
import { getServiceCityContent } from './serviceSeo';
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_PRIMARY,
  SITE_PHONE_SECONDARY,
  siteUrl,
} from './site';

export type ServiceCityFaqItem = {
  question: string;
  answer: string;
};

export function getServiceCityFaqItems(
  service: Service,
  cityName: string
): ServiceCityFaqItem[] {
  const serviceLower = service.name.toLowerCase();
  const cityLower = cityName.toLowerCase();

  return [
    {
      question: `Do you offer ${serviceLower} in ${cityName}?`,
      answer: `Yes. Eventkro provides professional ${serviceLower} in ${cityName} and across the Agra Mandal region. We handle design, materials, on-site setup, and teardown so your event looks polished from start to finish.`,
    },
    {
      question: `How do I book ${serviceLower} in ${cityName}?`,
      answer: `Call ${SITE_PHONE_PRIMARY} or fill out our contact form at eventkro.in/contact. Share your event date, venue in ${cityName}, and guest count — we send a customized quote within 24 hours.`,
    },
    {
      question: `How much does ${serviceLower} cost in ${cityName}?`,
      answer: `Pricing depends on venue size, theme, balloon or decor quantity, and add-ons. Eventkro offers transparent quotes for ${serviceLower} in ${cityName} with no hidden charges. Contact us for a free estimate.`,
    },
    {
      question: `How far in advance should I book in ${cityName}?`,
      answer: `For weddings and peak-season weekends in ${cityName}, book 4–8 weeks ahead. Birthdays and smaller events often need 1–2 weeks. Early booking secures your preferred date and theme for ${serviceLower}.`,
    },
    {
      question: `Which areas near ${cityName} do you cover?`,
      answer: `We serve ${cityName} and nearby cities including Agra, Mathura, Firozabad, and Mainpuri. For venues outside our standard ${cityLower} coverage, ask us about travel — we accommodate many locations in the Agra Mandal.`,
    },
  ];
}

export function buildServiceCitySchemaGraph(
  service: Service,
  cityName: string,
  citySlug: string
) {
  const content = getServiceCityContent(service, cityName);
  const pageUrl = siteUrl(`/services/${service.id}/${citySlug}`);
  const cityMeta = cityMetaFromSlug(citySlug);
  const faqItems = getServiceCityFaqItems(service, cityName);
  const imageUrl = service.image.startsWith('http')
    ? service.image
    : siteUrl(service.image);

  const localBusinessId = `${siteUrl('/')}#localbusiness`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: siteUrl('/services'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: content.h1,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: content.h1,
        description: content.description,
        url: pageUrl,
        image: imageUrl,
        serviceType: service.name,
        provider: {
          '@type': 'LocalBusiness',
          '@id': localBusinessId,
          name: SITE_NAME,
          url: siteUrl('/'),
          image: siteUrl('/favicon-512x512.png'),
          telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
          email: SITE_EMAIL,
          priceRange: '₹₹',
          address: {
            '@type': 'PostalAddress',
            addressLocality: cityName,
            addressRegion: 'Uttar Pradesh',
            postalCode: cityMeta?.postalCode ?? '282001',
            addressCountry: 'IN',
          },
          ...(cityMeta
            ? {
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: cityMeta.latitude,
                  longitude: cityMeta.longitude,
                },
              }
            : {}),
          areaServed: {
            '@type': 'City',
            name: cityName,
          },
          sameAs: [
            'https://www.facebook.com/eventkro.in.agra',
            'https://www.instagram.com/eventkro?igsh=MXE0eHlzNzhrdzVwMw==',
          ],
        },
        areaServed: {
          '@type': 'City',
          name: cityName,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': localBusinessId,
        name: SITE_NAME,
        description: `${content.h1} by Eventkro — trusted event planners and decorators in ${cityName}.`,
        url: pageUrl,
        image: siteUrl('/favicon-512x512.png'),
        telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
        email: SITE_EMAIL,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressRegion: 'Uttar Pradesh',
          postalCode: cityMeta?.postalCode ?? '282001',
          addressCountry: 'IN',
        },
        ...(cityMeta
          ? {
              geo: {
                '@type': 'GeoCoordinates',
                latitude: cityMeta.latitude,
                longitude: cityMeta.longitude,
              },
            }
          : {}),
        areaServed: cityName,
        makesOffer: {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: content.h1,
            description: content.description,
          },
          availability: 'https://schema.org/InStock',
          url: siteUrl('/contact'),
        },
      },
    ],
  };
}
