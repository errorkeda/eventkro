import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planners in Agra | Weddings & Corporate Events | Eventkro',
  description:
    'Top event planners in Agra for weddings, corporate events, birthdays and cultural functions near the Taj Mahal. Venues, decor, catering and full management.',
  path: '/cities/agra',
  keywords: ['event planners agra', 'wedding planners agra', 'corporate events agra'],
});

export default function AgraCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
