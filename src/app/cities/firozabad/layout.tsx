import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planners in Firozabad | Weddings & Parties | Eventkro',
  description:
    'Best event planners in Firozabad for weddings, birthdays, corporate events and exhibitions. Decoration, catering and complete event management.',
  path: '/cities/firozabad',
  keywords: ['event planners firozabad', 'wedding firozabad', 'party planners firozabad'],
});

export default function FirozabadCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
