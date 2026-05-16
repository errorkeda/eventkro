import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planning Blog | Tips for Agra, Mathura & Firozabad | Eventkro',
  description:
    'Read event planning tips, wedding guides, Holi celebrations in Mathura, and corporate event ideas from Eventkro — experts in Agra Mandal region.',
  path: '/blog',
  keywords: [
    'event planning blog agra',
    'wedding tips agra',
    'mathura holi guide',
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
