import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eventkro - Best Event Planners in Agra, Mathura, Firozabad, Mainpuri & Nearby Cities',
  description:
    'Book top-rated event planners in Agra, Mathura, Firozabad, Shikohabad, Mainpuri, Etah, Etawah, Hathras, and nearby cities. We organize weddings, birthdays, and corporate events across the Agra Mandal region.',
  keywords: [
    'Event planner in Agra',
    'Event planner in Mathura',
    'Event planner in Firozabad',
    'Event planner in Shikohabad',
    'Event planner in Mainpuri',
    'Event planner in Etah',
    'Event planner in Etawah',
    'Event planner in Hathras',
    'Wedding planner Agra Mandal',
    'Corporate events Agra',
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon-512x512.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://eventkro.in'),
  openGraph: {
    title: 'Eventkro - Agra Mandal Event Planners',
    description:
      'Hire the best event planners for weddings, birthdays, and corporate events across Agra, Mathura, Firozabad, Mainpuri, Etah, Etawah & nearby cities.',
    url: 'https://eventkro.in',
    siteName: 'Eventkro',
    images: [
      {
        url: '/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Eventkro Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventkro - Best Event Planners in Agra Mandal',
    description:
      'Book the best event planners in Agra, Mathura, Shikohabad, Firozabad, Mainpuri, and nearby cities with Eventkro.',
    images: ['/favicon-512x512.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="V_KaNUo2bbmXkaDavXsO7-n9ID35w4BQJQFtg6kHkxw"
        />

        {/* ✅ JSON-LD Schema for Local Business & Service Area */}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Eventkro',
            image: 'https://eventkro.in/favicon-512x512.png',
            '@id': 'https://eventkro.in',
            url: 'https://eventkro.in',
            telephone: '+91-7017520811',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Agra Mandal Region',
              addressLocality: 'Agra',
              addressRegion: 'Uttar Pradesh',
              postalCode: '282001',
              addressCountry: 'IN',
            },
            areaServed: [
              'Agra',
              'Mathura',
              'Firozabad',
              'Shikohabad',
              'Mainpuri',
              'Etah',
              'Etawah',
              'Hathras',
              'Tundla',
              'Fatehabad',
              'Kheragarh',
              'Bah',
              'Achhnera',
            ],
            description:
              'Professional event planning and decoration services in Agra Mandal region, including Agra, Mathura, Firozabad, Mainpuri, Etah, Etawah, and more.',
            sameAs: [
              'https://www.facebook.com/eventkro',
              'https://www.instagram.com/eventkro?igsh=MXE0eHlzNzhrdzVwMw==',
            ],
          })}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
