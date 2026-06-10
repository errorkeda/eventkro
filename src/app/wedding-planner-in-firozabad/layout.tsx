import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Wedding Planner in Firozabad | Glass Decor Weddings | Eventkro',
  description: 'Looking for the best wedding planner in Firozabad? Eventkro offers premium wedding planning, unique glass-themed decorations, local venue bookings, and delicious catering in Firozabad.',
  path: '/wedding-planner-in-firozabad',
  keywords: [
    'wedding planner in firozabad',
    'best wedding planner in firozabad',
    'firozabad wedding decorators',
    'glass decor wedding firozabad',
    'wedding management company firozabad',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What wedding decoration styles do you specialize in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in Firozabad’s signature glass decor, incorporating custom glass-blown ornaments, exquisite crystal chandeliers, colorful glass bead hangings, and elegant floral installations for mandaps and stages.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you manage catering menus for large weddings in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide full wedding catering services in Firozabad. We design customized menus featuring rich North Indian curries, traditional sweets like rabri-malpua, street-food chats, and multi-cuisine buffet spreads under high hygiene standards.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which wedding venues in Firozabad do you recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend and coordinate with leading local venues such as Suhag Nagar Lawn, Glass City Exhibition Hall, and premium hotel banquets along the Agra-Firozabad highway.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should we hire a wedding planner in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking Eventkro at least 3 to 5 months before your wedding. This allows enough time for securing the best venues, finalizing custom glass decor concepts, and booking premier culinary teams.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you handle pre-wedding and post-wedding functions in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We manage the entire wedding sequence, including Roka and Sagai exchanges, colorful Haldi ceremonies, Sangeet dance stages, Mehendi setups, and reception parties.'
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
      name: 'Wedding Planner in Firozabad',
      item: siteUrl('/wedding-planner-in-firozabad')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Wedding Planners Firozabad',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/wedding-planner-in-firozabad#localbusiness',
  url: 'https://www.eventkro.in/wedding-planner-in-firozabad',
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
    streetAddress: 'Glass Bazar Road Office',
    addressLocality: 'Firozabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '283203',
    addressCountry: 'IN'
  },
  areaServed: 'Firozabad',
  description: 'Premium wedding planning, glass-art theme design, wedding catering, and mandap decoration in Firozabad by Eventkro.'
};

export default function FirozabadWeddingPlannerLayout({
  children,
  }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="firozabad-wedding-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="firozabad-wedding-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="firozabad-wedding-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
