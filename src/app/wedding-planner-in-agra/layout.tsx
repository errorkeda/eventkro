import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Wedding Planner in Agra | Luxury Wedding Management | Eventkro',
  description: 'Looking for the best wedding planner in Agra? Eventkro offers premium wedding decorations, royal venue setups, Mughlai catering, and full wedding management in Agra.',
  path: '/wedding-planner-in-agra',
  keywords: [
    'wedding planner in agra',
    'best wedding planner in agra',
    'agra wedding decorators',
    'royal wedding planners agra',
    'destination wedding agra',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of wedding themes do you specialize in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in royal Mughal themes, luxury outdoor destination weddings, floral fusion setups, and contemporary minimalist pastels. We customize every mandap and stage design to suit your specific preferences.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you manage catering menus for weddings in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, catering is a key part of our wedding planning. We coordinate with Agra’s top chefs to offer traditional Mughlai feasts, rich North Indian curries, interactive live counters, and localized Agra petha dessert spreads.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which wedding venues in Agra do you recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend venues that offer scenic backdrops, such as Taj View Gardens for close Taj Mahal views, Heritage Mughal Palace for historical royal architecture, and Jaypee Palace or ITC Mughal for high-end luxury requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should we hire a wedding planner in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We suggest booking our wedding planning services 4 to 6 months in advance. This ensures availability of preferred venues, visual designers, and professional photographers during peak wedding seasons.'
      }
    },
    {
      '@type': 'Question',
      name: 'What pre-wedding events do you manage in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We manage the entire wedding sequence, including Roka / Sagai ring exchanges, colorful Haldi ceremonies, Sangeet dance stages, Mehendi setups, and pre-wedding photoshoots near the Taj Mahal.'
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
      name: 'Wedding Planner in Agra',
      item: siteUrl('/wedding-planner-in-agra')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Wedding Planners Agra',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/wedding-planner-in-agra#localbusiness',
  url: 'https://www.eventkro.in/wedding-planner-in-agra',
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
    streetAddress: 'Fatehabad Road Office',
    addressLocality: 'Agra',
    addressRegion: 'Uttar Pradesh',
    postalCode: '282001',
    addressCountry: 'IN'
  },
  areaServed: 'Agra',
  description: 'Premium wedding planning, royal theme design, Mughlai catering, and mandap decoration in Agra by Eventkro.'
};

export default function AgraWeddingPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="agra-wedding-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="agra-wedding-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="agra-wedding-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
