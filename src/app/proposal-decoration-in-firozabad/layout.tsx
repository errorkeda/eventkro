import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Proposal Decoration in Firozabad | Romantic Proposal Setup & Surprise Planning',
  description: 'Surprise proposal decoration in Firozabad by Eventkro. Custom room makeovers, terrace candlelight setups, neon backdrops, and romantic decor tailored to your venue.',
  path: '/proposal-decoration-in-firozabad',
  keywords: [
    'proposal decoration firozabad',
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
      name: 'What is the cost of proposal decoration in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proposal decoration pricing in Firozabad is customized based on your setup requirements rather than a rigid fixed package. Pricing depends on your chosen venue (private bedroom, hotel suite, or open terrace), backdrop dimensions, lighting complexity, floral styling, and optional add-ons like live acoustic music or photography. Contact Eventkro with your venue details for a transparent quotation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you set up proposal decoration on a private terrace or rooftop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design outdoor terrace and rooftop proposal setups across Firozabad. For open-air spaces, we ensure structural stability for backdrop frameworks, secure lighting connections for neon signs and fairy lights, and arrange illumination suitable for evening photography.'
      }
    },
    {
      '@type': 'Question',
      name: 'How early should we book a surprise proposal in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend discussing your proposal setup at least 2 to 3 days in advance. This allows time to coordinate venue access, prepare custom floral arrangements, and test specialized lighting elements. Short-notice requests are evaluated based on decorator schedule and material availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you decorate a hotel room or private dining space?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, provided the hotel management or restaurant host permits outside event decorators. We coordinate setup access in advance so the room or private dining space is completely decorated before your scheduled arrival.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can proposal themes and color palettes be customized?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Every setup can be customized to your preferred color palette (such as classic crimson, blush rose gold, or warm ivory), personalized neon signage, balloon styling, and floral selections.'
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
      name: 'Proposal Decoration in Firozabad',
      item: siteUrl('/proposal-decoration-in-firozabad')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Proposal Decoration in Firozabad',
  serviceType: 'Surprise Proposal Decoration',
  provider: {
    '@type': 'Organization',
    name: 'Eventkro',
    url: 'https://www.eventkro.in',
    telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
    email: SITE_EMAIL,
    image: 'https://www.eventkro.in/favicon-512x512.png'
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Firozabad, Uttar Pradesh, India'
  },
  description: 'Surprise proposal decoration, romantic setups, rooftop proposal setups, candle light dinner decor, and balloon decor by Eventkro in Firozabad.'
};

export default function FirozabadProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="firozabad-proposal-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="firozabad-proposal-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="firozabad-proposal-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
