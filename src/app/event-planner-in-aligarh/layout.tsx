import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planner in Aligarh | Customized Event Services | Eventkro',
  description: 'Looking for a reliable event planner in Aligarh? Eventkro provides customized planning for weddings, birthdays, devotional programs, college events & celebrations in Aligarh, Khair, Gabhana & Jattari.',
  path: '/event-planner-in-aligarh',
  keywords: [
    'event planner in aligarh',
    'event management aligarh',
    'wedding planner aligarh',
    'birthday decoration aligarh',
    'jagrata event planner aligarh',
    'bhajan sandhya aligarh',
    'catering services aligarh',
    'event decorator aligarh',
  ],
  image: '/images/aligarh/event-planner-in-aligarh-hero.webp',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is event planning priced in Aligarh with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro does not enforce rigid fixed packages or arbitrary pricing. The cost for event planning in Aligarh is determined entirely by your specific event requirements: type of event, guest count, venue setup, floral and balloon decoration scale, stage lighting, sound systems, and catering preferences. We offer a free initial consultation and prepare a transparent, customized quote aligned with your planned budget.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we hire Eventkro for devotional and religious programs in Aligarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Devotional and spiritual programs are a major specialty for our team in Aligarh. We provide complete setup and coordination for Mata ka Jagrata and Chowki, Khatu Shyam Bhajan Sandhya, multi-day Shrimad Bhagwat Katha, Ramayan and Sundarkand Path, Sai Sandhya, Shiv Vivah, and Krishna Leela. We manage sacred bhawan floral decor, crystal-clear devotional sound, seating, and prasad catering.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide event management in Khair, Gabhana, and Jattari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In addition to serving central Aligarh, our on-site coordination and logistics network actively covers nearby confirmed areas including Khair, Gabhana, and Jattari. We transport equipment, decoration setups, and coordination teams directly to your chosen venue or home in these towns.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we book individual services like only sound, lighting, or decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. While many families and organizations in Aligarh prefer end-to-end event planning, you can also book individual services on demand. Whether you need only professional sound and stage lighting for a musical event, custom balloon decoration for a birthday, or dedicated catering management, we can accommodate your specific scope.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you organize college, university, and corporate events in Aligarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Given Aligarh\'s prominent educational and institutional landscape, we frequently coordinate college festivals, academic seminars, departmental convocations, freshers gatherings, and corporate meets. We set up executive stages, podiums, AV equipment, projection screens, attendee seating, and institutional high-tea or lunch catering.'
      }
    },
    {
      '@type': 'Question',
      name: 'How early should we discuss our event requirements with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For large celebrations such as weddings, multi-day Katha programs, or major college festivals, we recommend discussing your requirements 1 to 3 months in advance to ensure preferred scheduling and custom design development. For birthdays, private family celebrations, or single-day bhajan sandhyas, 1 to 2 weeks of advance notice is usually sufficient.'
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
      name: 'Event Planner in Aligarh',
      item: siteUrl('/event-planner-in-aligarh')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Event Planning and Management in Aligarh',
  serviceType: 'Event Planning and Coordination',
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
      name: 'Aligarh',
      containedInPlace: {
        '@type': 'State',
        name: 'Uttar Pradesh'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Khair'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Gabhana'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Jattari'
    }
  ],
  description: 'Customized event planning services in Aligarh covering weddings, birthday celebrations, devotional ceremonies, college festivals, and corporate events by Eventkro.',
};

export default function AligarhEventPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="aligarh-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="aligarh-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="aligarh-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
