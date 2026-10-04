import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Bhagwat Katha Organiser in Aligarh | Event Coordination | Eventkro',
  description: 'Looking for a Shrimad Bhagwat Katha organiser in Aligarh? Eventkro assists with requirement-based Katha event coordination, pandal and seating setups, Vyas Peeth stage decoration, sound systems, and bhandara catering options in Aligarh, Khair, Gabhana, and Jattari.',
  path: '/bhagwat-katha-organiser-in-aligarh',
  keywords: [
    'bhagwat katha organiser in aligarh',
    'shrimad bhagwat katha aligarh',
    'bhagwat katha pandal setup aligarh',
    'vyas peeth decoration aligarh',
    'katha event coordination aligarh',
    'bhagwat katha sound setup aligarh',
    'bhandara catering coordination aligarh',
    'katha organisers khair gabhana jattari',
  ],
  image: '/images/aligarh/bhagwat-katha-in-aligarh-hero.webp',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Eventkro assist with Shrimad Bhagwat Katha coordination in Aligarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro coordinates the logistical, structural, and vendor setup for Shrimad Bhagwat Katha events. This includes arranging pandal structures, attendee seating, Vyas Peeth stage decoration, distributed vocal sound setups, and prasad or bhandara dining arrangements based on your specific gathering size and venue requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Eventkro provide the Kathavachak, priest, or spiritual speakers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The host family, organizing committee, or trust arranges their chosen Kathavachak, Vyas Ji, or pandit. Eventkro focuses exclusively on the event logistics, venue arrangements, stage styling, sound, and hospitality coordination so your spiritual leadership has a dignified and comfortable platform.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is every Bhagwat Katha organized for 7 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The duration and setup scope depend on the host\'s event plan, schedule and requirements. Pandal, seating, sound and other setup requirements can be discussed according to the planned program duration and vendor availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'What setup options are available for home, community lawns, or open grounds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on your expected gathering and location, we coordinate compact indoor setups for residential living areas or courtyards, as well as shaded pandal structures with carpeted floor seating or chair arrangements for community grounds, private lawns, or Dharamshala premises across Aligarh.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can Kalash Shobha Yatra or Bhandara arrangements be included?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, supportive arrangements such as Shobha Yatra floral decor, open vehicle styling, and large-scale prasad or Bhandara kitchen and dining setups can be discussed as optional additions based on your requirements and local vendor availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the pricing and booking process work for a Katha in Aligarh, Khair, Gabhana, or Jattari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do not offer rigid fixed packages because every Katha varies in duration, guest count, and setup scale. Once you share your dates, venue location, expected gathering, and specific requirements, our team discusses the options and provides a transparent, customized quote.'
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
      name: 'Bhagwat Katha Organiser in Aligarh',
      item: siteUrl('/bhagwat-katha-organiser-in-aligarh')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bhagwat Katha Organiser in Aligarh',
  serviceType: 'Bhagwat Katha Event Coordination',
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
  description: 'Requirement-based Shrimad Bhagwat Katha event coordination in Aligarh, Khair, Gabhana, and Jattari by Eventkro, including pandal setup, stage decoration, sound, and catering options.',
};

export default function AligarhKathaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="aligarh-katha-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="aligarh-katha-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="aligarh-katha-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
