import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, SITE_EMAIL } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Car Boot Decoration in Agra | Surprise Car Trunk Decor | Eventkro',
  description: 'Surprise car boot decoration in Agra by Eventkro. Doorstep car dikki balloon setups, fairy lights, and custom surprise themes for birthdays and anniversaries.',
  path: '/car-boot-decoration-in-agra',
  keywords: [
    'car boot decoration in agra',
    'car dikki decoration in agra',
    'car trunk decoration agra',
    'car boot birthday decoration agra',
    'car boot anniversary decoration agra',
    'car boot proposal decoration agra',
    'surprise car decoration agra',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a car boot decoration and how does the surprise work in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A car boot decoration—also known as car trunk or car dikki decor—is a tailored celebration setup arranged inside the rear boot of your vehicle. Our decorator arrives at your chosen private location in Agra, styling the trunk with balloons, fairy lights, personalized photos, and thematic banners. You simply park the vehicle, bring the recipient over, and open the trunk latch to reveal the celebration.'
      }
    },
    {
      '@type': 'Question',
      name: 'How is the price calculated for car boot decoration in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro does not use fixed or rigid package rates. Pricing is custom-quoted based on your specific requirements: the vehicle type and boot dimensions (hatchback, sedan, or SUV), the density of balloon styling, choice of lighting, customized photo prints, neon sign rentals, and specific setup timings.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can a car trunk decoration be arranged in Agra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decorations are typically arranged at private residential driveways, apartment parking areas, private farmhouse grounds, or independent parking spaces where you have parking access. We ask clients to ensure the vehicle is parked in an accessible, legal spot where our decorator can safely work.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much advance notice is required to book a car surprise setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking at least 24 to 48 hours in advance so our team can prepare custom photo prints, foil lettering, and coordinate vendor scheduling. However, same-day inquiries in Agra can often be accommodated depending on decorator availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will the decoration materials damage the car paint, glass, or weather seals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our decorators use non-marking painter\'s masking tape, soft ribbon ties, and suction cups specifically designed to protect automotive paint, rubber weather strips, and clear coats. No harsh adhesives or abrasive materials are applied to the vehicle.'
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
      name: 'Car Boot Decoration in Agra',
      item: siteUrl('/car-boot-decoration-in-agra')
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Car Boot Decoration in Agra',
  serviceType: 'Car Boot Decoration',
  provider: {
    '@type': 'Organization',
    name: 'Eventkro',
    url: 'https://www.eventkro.in',
    telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
    email: SITE_EMAIL,
    image: 'https://www.eventkro.in/favicon-512x512.png'
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Agra, Uttar Pradesh, India'
  },
  description: 'Surprise car boot decoration, car dikki balloon setups, fairy lights, and personalized trunk decor in Agra by Eventkro.'
};

export default function AgraCarBootDecorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="agra-car-boot-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="agra-car-boot-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="agra-car-boot-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      {children}
    </>
  );
}
