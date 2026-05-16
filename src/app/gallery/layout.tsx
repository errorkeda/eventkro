import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Gallery | Weddings & Corporate Events in Agra | Eventkro',
  description:
    'Browse Eventkro gallery — wedding decor, corporate events, cultural celebrations and birthday parties across Agra, Mathura, Firozabad and Mainpuri.',
  path: '/gallery',
  keywords: [
    'event gallery agra',
    'wedding photos agra',
    'event decoration gallery',
  ],
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
