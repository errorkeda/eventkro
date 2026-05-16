import type { Metadata } from 'next';
import HomePage from '../components/HomePage';
import { pageMetadata } from '../lib/seo';
import { SITE_PHONE_PRIMARY } from '../lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planners in Agra, Mathura & Firozabad | Eventkro',
  description: `Top event planners in Agra — weddings, corporate events, catering & decoration. Free quote in 24 hrs. Call Eventkro ${SITE_PHONE_PRIMARY}. Serving Mathura & Firozabad.`,
  path: '/',
  keywords: [
    'event planner in agra',
    'event planners in agra',
    'best event planner in agra',
    'wedding planners in agra',
    'catering services agra',
    'agra decoration',
    'event management company',
    'Eventkro',
  ],
});

export default function Home() {
  return <HomePage />;
}
