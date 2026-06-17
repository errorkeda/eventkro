import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Proposal Decoration in Shikohabad | Romantic Proposal Setup & Surprise Planning',
  description: 'Plan the ultimate surprise with premium proposal decoration in Shikohabad. Eventkro offers romantic rooftop setups, candle light setups, hotel room decorations, and "Will You Marry Me" balloon and light arrangements in Shikohabad.',
  path: '/proposal-decoration-in-shikohabad',
  keywords: [
    'proposal decoration shikohabad',
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
      name: 'What is the cost of proposal decoration in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The price for proposal decoration in Shikohabad starts from ₹3,999 for romantic room balloon decorations and ranges up to ₹16,999+ for premium outdoor terrace or garden setups.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide rooftop proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We specialize in rooftop proposal decorations in Shikohabad, using structural frameworks, LED neon signs, fairy lights, and glass candle jars to create a safe and spectacular surprise.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you arrange same day proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, same-day bookings are available in Shikohabad. Please call our team early in the morning so we can confirm decorator availability and material logistics.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide hotel room proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide romantic surprise room makeovers. We decorate hotel rooms across Shikohabad with rose petals, custom metallic balloons, and custom lighting setups.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you customize proposal themes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We can customize themes using specific color palettes, custom neon text, fresh flowers, and live guitar players.'
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
      name: 'Proposal Decoration in Shikohabad',
      item: siteUrl('/proposal-decoration-in-shikohabad')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Shikohabad Proposal Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/proposal-decoration-in-shikohabad#localbusiness',
  url: 'https://www.eventkro.in/proposal-decoration-in-shikohabad',
  telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
  email: SITE_EMAIL,
  priceRange: '₹₹',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.1065,
    longitude: 78.5835
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shikohabad Station Road Office',
    addressLocality: 'Shikohabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '283135',
    addressCountry: 'IN'
  },
  areaServed: 'Shikohabad',
  description: 'Premium surprise proposal decoration, romantic setup, rooftop proposal decoration, candle light dinner proposal, and balloon decor by Eventkro in Shikohabad.'
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Proposal Decoration in Shikohabad',
  serviceType: 'Surprise Proposal Decoration',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eventkro Shikohabad Proposal Decoration',
    image: 'https://www.eventkro.in/favicon-512x512.png',
    telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
    email: SITE_EMAIL,
    priceRange: '₹₹',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.1065,
      longitude: 78.5835
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shikohabad Station Road Office',
      addressLocality: 'Shikohabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '283135',
      addressCountry: 'IN'
    }
  },
  areaServed: {
    '@type': 'Place',
    name: 'Shikohabad'
  },
  description: 'Premium surprise proposal decoration, romantic setup, rooftop proposal decoration, candle light dinner proposal, and balloon decor by Eventkro in Shikohabad.'
};

export default function ShikohabadProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="shikohabad-proposal-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="shikohabad-proposal-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="shikohabad-proposal-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="shikohabad-proposal-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
