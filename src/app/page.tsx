import type { Metadata } from 'next';
import HomePage from '../components/HomePage';
import { pageMetadata } from '../lib/seo';
import { SITE_PHONE_PRIMARY } from '../lib/site';
import Script from 'next/script';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planner in Agra, Mathura, Firozabad & Shikohabad | Eventkro',
  description: `Book top-rated event planners in Agra, Mathura, Firozabad, and Shikohabad. We organize weddings, birthdays, and corporate events across the region. Call Eventkro ${SITE_PHONE_PRIMARY}.`,
  path: '/',
  keywords: [
    'event planner in agra',
    'event planner in mathura',
    'event planner in firozabad',
    'event planner in shikohabad',
    'wedding planner in agra',
    'best event planner in agra',
    'balloon decoration agra',
    'event management company',
    'Eventkro',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which cities do you serve for event planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventkro provides premium event planning, decoration, and catering services across Agra, Mathura, Firozabad, and Shikohabad. We serve key locations in these cities, including Vrindavan, Fatehabad Road, and Station Road.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of events does Eventkro manage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We plan and execute grand weddings, traditional ceremonies (like Roka, Haldi, Mehendi, Sagai), themed birthday parties, baby showers, housewarmings, corporate events, dealer meets, and traditional cultural functions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer catering services in Agra Mandal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We coordinate with premium local caterers to offer fully customizable multi-cuisine buffet spreads. In Mathura, Vrindavan, and surrounding areas, we specialize in pure vegetarian and Brijwasi menus.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I request a free quote for my event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can easily request a quote by filling out our contact form on the website or calling us at +91 7017520811. Our planners will get back to you with a customized estimate within 24 hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you customize event decorations according to my budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer three pre-configured event packages—Basic, Premium, and Elite—which serve as customizable templates. We work with you to tailor decoration themes, balloons, florals, and catering to match your budget.'
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script id="homepage-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <HomePage />
    </>
  );
}
