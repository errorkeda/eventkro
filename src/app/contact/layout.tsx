import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Book Event Planner in Agra | Contact Eventkro',
  description:
    'Contact Eventkro to book weddings, corporate events, birthdays and cultural functions in Agra, Mathura, Firozabad and Mainpuri. Get a free quote within 24 hours.',
  path: '/contact',
  keywords: [
    'book event planner agra',
    'event booking agra',
    'contact Eventkro',
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
