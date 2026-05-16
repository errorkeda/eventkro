import type { Metadata } from 'next';
import Script from 'next/script';
import { contactFaqItems } from '../data/faq';
import { pageMetadata } from '../../lib/seo';
import { SITE_PHONE_PRIMARY } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Book Event Planner in Agra | Contact Eventkro',
  description: `Contact Eventkro — top event planners in Agra for weddings, catering & decor. Free quote in 24 hours. Call ${SITE_PHONE_PRIMARY}. Serving Mathura, Firozabad & Mainpuri.`,
  path: '/contact',
  keywords: [
    'book event planner agra',
    'event planner in agra',
    'event booking agra',
    'contact Eventkro',
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="contact-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      {children}
    </>
  );
}
