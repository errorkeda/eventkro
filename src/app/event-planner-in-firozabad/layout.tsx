import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planner in Firozabad | Wedding & Balloon Decoration | Eventkro',
  description: 'Looking for the best event planner in Firozabad? Eventkro offers premium wedding planning, glass decor setups, birthday decoration, catering, and corporate event management in Firozabad.',
  path: '/event-planner-in-firozabad',
  keywords: [
    'event planner in firozabad',
    'wedding planner in firozabad',
    'best event planner in firozabad',
    'balloon decoration firozabad',
    'event decorators firozabad',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Eventkro considered the best event planner in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro stands out in Firozabad by offering high-quality design integration (featuring custom local glass art decoration), professional catering, and dynamic timeline management. We deliver premium events at competitive rates.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of decorations do you offer in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in organic balloon decorations (arches, backdrop walls), fresh floral arrangements for mandaps, structural lighting setups, and unique glass-themed decor utilizing Firozabad’s famous local glass craftsmanship.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you organize corporate exhibitions or product launches in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We set up corporate pavilions, exhibition stalls, store inaugurations, dealer meets, and business seminars with advanced sound systems, projectors, and professional branding setups.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide catering services in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we manage premium catering services in Firozabad, designing customizable menus (North Indian, Mughlai, Chinese, street food) complete with professional servers and clean presentation.'
      }
    },
    {
      '@type': 'Question',
      name: 'What nearby cities do you serve in the region?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In addition to Firozabad city, we serve Agra, Mathura, Shikohabad, Mainpuri, Tundla, and neighboring towns in the Agra Mandal.'
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
      name: 'Event Planner in Firozabad',
      item: siteUrl('/event-planner-in-firozabad')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Firozabad',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/event-planner-in-firozabad#localbusiness',
  url: 'https://www.eventkro.in/event-planner-in-firozabad',
  telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
  email: SITE_EMAIL,
  priceRange: '₹₹',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.1592,
    longitude: 78.3957
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Firozabad Glass Bazar Office',
    addressLocality: 'Firozabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '283203',
    addressCountry: 'IN'
  },
  areaServed: 'Firozabad',
  description: 'Professional event planning, glass-art wedding setups, balloon decoration, and catering services in Firozabad by Eventkro.'
};

export default function FirozabadEventPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="firozabad-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="firozabad-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="firozabad-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
