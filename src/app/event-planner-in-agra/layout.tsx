import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planner in Agra | Wedding & Corporate Event Management | Eventkro',
  description: 'Looking for the best event planner in Agra? Eventkro offers premium wedding planning, birthday party decoration, balloon decor, catering, and corporate events in Agra.',
  path: '/event-planner-in-agra',
  keywords: [
    'event planner in agra',
    'wedding planner in agra',
    'best event planner in agra',
    'balloon decoration agra',
    'event decorators agra',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Eventkro considered the best event planner in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro is highly rated due to our comprehensive end-to-end management, innovative theme decorations (including premium balloon and floral setups), professional catering services, and a dedicated network of premium local venues near the Taj Mahal. We ensure a stress-free planning experience from concept to cleanup.'
      }
    },
    {
      '@type': 'Question',
      name: 'What event planning services do you offer in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer full-service wedding planning, birthday party coordination, corporate event management, traditional ceremonies (such as Roka, Sagai, Haldi, and Mehendi), balloon arches and backdrops, photography packages, and premium multi-cuisine catering.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer customized catering packages in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We coordinate with premium catering services in Agra to deliver custom menus. Whether you need traditional Mughlai cuisine, North Indian feasts, live chat counters, or customized continental menus, we ensure exceptional taste and hygiene.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book my event in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For weddings and large corporate events in Agra, we recommend booking 3 to 6 months in advance. For themed birthday parties or quick balloon decorations, 1 to 2 weeks notice is generally sufficient.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which areas near Agra do you provide event planning services to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In addition to Agra city, we serve surrounding cities in the Agra Mandal region including Mathura, Firozabad, Shikohabad, Mainpuri, Tundla, and Fatehabad.'
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
      name: 'Event Planner in Agra',
      item: siteUrl('/event-planner-in-agra')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Agra',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/event-planner-in-agra#localbusiness',
  url: 'https://www.eventkro.in/event-planner-in-agra',
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
    streetAddress: 'Agra City Center',
    addressLocality: 'Agra',
    addressRegion: 'Uttar Pradesh',
    postalCode: '282001',
    addressCountry: 'IN'
  },
  areaServed: 'Agra',
  description: 'Professional event planning, wedding coordination, decoration, and catering services in Agra by Eventkro.'
};

export default function AgraEventPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="agra-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="agra-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="agra-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
