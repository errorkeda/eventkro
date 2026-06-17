import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Proposal Decoration in Mathura | Romantic Proposal Setup & Surprise Planning',
  description: 'Plan the ultimate surprise with premium proposal decoration in Mathura. Eventkro offers romantic rooftop setups, candle light setups, hotel room decorations, and "Will You Marry Me" balloon and light arrangements in Mathura.',
  path: '/proposal-decoration-in-mathura',
  keywords: [
    'proposal decoration mathura',
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
      name: 'What is the cost of proposal decoration in Mathura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The price for proposal decoration in Mathura starts from ₹3,999 for romantic room balloon decorations and ranges up to ₹19,999+ for premium outdoor terrace or garden setups in Vrindavan and Mathura.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide rooftop proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We specialize in rooftop proposal decorations in Mathura and Vrindavan, utilizing heavy-duty backdrops, LED signs, floral arches, and pathway lights to design a scenic skyline surprise.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you arrange same day proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, same-day bookings are available in Mathura. Please contact us early in the morning so our local teams can organize materials and coordinate the slot.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide hotel room proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide surprise hotel room proposal decorations at leading resorts, hotels, and guest houses across Mathura and Vrindavan, setting up helium balloons, flower petals, and custom lettering.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you customize proposal themes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We can customize themes using specific color schemes, floral arches, marquee letter heights, fairy lights, and live musician support.'
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
      name: 'Proposal Decoration in Mathura',
      item: siteUrl('/proposal-decoration-in-mathura')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Mathura Proposal Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/proposal-decoration-in-mathura#localbusiness',
  url: 'https://www.eventkro.in/proposal-decoration-in-mathura',
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
  description: 'Premium surprise proposal decoration, romantic setup, rooftop proposal decoration, candle light dinner proposal, and balloon decor by Eventkro in Mathura.'
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Proposal Decoration in Mathura',
  serviceType: 'Surprise Proposal Decoration',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eventkro Mathura Proposal Decoration',
    image: 'https://www.eventkro.in/favicon-512x512.png',
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
    }
  },
  areaServed: {
    '@type': 'Place',
    name: 'Mathura'
  },
  description: 'Premium surprise proposal decoration, romantic setup, rooftop proposal decoration, candle light dinner proposal, and balloon decor by Eventkro in Mathura.'
};

export default function MathuraProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="mathura-proposal-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="mathura-proposal-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="mathura-proposal-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="mathura-proposal-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
