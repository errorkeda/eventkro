import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planner in Shikohabad | Wedding, Birthday & Corporate Events | Eventkro',
  description:
    'Eventkro provides wedding planning, birthday decoration, balloon decoration, catering and corporate event management services in Shikohabad and nearby areas.',
  path: '/cities/shikohabad',
  keywords: [
    'event planner in shikohabad',
    'wedding planner in shikohabad',
    'birthday planner in shikohabad',
    'event management company in shikohabad',
    'balloon decoration in shikohabad',
  ],
});

export default function ShikohabadCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
