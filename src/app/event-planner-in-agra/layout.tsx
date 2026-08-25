import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planner in Agra | Event Planning Services | Eventkro',
  description: 'Looking for an event planner in Agra? Eventkro helps plan birthdays, weddings, anniversaries, proposals and other memorable celebrations with professional event services and decoration.',
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
      name: 'How much does an event planner in Agra cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of hiring an event planner in Agra varies depending on the event type, scale, guest count, and decoration requirements. Eventkro offers flexible and customizable packages tailored to your budget. Contact us for a free consultation and a detailed, personalized quote.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of events does Eventkro plan in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We plan and manage a wide range of events in Agra, including themed birthday parties, weddings, engagement ceremonies, anniversaries, romantic proposals, baby showers, and corporate events.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can Eventkro arrange birthday decorations in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We specialize in custom birthday decorations in Agra. Our team sets up premium balloon arches, backdrops, themed lighting, and cake tables at your home, restaurant, banquet hall, or private venue.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I book wedding or engagement event planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer complete wedding and engagement planning services in Agra, covering floral stage decorations, mandap setup, guest hospitality, catering, and pre-wedding ceremonies like Haldi, Mehendi, and Roka.'
      }
    },
    {
      '@type': 'Question',
      name: 'How early should I book an event planner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For large celebrations like weddings and corporate events, we recommend booking 3 to 6 months in advance. For themed birthdays, surprise proposals, or balloon decorations, booking 1 to 2 weeks ahead is usually sufficient.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Eventkro provide decoration and setup services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Eventkro provides full-service decoration and setup in Agra. We design and install custom balloon decor, fresh flower arrangements, lighting structures, and audio-visual equipment, managing everything from setup to post-event cleanup.'
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
