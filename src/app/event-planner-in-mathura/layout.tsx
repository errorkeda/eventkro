import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planner in Mathura | Wedding & Cultural Event Management | Eventkro',
  description: 'Looking for the best event planner in Mathura? Eventkro offers premium wedding planning, Janmashtami events, Holi festival tours, birthday decoration, and catering in Mathura.',
  path: '/event-planner-in-mathura',
  keywords: [
    'event planner in mathura',
    'wedding planner in mathura',
    'best event planner in mathura',
    'balloon decoration mathura',
    'event decorators mathura',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Eventkro the top event planner in Mathura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro is highly recognized in Mathura because we integrate local Braj cultural elements, traditional vegetarian cuisines, and spiritual aesthetics into modern event planning workflows. We serve all key areas including Vrindavan and Barsana.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of cultural events do you organize in Mathura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We plan and execute religious pujas, temple celebrations, Lathmar Holi festival events, Krishna Janmashtami programs, and traditional Braj-style weddings with local folk music and decor.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer pure vegetarian catering services in Mathura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We customize our catering menus to offer 100% pure vegetarian and Jain-friendly menus. Our menus feature local Brijwasi sweets (such as Mathura peda, rabri), traditional UP specialties, and multi-cuisine counters.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you set up events along the Yamuna riverside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we coordinate with riverside gardens and properties along the Yamuna river to set up beautiful open-air stages, floral arches, and festive decorations for weddings and cultural programs.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which other cities do you serve in the region?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Besides Mathura, we provide full-service event planning in Agra, Firozabad, Shikohabad, Mainpuri, and nearby rural areas. Visit our other pages like Event Planner in Agra to learn more.'
      }
    }
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl('/')
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Event Planner in Mathura',
      item: siteUrl('/event-planner-in-mathura')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Mathura',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/event-planner-in-mathura#localbusiness',
  url: 'https://www.eventkro.in/event-planner-in-mathura',
  telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
  email: SITE_EMAIL,
  priceRange: '₹₹',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.4924,
    longitude: 77.6737
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mathura Brij Region Office',
    addressLocality: 'Mathura',
    addressRegion: 'Uttar Pradesh',
    postalCode: '281001',
    addressCountry: 'IN'
  },
  areaServed: 'Mathura',
  description: 'Professional event planning, traditional wedding management, cultural event setups, and pure vegetarian catering in Mathura by Eventkro.'
};

export default function MathuraEventPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="mathura-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="mathura-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="mathura-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
