import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planners in Mainpuri | Rural & Traditional Events | Eventkro',
  description:
    'Event planners in Mainpuri for weddings, village fairs, cultural events and family celebrations. Local expertise with professional Eventkro management.',
  path: '/cities/mainpuri',
  keywords: ['event planners mainpuri', 'wedding mainpuri', 'cultural events mainpuri'],
});

export default function MainpuriCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
