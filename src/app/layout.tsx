import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agra Mandal Events - Book the Best Events in Agra, Mathura, Firozabad & Mainpuri',
  description: 'Professional event planning and booking services for weddings, birthdays, corporate events, and cultural celebrations across Agra Mandal region.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}