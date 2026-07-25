import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Balloon Decoration in Delhi | Home & Hotel Decorators | Eventkro',
    description: 'Looking for the best balloon decoration in Delhi? We offer premium balloon decorators Delhi for home, hotel, and all events. Same day setup available!',
    path: '/balloon-decoration-in-delhi',
    keywords: [
      'balloon decoration in delhi',
      'balloon decorators delhi',
      'balloon decoration at home delhi',
      'balloon decoration delhi ncr',
      'birthday balloon decoration delhi',
      'anniversary balloon decoration delhi',
      'hotel balloon decoration delhi',
    ],
    image: '/images/delhi/anniversary-decoration-delhi-hero.webp',
  }),
  robots: { index: true, follow: true },
  authors: [{ name: 'Eventkro' }],
  publisher: 'Eventkro',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the starting price for balloon decoration in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The starting price for our premium balloon decoration at home in Delhi is ₹1,499. This includes metallic balloon decoration, customized banners, ribbons, and basic fairy lights. Premium ring setups and luxury arrangements range from ₹2,999 to ₹6,999+.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide same day balloon decoration in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer same-day surprise balloon decoration in Delhi NCR. If you place your reservation before 3:00 PM, our closest team near Dwarka, Rohini, or Lajpat Nagar will reach your location and complete the setup.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you decorate a hotel room for a surprise in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in surprise hotel room balloon decoration in Delhi (including Connaught Place, Karol Bagh, Vasant Kunj, Aerocity, and Noida). Please check with the hotel desk beforehand regarding their decorator entry policy.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is home balloon decoration safe for wall paint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our balloon decorators delhi use wall-safe masking tape to mount balloons and fairy lights, ensuring no damage to your paint. We do not use nails or double-sided tape that can peel off plaster.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you charge extra for travel to Noida, Gurgaon, or Faridabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic setup and delivery are included for all central Delhi areas. A minimal transport charge may apply only for outer locations in Gurgaon, Faridabad, or Greater Noida depending on the package.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which balloon types are used in your decorations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use premium metallic chrome, pastel, matte, and confetti-filled latex balloons. Combinations of chrome rose gold, champagne gold, silver, and vibrant colors are highly popular for balloon decoration in Delhi.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we request specific themes like birthday or anniversary balloon decorations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer specialized birthday balloon decoration Delhi and anniversary balloon decoration Delhi. You can request specific colors, themes, and personalized add-ons to suit your occasion.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we request fresh flower decorations along with balloons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can add fresh red rose petal pathways, table flower arrangements, and other floral details to any of our balloon decoration packages as a customizable add-on.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I book a balloon setup with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can submit the online booking form or message us directly on WhatsApp. We confirm your booking upon receiving a small advance token, and the rest is paid to the decorator after the setup.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is your cancellation or rescheduling policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rescheduling is free of charge if requested at least 48 hours in advance. For cancellations made within 24 hours of the slot, the token deposit is non-refundable as materials and decorators are already allocated.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I customize the colors and theme of the setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can customize the balloon colors, neon light text, backdrop frames (metal ring, sequin wall), and add customized photo hangings.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer terrace canopy setups with balloons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our terrace decorations are a top choice. We construct a secure canopy frame, weave warm fairy lights, and beautifully integrate organic balloon arrangements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide decoration services for large milestone events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we design grand setups for large milestones. These setups feature custom photo grids, numeric marquee lights, and premium organic balloon arches.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take for the balloon decorators to complete the setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard balloon setups take 45 to 60 minutes. High-end canopy tents, circular backdrops, or sequin shimmer walls require about 2 to 3 hours of installation time.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you handle the cleanup after the event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dismantling and balloon cleanup are not included in the standard setup package. For packages with rented frames or neon signs, our team returns the next day to pack up and retrieve the props.'
      }
    }
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
    { '@type': 'ListItem', position: 2, name: 'Balloon Decoration in Delhi', item: siteUrl('/balloon-decoration-in-delhi') },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Delhi Balloon Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/balloon-decoration-in-delhi#localbusiness',
  url: 'https://www.eventkro.in/balloon-decoration-in-delhi',
  telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
  email: SITE_EMAIL,
  priceRange: '₹',
  geo: { '@type': 'GeoCoordinates', latitude: 28.6139, longitude: 77.2090 },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Connaught Place Office',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110001',
    addressCountry: 'IN',
  },
  areaServed: 'Delhi NCR',
  description: 'Premium balloon decoration services across Delhi NCR, covering homes, hotels, terraces and surprise setups.',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Balloon Decoration in Delhi',
  serviceType: 'Balloon Decoration Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eventkro Delhi Balloon Decoration',
    image: 'https://www.eventkro.in/favicon-512x512.png',
    telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
    email: SITE_EMAIL,
    priceRange: '₹',
    geo: { '@type': 'GeoCoordinates', latitude: 28.6139, longitude: 77.2090 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Connaught Place Office',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      addressCountry: 'IN',
    },
  },
  areaServed: { '@type': 'Place', name: 'Delhi NCR' },
  description: 'Premium balloon decoration setups for homes, hotels, terraces and outdoor venues across Delhi NCR.',
};

export default function BalloonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="balloon-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="balloon-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="balloon-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="balloon-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
