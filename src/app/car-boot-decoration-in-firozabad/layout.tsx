import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Car Boot Decoration in Firozabad | Surprise Car Trunk Decor | Eventkro',
  description: 'Looking for the best car boot decoration in Firozabad? Eventkro offers premium car dikki decoration, balloon & light setups for birthdays, anniversaries, proposals, and surprise car trunk decor in Firozabad.',
  path: '/car-boot-decoration-in-firozabad',
  keywords: [
    'car boot decoration in firozabad',
    'car dikki decoration in firozabad',
    'car trunk decoration firozabad',
    'car boot birthday decoration firozabad',
    'car boot anniversary decoration firozabad',
    'car boot proposal decoration firozabad',
    'surprise car decoration firozabad',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is car boot decoration and how does it work in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car boot decoration (also known as car dikki decoration or trunk decoration) is a surprise setup arranged inside the trunk of a car. When the recipient opens the boot, they are greeted by a beautiful setup of balloons, LED lights, flowers, banners, and personalized messages. Eventkro provides this setup at your doorstep, public parking spaces, or selected surprise spots across Firozabad.'
      }
    },
    {
      '@type': 'Question',
      name: 'For which occasions can I book a car trunk decoration in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car boot decorations are perfect for romantic marriage proposals, birthday surprises, anniversary celebrations, welcoming a newborn baby, valentines day, or celebrating achievements. We design custom themes matching your specific occasion.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does the setup take and do I need to bring my car to a shop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you do not need to bring your car to us. Our decorators will travel to your preferred location in Firozabad (home, cafe, office, or public area) and complete the setup right in your trunk. The installation process takes approximately 30 to 45 minutes.'
      }
    },
    {
      '@type': 'Question',
      name: 'What materials are used for surprise car decoration in Firozabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use high-quality metallic and chrome latex balloons, foil letters, star/heart balloons, LED fairy lights, customize photo printouts, ribbon hangings, and fresh flowers or artificial flower garlands depending on the package you select.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which areas in Firozabad do you serve for car boot decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide doorstep car boot decorations in all major localities of Firozabad, including Glass Bazar, station area, Suhag Nagar, bypass roads, Shikohabad road side, and surrounding locations in Firozabad Mandal.'
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
      name: 'Car Boot Decoration in Firozabad',
      item: siteUrl('/car-boot-decoration-in-firozabad')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Firozabad Car Boot Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/car-boot-decoration-in-firozabad#localbusiness',
  url: 'https://www.eventkro.in/car-boot-decoration-in-firozabad',
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
    streetAddress: 'Firozabad Glass Bazar Office',
    addressLocality: 'Firozabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '283203',
    addressCountry: 'IN'
  },
  areaServed: 'Firozabad',
  description: 'Premium surprise car boot decoration, car dikki balloon setups, and trunk decorations for birthdays, anniversaries, and proposals in Firozabad by Eventkro.'
};

export default function FirozabadCarBootDecorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="firozabad-car-boot-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="firozabad-car-boot-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="firozabad-car-boot-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
