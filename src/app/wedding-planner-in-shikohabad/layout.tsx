import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Wedding Planner in Shikohabad | Luxury Wedding Management | Eventkro',
  description: 'Looking for the best wedding planner in Shikohabad? Eventkro offers premium wedding decorations, spacious highway marriage lawns, custom catering, and full wedding management in Shikohabad.',
  path: '/wedding-planner-in-shikohabad',
  keywords: [
    'wedding planner in shikohabad',
    'best wedding planner in shikohabad',
    'shikohabad wedding decorators',
    'marriage lawn booking shikohabad',
    'wedding organizers shikohabad',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What wedding services do you provide in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide complete end-to-end wedding services in Shikohabad, including custom wedding theme decorations, large-capacity venue sourcing, pure vegetarian catering, and professional ceremony coordination.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which wedding venues in Shikohabad do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We coordinate with the leading banquet halls and marriage lawns in Shikohabad, including Shikohabad Palace, Balaji Marriage Home, and grand lawns located along the national highway (NH-19).'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you customize catering menus for Shikohabad weddings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We coordinate personalized catering packages featuring traditional sweets (rabri, gulab jamun), rich North Indian curries, interactive chat counters, and regional specialties.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Eventkro manage budget-friendly weddings in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer flexible wedding planning packages (Basic, Premium, and Elite) that optimize vendor costs, floral staging, and venue setup to deliver luxury weddings within your budget.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you organize pre-wedding ceremonies like Haldi and Sangeet in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We design custom decoration setups for Haldi (with marigold themes and swings), Sangeet stages (with professional lighting and AV systems), and Mehendi functions.'
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
      name: 'Wedding Planner in Shikohabad',
      item: siteUrl('/wedding-planner-in-shikohabad')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Wedding Planners Shikohabad',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/wedding-planner-in-shikohabad#localbusiness',
  url: 'https://www.eventkro.in/wedding-planner-in-shikohabad',
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
    streetAddress: 'Station Road Office',
    addressLocality: 'Shikohabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '283135',
    addressCountry: 'IN'
  },
  areaServed: 'Shikohabad',
  description: 'Premium wedding planning, spacious highway venue sourcing, regional catering, and floral decoration in Shikohabad by Eventkro.'
};

export default function ShikohabadWeddingPlannerLayout({
  children,
  }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="shikohabad-wedding-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="shikohabad-wedding-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="shikohabad-wedding-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
