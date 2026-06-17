import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Proposal Decoration in Agra | Romantic Proposal Setup & Surprise Planning',
  description: 'Plan the ultimate surprise with premium proposal decoration in Agra. Eventkro offers romantic rooftop setups, candle light setups, hotel room decorations, and "Will You Marry Me" balloon and light arrangements in Agra.',
  path: '/proposal-decoration-in-agra',
  keywords: [
    'proposal decoration agra',
    'surprise proposal setup',
    'marriage proposal decoration',
    'romantic proposal setup',
    'rooftop proposal decoration',
    'will you marry me decoration',
    'candle light proposal setup',
    'proposal surprise planner',
    'engagement proposal decoration',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of proposal decoration in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The price for proposal decoration in Agra starts from ₹3,999 for standard hotel room balloon decorations and goes up to ₹24,999+ for premium luxury rooftop setups or private candle light dining experiences with views of the Taj Mahal.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide rooftop proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we are specialists in rooftop proposal decorations in Agra. We set up beautiful illuminated heart arches, neon "Will You Marry Me" signage, fairy lights, and red carpet runways on premium partner hotel rooftops or private terraces.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you arrange same day proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We can coordinate same-day proposal decorations in Agra. However, we advise booking at least 24 to 48 hours in advance to guarantee slots and customization options.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide hotel room proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide romantic surprise room makeovers. We decorate hotel rooms across Agra with rose petals, custom balloons (chrome and metallic), candles, and photo hanging setups.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you customize proposal themes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We can customize everything from color themes (classic red, pastel, rose gold) to custom floral backdrops, cold pyros, live violin players, and personalized text.'
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
      name: 'Proposal Decoration in Agra',
      item: siteUrl('/proposal-decoration-in-agra')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Agra Proposal Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/proposal-decoration-in-agra#localbusiness',
  url: 'https://www.eventkro.in/proposal-decoration-in-agra',
  telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
  email: SITE_EMAIL,
  priceRange: '₹₹',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.1767,
    longitude: 78.0081
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fatehabad Road Office',
    addressLocality: 'Agra',
    addressRegion: 'Uttar Pradesh',
    postalCode: '282001',
    addressCountry: 'IN'
  },
  areaServed: 'Agra',
  description: 'Premium surprise proposal decoration, romantic setup, rooftop proposal decoration, candle light dinner proposal, and balloon decor by Eventkro in Agra.'
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Proposal Decoration in Agra',
  serviceType: 'Surprise Proposal Decoration',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eventkro Agra Proposal Decoration',
    image: 'https://www.eventkro.in/favicon-512x512.png',
    telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
    email: SITE_EMAIL,
    priceRange: '₹₹',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.1767,
      longitude: 78.0081
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fatehabad Road Office',
      addressLocality: 'Agra',
      addressRegion: 'Uttar Pradesh',
      postalCode: '282001',
      addressCountry: 'IN'
    }
  },
  areaServed: {
    '@type': 'Place',
    name: 'Agra'
  },
  description: 'Premium surprise proposal decoration, romantic setup, rooftop proposal decoration, candle light dinner proposal, and balloon decor by Eventkro in Agra.'
};

export default function AgraProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="agra-proposal-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="agra-proposal-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="agra-proposal-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="agra-proposal-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
