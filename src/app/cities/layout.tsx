import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planners by City | Agra, Mathura, Firozabad | Eventkro',
  description:
    'Eventkro serves Agra, Mathura, Firozabad, Mainpuri and nearby cities. Explore city-wise wedding, corporate and cultural event planning services.',
  path: '/cities',
  keywords: [
    'event planners by city',
    'agra mathura firozabad events',
    'Eventkro cities',
  ],
});

export default function CitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
