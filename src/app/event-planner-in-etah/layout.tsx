import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planner in Etah | Birthday & Family Events | Eventkro',
  description: 'Looking for an event planner in Etah? Eventkro provides customized planning for birthdays, Roka, family celebrations, devotional programs, decoration, sound and catering coordination.',
  path: '/event-planner-in-etah',
  keywords: [
    'event planner in etah',
    'event management in etah',
    'event organizer in etah',
    'birthday decoration in etah',
    'balloon decoration in etah',
    'roka decoration in etah',
    'haldi mehndi decoration in etah',
    'devotional event organizer in etah',
    'catering coordination in etah',
    'event planner jalesar',
    'event planner aliganj',
    'event planner awagarh',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does event planning pricing work with Eventkro in Etah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro operates on a requirement-based quotation model rather than offering fixed packages. Pricing is estimated based on your celebration type, venue layout, expected guest gathering, decoration preferences, sound and lighting needs, and catering coordination. Following an initial consultation, we share a transparent, customized estimate tailored to your event scope.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which types of celebrations and family events can you organize in Etah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We coordinate a variety of family and social events across Etah. This includes themed birthday parties, balloon decoration setups, Roka and engagement ceremonies, Haldi and Mehndi setups, anniversaries, naming ceremonies, and housewarming functions, as well as devotional gatherings such as Bhajan Sandhyas and Mata ki Chowki.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we coordinate devotional programs like Bhajan Sandhya or Mata ki Chowki in Etah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Devotional programs can be organized with dedicated stage setups, floral bhawan styling, acoustic sound systems suited for devotional singing, seating arrangements with floor carpets and mattresses, and coordination for prasad distribution based on your venue requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide event planning across Jalesar, Aliganj, and Awagarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In addition to Etah City, our coordination support extends across confirmed regional areas of Etah district including Jalesar, Aliganj, and Awagarh, subject to date scheduling, venue access, and vendor availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can families book individual services such as only balloon decoration or catering coordination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Families can book modular services based on their specific needs. Whether you require standalone balloon decoration for a birthday party, stage lighting and sound coordination for an evening gathering, or dedicated catering management for a social function, services can be selected individually or combined.'
      }
    },
    {
      '@type': 'Question',
      name: 'How early should we discuss our event requirements with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend discussing your requirements as early as practical. The ideal planning time depends on the event type, guest count, venue, decoration scope, and services required. Contact Eventkro with your event date and requirements so availability and planning needs can be discussed.'
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
      name: 'Event Planner in Etah',
      item: siteUrl('/event-planner-in-etah')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Event Planning and Management in Etah',
  serviceType: 'Event Planning and Management',
  provider: {
    '@type': 'Organization',
    name: 'Eventkro',
    url: 'https://www.eventkro.in',
    telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
    email: SITE_EMAIL,
    image: 'https://www.eventkro.in/favicon-512x512.png',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Etah',
      containedInPlace: {
        '@type': 'State',
        name: 'Uttar Pradesh'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Jalesar'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Aliganj'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Awagarh'
    }
  ],
  description: 'Customized event planning and coordination services in Etah covering birthday celebrations, Roka ceremonies, devotional programs, family functions, decoration, sound, and catering by Eventkro.',
};

export default function EtahEventPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="etah-event-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="etah-event-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="etah-event-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
