import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planning Services in Agra | Roka, Haldi, Mehendi | Eventkro',
  description:
    'Full event planning services in Agra — Roka, Tilak, Haldi, Mehendi, pre-wedding shoots and more. Professional decorators and coordinators across Agra Mandal.',
  path: '/services',
  keywords: [
    'event services agra',
    'haldi ceremony agra',
    'mehendi planners agra',
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
