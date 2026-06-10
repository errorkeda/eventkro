import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Wedding Planner in Mathura | Brij Cultural Weddings | Eventkro',
  description: 'Looking for the best wedding planner in Mathura? Eventkro offers traditional Braj wedding planning, Vrindavan venues, pure vegetarian catering, and custom floral decorations.',
  path: '/wedding-planner-in-mathura',
  keywords: [
    'wedding planner in mathura',
    'best wedding planner in mathura',
    'mathura wedding decorators',
    'traditional weddings mathura',
    'vrindavan wedding planners',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Eventkro the top choice for weddings in Mathura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro specializes in traditional Brijwasi weddings. We integrate spiritual aesthetics, pure vegetarian Braj menus, and local folk elements like Raslila and shehnai, while ensuring professional timeline and venue coordination.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer pure vegetarian wedding catering in Mathura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We coordinate 100% pure vegetarian and onion-garlic-free (Jain) catering packages. Our setups feature Mathura pedas, rabri-malpua, traditional kachori-sabzi, and multi-cuisine buffets.'
      }
    },
    {
      '@type': 'Question',
      name: 'What local decoration styles do you use in Mathura Vrindavan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We design spiritual temple themes featuring brass lamp setups, marigold arches, fresh lotus arrangements, and traditional swings (jhulas) that honor the Lord Krishna legacy.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you coordinate wedding functions along the Yamuna riverside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work closely with riverside gardens in Mathura to build open-air mandaps and floral walk-paths offering panoramic views of the river ghats.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you serve Vrindavan and other surrounding locations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we manage wedding events in Mathura, Vrindavan, Barsana, Gokul, Nandgaon, and all major areas in the Braj region.'
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
      name: 'Wedding Planner in Mathura',
      item: siteUrl('/wedding-planner-in-mathura')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Wedding Planners Mathura',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/wedding-planner-in-mathura#localbusiness',
  url: 'https://www.eventkro.in/wedding-planner-in-mathura',
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
    streetAddress: 'Vrindavan Road Office',
    addressLocality: 'Mathura',
    addressRegion: 'Uttar Pradesh',
    postalCode: '281001',
    addressCountry: 'IN'
  },
  areaServed: 'Mathura',
  description: 'Traditional wedding planning, Vrindavan venue sourcing, pure vegetarian catering, and spiritual theme decoration in Mathura by Eventkro.'
};

export default function MathuraWeddingPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="mathura-wedding-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="mathura-wedding-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="mathura-wedding-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
