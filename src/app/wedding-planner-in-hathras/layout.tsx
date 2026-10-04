import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Wedding Planner in Hathras | Customized Wedding Management | Eventkro',
  description: 'Looking for a wedding planner in Hathras? Eventkro provides customized wedding coordination, mandap decoration, Haldi, Mehendi, and Sangeet setups, and catering coordination across Hathras, Sasni, Sadabad, and Sikandra Rao.',
  path: '/wedding-planner-in-hathras',
  keywords: [
    'wedding planner in hathras',
    'wedding planning in hathras',
    'wedding decoration in hathras',
    'mandap decoration hathras',
    'haldi mehendi decoration hathras',
    'wedding management hathras',
    'wedding planner sasni',
    'wedding planner sadabad',
    'wedding planner sikandra rao',
  ],
  image: '/images/hathras/wedding-planner-in-hathras-hero.webp',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does wedding planning pricing work with Eventkro in Hathras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro operates on a requirement-based quotation model rather than offering fixed packages. Because each celebration varies in ceremonial scope, chosen venue setup, guest gathering size, decor preferences, and catering needs, pricing is estimated following a detailed consultation. A custom quote is shared based on your specific event requirements and preferences.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which wedding and pre-wedding functions can you coordinate in Hathras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coordination support can cover the complete ceremonial schedule based on your needs. This can include Roka and engagement setups, Haldi and Mehendi decor, Sangeet staging and lighting, baraat reception arrangements, mandap decor for wedding rituals, and evening reception setups, depending on venue facilities and vendor availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you coordinate decorations and services at our chosen marriage lawn, banquet, or home in Hathras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Coordination can be organized at your selected venue. Whether you have booked an open-air marriage lawn along local highways, a banquet hall in town, or plan to host celebrations at a private family home or property in Hathras, Sasni, Sadabad, or Sikandra Rao, setups and vendor arrangements can be planned around the venue layout.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide wedding coordination across Sasni, Sadabad, and Sikandra Rao?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In addition to Hathras city, service coverage can extend to confirmed nearby tehsils including Sasni, Sadabad, and Sikandra Rao, subject to vendor availability and logistical planning for your selected dates.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can families book individual wedding services such as only mandap decor or catering coordination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While comprehensive ceremony coordination is available, individual service requirements can also be arranged. Families can request specific support such as mandap styling, stage lighting and sound coordination, pre-wedding ceremony decor, or catering management based on event needs.'
      }
    },
    {
      '@type': 'Question',
      name: 'How early should we start discussing wedding requirements with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discussing requirements 2 to 4 months in advance is recommended, particularly for dates during peak wedding seasons. Early discussion allows adequate time for venue layout review, concept discussions, vendor scheduling, and finalized quote confirmation.'
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
      name: 'Wedding Planner in Hathras',
      item: siteUrl('/wedding-planner-in-hathras')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Planning and Coordination in Hathras',
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
      name: 'Hathras',
      containedInPlace: {
        '@type': 'State',
        name: 'Uttar Pradesh'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Sasni'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Sadabad'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Sikandra Rao'
    }
  ],
  description: 'Customized wedding planning, ceremony coordination, mandap decoration, Haldi & Sangeet setups, sound, lighting, and catering coordination for weddings in Hathras, Sasni, Sadabad, and Sikandra Rao by Eventkro.',
};

export default function HathrasWeddingPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="hathras-wedding-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="hathras-wedding-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="hathras-wedding-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
