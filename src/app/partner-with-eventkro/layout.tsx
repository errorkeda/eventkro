import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMetadata } from '../../lib/seo';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Partner With Eventkro | Event Business Partnership in Agra, Mathura & Firozabad',
  description:
    'Become an Eventkro Partner and grow your event business. We are looking for decorators, photographers, caterers, DJs, makeup artists, event planners and other event professionals across Agra, Mathura, Firozabad, Shikohabad and nearby cities.',
  path: '/partner-with-eventkro',
  keywords: [
    'partner with eventkro',
    'event business partnership',
    'event decorators agra',
    'wedding photographers agra',
    'caterers in agra mathura firozabad',
    'event planners partnership',
  ],
});

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl('/'),
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Partner With Eventkro',
      item: siteUrl('/partner-with-eventkro'),
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I become an Eventkro Partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can join by filling out the Partner Registration Form on this page. Once submitted, our partner verification team will review your business profile, portfolio, and experience, and contact you within 2-3 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there any registration fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, there is absolutely zero registration fee to join the Eventkro Partner Network. We want to make it easy for genuine event professionals to partner with us.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to pay monthly charges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Eventkro does not charge any monthly subscription or membership fees. You only pay a commission after a booking is successfully confirmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How will I receive customer leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once your profile is verified, we will share genuine, high-intent event inquiries from your city directly with you via phone or WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cities do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently, we operate and provide customer leads in Agra, Mathura, Firozabad, Shikohabad, Mainpuri, and nearby cities in the Agra Mandal region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can photographers join?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We welcome professional photographers, videographers, and pre-wedding shoot specialists from Agra, Mathura, Firozabad, and surrounding areas to join our network.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can caterers join?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We are looking for experienced caterers who can provide high-quality food and beverage services for weddings, birthday parties, and corporate events.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the commission model work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our commission model is simple and risk-free: you only pay a pre-agreed percentage of the booking amount after you successfully secure and complete the event booking through our leads.',
      },
    },
  ],
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="partner-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="partner-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      {children}
    </>
  );
}
