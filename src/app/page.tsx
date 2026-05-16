import type { Metadata } from 'next';
import HomePage from '../components/HomePage';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Best Event Planners in Agra, Mathura & Firozabad | Eventkro',
  description:
    'Eventkro is the top event management company in Agra, Mathura, and Firozabad. We specialize in dream weddings, corporate events, birthdays, and cultural functions. Book now!',
  path: '/',
  keywords: [
    'event planners in agra',
    'wedding planners in agra',
    'best decorators in agra',
    'event management company',
    'Eventkro',
  ],
});

export default function Home() {
  return <HomePage />;
}
