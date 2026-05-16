import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Event Planners in Mathura | Holi & Wedding Events | Eventkro',
  description:
    'Professional event planners in Mathura for Lathmar Holi, weddings, engagements and cultural celebrations. Book Eventkro for stress-free events.',
  path: '/cities/mathura',
  keywords: ['event planners mathura', 'holi event mathura', 'wedding mathura'],
});

export default function MathuraCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
