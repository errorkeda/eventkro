import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Proposal Decoration in Delhi | Romantic Hotel & Home Proposal Setup | Eventkro',
    description: 'Book premium proposal decoration in Delhi with Eventkro. Romantic hotel room decoration, home proposal setup, rooftop proposal decoration, candle light proposal, marry me decoration and same day booking available.',
    path: '/proposal-decoration-in-delhi',
    keywords: [
      'proposal decoration in delhi',
      'proposal decorators in delhi',
      'romantic proposal decoration delhi',
      'hotel room proposal decoration delhi',
      'marry me decoration delhi',
      'proposal room decoration delhi',
      'surprise proposal decoration delhi',
      'candle light proposal decoration delhi'
    ],
    image: '/images/delhi/proposal/hero.webp',
  }),
  alternates: {
    canonical: 'https://www.eventkro.in/proposal-decoration-in-delhi',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Proposal Decoration in Delhi | Romantic Hotel & Home Proposal Setup | Eventkro',
    description: 'Book premium proposal decoration in Delhi with Eventkro. Romantic hotel room decoration, home proposal setup, rooftop proposal decoration, candle light proposal, marry me decoration and same day booking available.',
    url: 'https://www.eventkro.in/proposal-decoration-in-delhi',
    images: [{ url: '/images/delhi/proposal/hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  authors: [{ name: 'Eventkro' }],
  publisher: 'Eventkro',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you decorate a hotel room for a surprise proposal in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in surprise hotel room proposal decoration in Delhi (including Connaught Place, Karol Bagh, Vasant Kunj, Aerocity, and Noida). Please check with your hotel management regarding outside decorator permissions before booking.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer home proposal decoration services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our home proposal decorations are designed to transform your bedroom, living room, or terrace into a romantic haven using wall-safe materials, balloons, and LED candles.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is included in a rooftop proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer breathtaking rooftop proposal decorations featuring cozy canopy setups, fairy lights, floral pathways, and neon "Marry Me" signs for an unforgettable evening under the stars.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide same-day booking for proposal decoration in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer same-day proposal decoration in Delhi NCR. Simply confirm your booking before 3:00 PM, and our local decorators will ensure a timely setup.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the average cost of proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our proposal decoration packages start at ₹1,999 for a classic home setup. Luxury setups featuring neon signs, canopies, and fresh flowers range from ₹3,999 to ₹7,999+.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you include fresh flowers and rose petals in the setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we use fresh red rose petals for pathways, bed heart designs, and table flower arrangements to add an elegant and timeless touch to your proposal.'
      }
    },
    {
      '@type': 'Question',
      name: 'What kind of balloon decoration is used for proposals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use premium metallic chrome, pastel, and foil balloons. Heart-shaped foils and helium-like floating ceiling balloons are highly popular for romantic setups.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer custom themes for proposal setups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide fully customized themes. You can choose specific balloon color palettes, custom LED neon signs (e.g., "Marry Me"), and floral arrangements to match your partner\'s preferences.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is midnight proposal decoration available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer midnight surprise proposal decoration. Our decorators can complete the setup late at night, subject to an additional late-night service charge and availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need permission from the hotel for the decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For hotel room setups, you must obtain permission from the hotel management for our decorators to enter. We only require 1-2 hours of access before your arrival.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the booking process work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book easily by filling out our online form or messaging us directly on WhatsApp. We require a small advance token to confirm your slot, with the balance paid after setup.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the duration required for the decoration setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard room decoration takes about 60-90 minutes. Complex setups with canopies, ring backdrops, and sequin walls may take 2-3 hours of installation time.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is your cancellation and rescheduling policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rescheduling is free if requested at least 48 hours in advance. For cancellations within 24 hours of the setup time, the advance token is non-refundable as materials are already prepared.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I customize the neon signs and colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! You can personalize every element, from the balloon color palette to the "Marry Me" or "Better Together" LED lights and photo string displays.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book the proposal decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking at least 2-3 days in advance to secure your preferred time slot and ensure availability of premium rental props like sequin walls or customized name boards.'
      }
    }
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
    { '@type': 'ListItem', position: 2, name: 'Proposal Decoration in Delhi', item: siteUrl('/proposal-decoration-in-delhi') },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Delhi Proposal Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/proposal-decoration-in-delhi#localbusiness',
  url: 'https://www.eventkro.in/proposal-decoration-in-delhi',
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
  description: 'Luxury proposal decoration services across Delhi NCR, covering homes, hotels, terraces and surprise romantic setups.',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Proposal Decoration in Delhi',
  serviceType: 'Proposal Decoration Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eventkro Delhi Proposal Decoration',
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
  description: 'Premium romantic and luxury proposal decoration setups for homes, hotels, terraces and outdoor venues across Delhi NCR.',
};

export default function ProposalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="proposal-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="proposal-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="proposal-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="proposal-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
