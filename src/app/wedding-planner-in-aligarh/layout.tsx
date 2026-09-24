import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Wedding Planner in Aligarh | Customized Wedding Management | Eventkro',
  description: 'Looking for a dedicated wedding planner in Aligarh? Eventkro provides customized wedding coordination, mandap decoration, Haldi & Sangeet styling, and catering across Aligarh, Khair, Gabhana & Jattari.',
  path: '/wedding-planner-in-aligarh',
  keywords: [
    'wedding planner in aligarh',
    'best wedding planner in aligarh',
    'wedding decoration aligarh',
    'mandap decoration aligarh',
    'haldi mehendi planner aligarh',
    'wedding catering aligarh',
    'wedding stage decorator aligarh',
    'marriage lawn wedding planner aligarh',
  ],
  image: '/images/aligarh/wedding-planner-in-aligarh-hero.webp',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does wedding planning pricing work with Eventkro in Aligarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro operates on a transparent, requirement-based pricing model rather than rigid pre-packaged bundles. Because every wedding differs in ritual duration, guest count, chosen venue layout, decoration scale, sound and lighting setup, and catering requirements, we consult directly with you first. We then prepare a clear, itemized quotation customized specifically to your planned celebration and budget.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which wedding functions and pre-wedding ceremonies do you manage in Aligarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We manage the complete sequence of wedding celebrations. This includes Roka and engagement setups, vibrant Haldi functions with marigold decor, Mehendi artist coordination and seating, high-energy Sangeet stage and lighting setups, traditional baraat entries, sacred mandap wedding ceremonies, and elegant reception evenings.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you plan and decorate weddings at our chosen marriage lawn, hotel, or private property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eventkro provides comprehensive wedding coordination and decoration at your chosen venue. Whether you have booked an open-air marriage lawn, a banquet hall, a hotel venue, or wish to host the celebrations at your private residence or family property in Aligarh, Khair, Gabhana, or Jattari, our team manages on-site logistics, staging, and styling.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide wedding planning services in Khair, Gabhana, and Jattari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In addition to central Aligarh, our on-site coordination and logistics network actively covers nearby confirmed towns including Khair, Gabhana, and Jattari. We transport staging, floral decor, lighting rigs, and coordination teams directly to your venue location.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we book individual wedding services like only mandap decoration, sound, or catering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While many families in Aligarh prefer complete end-to-end wedding management, Eventkro readily accommodates modular bookings. You can hire us specifically for stage and mandap floral styling, professional sound and stage lighting, Haldi/Mehendi thematic setups, or wedding catering coordination based on your specific requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'How early should we discuss our wedding requirements with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For comprehensive wedding coordination, we recommend reaching out 2 to 4 months in advance. This ensures sufficient time for venue layout visits, personalized theme and mandap designing, tasting and menu curation, and dependable vendor scheduling during peak wedding dates.'
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
      name: 'Wedding Planner in Aligarh',
      item: siteUrl('/wedding-planner-in-aligarh')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Planning and Coordination in Aligarh',
  serviceType: 'Wedding Planning and Coordination',
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
  description: 'Customized wedding planning, ceremony coordination, mandap decoration, Haldi & Sangeet styling, sound, lighting, and catering management for weddings in Aligarh, Khair, Gabhana, and Jattari by Eventkro.',
};

export default function AligarhWeddingPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="aligarh-wedding-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="aligarh-wedding-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="aligarh-wedding-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
