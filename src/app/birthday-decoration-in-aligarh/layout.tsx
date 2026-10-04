import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Birthday Decoration in Aligarh | Custom Birthday Decor | Eventkro',
  description: 'Looking for custom birthday decoration in Aligarh? Eventkro coordinates personalized birthday decor, balloon styling, theme setups, and cake backdrops for homes and celebration venues in Aligarh, Khair, Gabhana, and Jattari.',
  path: '/birthday-decoration-in-aligarh',
  keywords: [
    'birthday decoration in aligarh',
    'birthday decorators aligarh',
    'kids birthday decoration aligarh',
    'balloon decoration aligarh',
    'theme birthday party aligarh',
    'birthday surprise decoration aligarh',
    'home birthday decoration aligarh',
    'terrace birthday decoration aligarh',
  ],
  image: '/images/aligarh/birthday-decoration-in-aligarh-hero.webp',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does pricing work for birthday decoration in Aligarh with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro operates on a requirement-based pricing model rather than fixed packages. The cost is determined by your specific preferences: venue type (home, terrace, lawn, or hall), balloon styling scale, backdrop frame choice, lighting, and optional thematic props. After you share your requirements, we discuss the details and provide a transparent, customized quote aligned with your celebration budget.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which areas do you serve for birthday decorations around Aligarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We coordinate birthday decorations across central Aligarh as well as confirmed nearby areas including Khair, Gabhana, and Jattari. Setup arrangements and timing are scheduled directly at your home or chosen celebration venue in these locations.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we book birthday decorations for home setups or private rooms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many families in Aligarh choose intimate home celebrations in living rooms, drawing halls, or private bedrooms. We arrange space-conscious setups including balloon ring backdrops, cake-table styling, LED fairy lights, and themed foil accents tailored to your available room dimensions.'
      }
    },
    {
      '@type': 'Question',
      name: 'What themes are available for kids\' birthday parties in Aligarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We discuss a wide range of popular kids\' party themes including Jungle Safari, Superhero, Princess Castle, Space Adventure, Cartoon themes, and pastel color palettes. The exact backdrop elements, character cutouts, and balloon color schemes can be customized based on your preferences and availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we arrange milestone adult birthdays or surprise party setups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. For milestone celebrations such as 1st, 18th, 21st, 25th, or 50th birthdays, we can coordinate sophisticated chrome and pastel balloon arches, sequin shimmer walls, neon age lights, and terrace or lawn cabana setups. Surprise timings can be coordinated based on your party schedule.'
      }
    },
    {
      '@type': 'Question',
      name: 'How early should we discuss our birthday decoration requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend contacting us at least 3 to 7 days before your celebration so we can discuss your theme preferences, confirm decorator availability, and finalize setup details. If you have an urgent or shorter-notice celebration, feel free to reach out to check availability.'
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
      name: 'Birthday Decoration in Aligarh',
      item: siteUrl('/birthday-decoration-in-aligarh')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Birthday Decoration in Aligarh',
  serviceType: 'Birthday Decoration and Styling',
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
  description: 'Customized birthday decoration and party styling for homes and celebration venues in Aligarh, Khair, Gabhana, and Jattari by Eventkro.',
};

export default function AligarhBirthdayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="aligarh-birthday-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="aligarh-birthday-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="aligarh-birthday-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
