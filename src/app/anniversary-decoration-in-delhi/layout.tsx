import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Anniversary Decoration in Delhi | Romantic & Luxury Setups | Eventkro',
    description: 'Premium anniversary decoration services in Delhi NCR. Book romantic home setups, hotel room elegance, candlelight canopy ambience, and luxury themes for 25th, 50th & surprise celebrations. Same‑day service, customized designs, and affordable packages.',
    path: '/anniversary-decoration-in-delhi',
    keywords: [
      'anniversary decoration in delhi',
      'romantic anniversary decoration delhi',
      'anniversary decoration at home delhi',
      'hotel room anniversary decoration delhi',
      'candle light anniversary decoration delhi',
      'anniversary balloon decoration delhi',
      'anniversary room decoration delhi',
      'surprise anniversary decoration delhi',
      '25th anniversary decoration delhi',
      '50th anniversary decoration delhi',
      'anniversary decorators delhi',
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
      name: 'What is the starting price for anniversary decoration in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The starting price for our romantic anniversary decoration at home in Delhi is ₹1,999. This includes metallic balloon decoration, customized banners, ribbon curls, and basic fairy lights. Premium ring setups and luxury canopy arrangements range from ₹3,999 to ₹7,999+.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide same day romantic anniversary decoration in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer same-day surprise anniversary decoration in Delhi NCR. If you place your reservation before 3:00 PM, our closest team near Dwarka, Rohini, or Lajpat Nagar will reach your location and complete the setup.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you decorate a hotel room for an anniversary surprise in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in surprise hotel room anniversary decoration in Delhi (including Connaught Place, Karol Bagh, Vasant Kunj, Aerocity, and Noida). Please check with the hotel desk beforehand regarding their decorator entry policy.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is home balloon decoration safe for wall paint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our anniversary decorators delhi use wall-safe masking tape to mount balloons and fairy lights, ensuring no damage to your paint. We do not use nails or double-sided tape that can peel off plaster.'
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
      name: 'Which balloon types are used in anniversary decorations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use premium metallic chrome, pastel, matte, and confetti-filled latex balloons. For anniversaries, combinations of chrome rose gold, champagne gold, silver, and red heart foils are highly popular.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you include real candles in your candlelight anniversary decorations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For safety and fire prevention, we recommend and supply premium LED tea light candles which give the exact warm, romantic flicker. If you prefer real wax tea-light candles for tables, we can include them with proper holders.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we request fresh flower decorations like rose petals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can add fresh red rose petal pathways, bed heart designs, and table flower arrangements to any of our packages as a customizable add-on.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I book an anniversary setup with Eventkro?',
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
        text: 'Yes. You can customize the balloon colors, neon light text (e.g., "Happy Anniversary" or "Better Together"), backdrop frames (metal ring, teepee tent, sequin wall), and add customized photo hangings.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer terrace anniversary canopy setups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our cozy terrace candlelight canopy decorations are a top choice. We construct a secure wood/metal teepee canopy frame, drape it with sheer curtains, weave warm fairy lights, and secure it with sandbag weights.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide decoration services for parents\' 25th/50th anniversary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we design grand family setups for parents\' Silver Jubilee (25th) and Golden Jubilee (50th) milestones. These setups feature custom photo grids, numeric marquee lights, and premium gold/silver balloon arches.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take for the decorators to complete the setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard balloon setups take 60 to 90 minutes. High-end canopy tents, circular backdrops, or sequin shimmer walls require about 2 to 3 hours of installation time.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you handle the cleanup after the anniversary event?',
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
    { '@type': 'ListItem', position: 2, name: 'Anniversary Decoration in Delhi', item: siteUrl('/anniversary-decoration-in-delhi') },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Delhi Anniversary Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/anniversary-decoration-in-delhi#localbusiness',
  url: 'https://www.eventkro.in/anniversary-decoration-in-delhi',
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
  description: 'Luxury anniversary decoration services across Delhi NCR, covering homes, hotels, terraces and surprise setups.',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Anniversary Decoration in Delhi',
  serviceType: 'Anniversary Decoration Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eventkro Delhi Anniversary Decoration',
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
  description: 'Premium romantic and luxury anniversary decoration setups for homes, hotels, terraces and outdoor venues across Delhi NCR.',
};

export default function AnniversaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="anniversary-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="anniversary-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="anniversary-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="anniversary-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
