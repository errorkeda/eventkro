import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planner in Shikohabad | Birthday & Pre-Wedding Events | Eventkro',
  description: 'Looking for an event planner in Shikohabad? Eventkro provides customized planning for Roka, Engagement, Mehndi, Haldi, birthdays, wedding functions, decoration and family celebrations.',
  path: '/event-planner-in-shikohabad',
  keywords: [
    'event planner in shikohabad',
    'wedding planner in shikohabad',
    'pre wedding planner shikohabad',
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
      name: 'What event planning services does Eventkro provide in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro provides structured event management in Shikohabad through end-to-end planning, requirement-based theme designs, localized vendor coordination, and catering management. We assist local families and hosts, delivering custom styling (including balloon decor and fresh flowers) based on event requirements and budget preferences. Our coordinators stay on-site during the event to help ensure smooth execution.'
      }
    },
    {
      '@type': 'Question',
      name: 'What event planning services do you offer in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide full wedding planning (stage decor, mandap styling), pre-wedding ceremonies (Roka, Sagai, Haldi, Mehendi), themed birthday party decorations (balloon arches, backdrop walls, table styling), anniversary and family celebrations, pure vegetarian and multi-cuisine catering, and professional lighting and audio setups.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer catering services in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Catering coordination is a key part of our service. We design customizable multi-cuisine menus (North Indian, traditional UP recipes, Mughlai, Chinese, and desserts). We operate under high safety and hygiene conditions, providing uniformed waitstaff, clean tables, and quality tableware.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book my event in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For grand weddings, ring ceremonies, or large family functions, we suggest booking at least 3 to 6 months in advance. This allows sufficient time to coordinate with chosen local venues and schedule decorators and caterers. For smaller birthday balloon decorations or baby showers, 1 to 2 weeks notice is generally sufficient.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which nearby locations in the region do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Along with Shikohabad, we serve the wider Agra Mandal region. We routinely manage events in Firozabad, Agra, Mathura, Mainpuri, Tundla, and adjacent towns. Explore our adjacent city landing pages: Event Planner in Agra, Event Planner in Mathura, and Event Planner in Firozabad.'
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
      {children}
    </>
  );
}
