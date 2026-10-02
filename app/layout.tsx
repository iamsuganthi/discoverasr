import './globals.css';
import type { JSX, ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-asr-sans',
  display: 'swap',
});

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-asr-display',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Ascott Star Rewards | Save More, Earn Rewards',
  description:
    'Book stays across Ascott, Somerset, Citadines, lyf, Quest and more. Join Ascott Star Rewards to earn points, unlock exclusive rates and enjoy member-only offers worldwide.',
};

export const viewport: Viewport = {
  themeColor: '#011e46',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html className={`${sans.variable} ${display.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
