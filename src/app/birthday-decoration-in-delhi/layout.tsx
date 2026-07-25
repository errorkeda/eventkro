import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Birthday Decoration in Delhi | Kids, Adult & Theme Decorators | Eventkro',
    description: 'Book the best birthday decoration in Delhi with Eventkro. Premium theme setups (Boss Baby, Cocomelon, Frozen, Spiderman), adult & kid birthday parties, terrace, home and hotel room decorations across Delhi NCR. Affordable packages & same-day setup.',
    path: '/birthday-decoration-in-delhi',
    keywords: [
      'birthday decoration in delhi',
      'birthday decorators in delhi',
      'kids birthday decoration delhi',
      'theme birthday decoration delhi',
      'balloon decoration for birthday in delhi',
      'terrace birthday decoration delhi',
      'home birthday decoration delhi',
      'hotel room birthday decoration delhi',
      'birthday decoration cost in delhi',
      'cocomelon theme decoration delhi',
      'frozen theme decoration delhi',
    ],
    image: '/images/delhi/birthday-decoration-delhi-hero.webp',
  }),
  robots: {
    index: true,
    follow: true,
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
      name: 'What is the starting price for birthday decoration in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pricing for birthday decoration in Delhi starts at ₹1,499 for basic home balloon decorations. Our premium ring backdrops and custom kids themes range from ₹3,499 to ₹6,999. Elite custom decorations with sequin walls, neon signs, and organic balloon clouds start from ₹9,999 onwards.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which birthday decoration themes do you offer for kids in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a wide array of popular kids birthday themes in Delhi including Boss Baby, Cocomelon, Frozen, Jungle/Safari, Unicorn, Butterfly, Spiderman, Avengers, Peppa Pig, and Barbie. Each theme can be customized with specific color balloon arches, table setups, and custom cutouts.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you set up birthday decorations in hotel rooms in Delhi Aerocity or Karol Bagh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We arrange surprise hotel room birthday decorations across Delhi NCR. You simply need to confirm with your hotel desk regarding their external decorator policy, and our team will coordinate the timing to set up metallic balloons, rose petals, LED lights, and hanging photos.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide same day birthday decoration in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide same-day birthday decoration in Delhi for select packages. If you place your reservation before 2:00 PM, our local decorator teams located near Dwarka, Rohini, or Laxmi Nagar can reach your venue and set it up within a few hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does the setup take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard home decoration takes around 60 to 90 minutes. High-end thematic backdrops, organic arches, and setups involving metal stands, helium balloons, or backdrop rentals require 2 to 3 hours of installation time.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are the materials used for home decorations safe for children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We use 100% natural, biodegradable latex balloons that are non-toxic. For lighting elements, we utilize low-voltage LED string lights that emit no heat. We also use wall-safe masking tape to protect your home paint.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you decorate terrace and open-air spaces for birthday parties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we design cozy terrace birthday setups, including fairy light cabanas, teepee tents, and organic balloon frame arches. We use heavy, weighted stands to secure our backdrops against the wind.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I choose a custom color scheme for an adult birthday party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, adult birthday decorations usually favor minimalist or glam aesthetics. We offer elegant color palettes like Rose Gold & White, Black & Chrome Gold, Pastel Blue & Silver, and Champagne themes, complemented by custom age neon lights.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you cover all localities in West, North, South, and East Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we serve all major areas of Delhi NCR, including Dwarka, Rohini, Janakpuri, Rajouri Garden, Laxmi Nagar, Pitampura, Vasant Kunj, Vasant Vihar, Saket, Greater Kailash, Karol Bagh, Punjabi Bagh, and Mayur Vihar.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you charge extra for transportation in Delhi NCR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our packages are inclusive of setup and basic delivery within Delhi municipal limits. A nominal transportation surcharge may apply only for remote areas or distant parts of NCR (Noida, Gurgaon, Ghaziabad).'
      }
    },
    {
      '@type': 'Question',
      name: 'What rental items are included in premium setups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our premium and elite packages include rentals of metal circular rings, wood panels, sequin shimmer walls, LED neon signs, spotlights, and decorative tables. Our team will return the next day to collect these items.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we add a cake table, fresh flowers, or cold pyros to our order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer various add-ons such as customized cake table styling, fresh rose or lily floral arrangements, LED marquee numbers, and cold pyro sparklers for the cake-cutting moment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide cleanup services after the event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We focus on setup and decoration. Disassembly and balloon cleanup services are optional and can be booked for a small additional charge. For rentals, we automatically handle teardown when retrieving the props.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I book a birthday decoration in Delhi with Eventkro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book by submitting our online booking form or via WhatsApp chat. To finalize the date, we collect a small deposit, and the remaining balance is paid to the decorator upon completion of the setup.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens in case of cancellation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you notify us at least 48 hours before the event, we can reschedule your booking to any mutually available future date without penalty. For cancellations within 24 hours, the advance deposit is non-refundable.'
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
      name: 'Birthday Decoration in Delhi',
      item: siteUrl('/birthday-decoration-in-delhi')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Delhi Birthday Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/birthday-decoration-in-delhi#localbusiness',
  url: 'https://www.eventkro.in/birthday-decoration-in-delhi',
  telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
  email: SITE_EMAIL,
  priceRange: '₹',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6139,
    longitude: 77.2090
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Connaught Place Office',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110001',
    addressCountry: 'IN'
  },
  areaServed: 'Delhi NCR',
  description: 'Book the best birthday decoration in Delhi with Eventkro. Premium theme setups (Boss Baby, Cocomelon, Frozen, Spiderman), adult & kid birthday parties, terrace, home and hotel room decorations across Delhi NCR.'
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Birthday Decoration in Delhi',
  serviceType: 'Birthday Decoration Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eventkro Delhi Birthday Decoration',
    image: 'https://www.eventkro.in/favicon-512x512.png',
    telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
    email: SITE_EMAIL,
    priceRange: '₹',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.2090
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Connaught Place Office',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      addressCountry: 'IN'
    }
  },
  areaServed: {
    '@type': 'Place',
    name: 'Delhi NCR'
  },
  description: 'Book the best birthday decoration in Delhi with Eventkro. Premium theme setups (Boss Baby, Cocomelon, Frozen, Spiderman), adult & kid birthday parties, terrace, home and hotel room decorations across Delhi NCR.'
};

export default function DelhiBirthdayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="delhi-birthday-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="delhi-birthday-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="delhi-birthday-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="delhi-birthday-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
