import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Star Crown Travel | Experience the Majesty of Northern Pakistan',
  description:
    'Premium travel experiences across Northern Pakistan — Skardu, Hunza, Neelum Valley, Kaghan & Naran. Group, Couple, and Corporate packages crafted for unforgettable journeys.',
  openGraph: {
    title: 'Star Crown Travel | Experience the Majesty of Northern Pakistan',
    description:
      'Premium travel experiences across Northern Pakistan. Group, Couple, and Corporate packages.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
