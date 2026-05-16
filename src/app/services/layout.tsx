import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Balloon Decoration & Event Services in Agra | Eventkro',
  description:
    'Balloon decoration services in Agra — birthday decor, balloon arch, backdrop wall, wedding & corporate styling. Plus Roka, Haldi, Mehendi & full event planning.',
  path: '/services',
  keywords: [
    'balloon decoration agra',
    'birthday party decoration agra',
    'balloon arch agra',
    'wedding decoration agra',
    'event services agra',
    'event planner in agra',
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
