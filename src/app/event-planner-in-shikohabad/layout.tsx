import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planner in Shikohabad | Wedding & Corporate Management | Eventkro',
  description: 'Looking for the best event planner in Shikohabad? Eventkro offers premium wedding planning, birthday party decoration, balloon decor, catering, and corporate event management in Shikohabad.',
  path: '/event-planner-in-shikohabad',
  keywords: [
    'event planner in shikohabad',
    'wedding planner in shikohabad',
    'best event planner in shikohabad',
    'balloon decoration shikohabad',
    'event decorators shikohabad',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Eventkro the best event planner in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro provides reliable end-to-end event planning, localized vendor coordination, premium balloon & floral designs, and professional catering in Shikohabad at competitive prices. We manage every detail, ensuring a stress-free client experience.'
      }
    },
    {
      '@type': 'Question',
      name: 'What event planning services do you offer in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide full wedding management, pre-wedding functions (Roka, Sagai, Haldi, Mehendi), themed birthday party decorations, balloon arches and backdrop walls, professional catering services, and corporate meetings setup.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer catering services in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer fully customizable multi-cuisine catering packages (North Indian, traditional UP dishes, Mughlai, street food stalls, and desserts) prepared under high safety and hygiene conditions.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book my event in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For weddings and large corporate events, we suggest booking 3 to 6 months in advance. For themed birthday parties or quick balloon decorations, booking 1 to 2 weeks ahead is usually sufficient.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which nearby locations in the region do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Along with Shikohabad, we serve the wider Agra Mandal region including Firozabad, Agra, Mathura, Mainpuri, Tundla, and adjacent towns.'
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
      name: 'Event Planner in Shikohabad',
      item: siteUrl('/event-planner-in-shikohabad')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Shikohabad',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/event-planner-in-shikohabad#localbusiness',
  url: 'https://www.eventkro.in/event-planner-in-shikohabad',
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
  description: 'Professional event planning, wedding management, balloon decoration, and catering services in Shikohabad by Eventkro.'
};

export default function ShikohabadEventPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="shikohabad-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="shikohabad-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="shikohabad-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
