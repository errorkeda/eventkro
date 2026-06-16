import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Car Boot Decoration in Shikohabad | Surprise Car Trunk Decor | Eventkro',
  description: 'Looking for the best car boot decoration in Shikohabad? Eventkro offers premium car dikki decoration, balloon & light setups for birthdays, anniversaries, proposals, and surprise car trunk decor in Shikohabad.',
  path: '/car-boot-decoration-in-shikohabad',
  keywords: [
    'car boot decoration in shikohabad',
    'car dikki decoration in shikohabad',
    'car trunk decoration shikohabad',
    'car boot birthday decoration shikohabad',
    'car boot anniversary decoration shikohabad',
    'car boot proposal decoration shikohabad',
    'surprise car decoration shikohabad',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is car boot decoration and how does it work in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car boot decoration (also known as car dikki decoration or trunk decoration) is a surprise setup arranged inside the trunk of a car. When the recipient opens the boot, they are greeted by a beautiful setup of balloons, LED lights, flowers, banners, and personalized messages. Eventkro provides this setup at your doorstep, public parking spaces, or selected surprise spots across Shikohabad.'
      }
    },
    {
      '@type': 'Question',
      name: 'For which occasions can I book a car trunk decoration in Shikohabad?',
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
        text: 'No, you do not need to bring your car to us. Our decorators will travel to your preferred location in Shikohabad (home, cafe, office, or public area) and complete the setup right in your trunk. The installation process takes approximately 30 to 45 minutes.'
      }
    },
    {
      '@type': 'Question',
      name: 'What materials are used for surprise car decoration in Shikohabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use high-quality metallic and chrome latex balloons, foil letters, star/heart balloons, LED fairy lights, customize photo printouts, ribbon hangings, and fresh flowers or artificial flower garlands depending on the package you select.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which areas in Shikohabad do you serve for car boot decoration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide doorstep car boot decorations in all major localities of Shikohabad, including Station Road, Katra Bazar, Awas Vikas colony, bypass highway joints, and nearby rural towns in the region.'
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
      name: 'Car Boot Decoration in Shikohabad',
      item: siteUrl('/car-boot-decoration-in-shikohabad')
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eventkro Shikohabad Car Boot Decoration',
  image: 'https://www.eventkro.in/favicon-512x512.png',
  '@id': 'https://www.eventkro.in/car-boot-decoration-in-shikohabad#localbusiness',
  url: 'https://www.eventkro.in/car-boot-decoration-in-shikohabad',
  telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
  email: SITE_EMAIL,
  priceRange: '₹₹',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.1065,
    longitude: 78.5835
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shikohabad Station Road Office',
    addressLocality: 'Shikohabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '283135',
    addressCountry: 'IN'
  },
  areaServed: 'Shikohabad',
  description: 'Premium surprise car boot decoration, car dikki balloon setups, and trunk decorations for birthdays, anniversaries, and proposals in Shikohabad by Eventkro.'
};

export default function ShikohabadCarBootDecorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="shikohabad-car-boot-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="shikohabad-car-boot-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="shikohabad-car-boot-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {children}
    </>
  );
}
