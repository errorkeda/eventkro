import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Package Pricing in Agra | Basic, Premium & Elite | Eventkro',
  description:
    'Transparent event package pricing in Agra Mandal — Basic, Premium and Elite plans for weddings, birthdays and parties. Custom quotes available.',
  path: '/pricing',
  keywords: ['event package price agra', 'party packages agra', 'wedding cost agra'],
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
