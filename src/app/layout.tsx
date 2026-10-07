import type { Metadata } from 'next';
import { Bodoni_Moda, Cormorant_Garamond, DM_Sans, Mrs_Saint_Delafield } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { SITE } from '@/lib/site';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
  adjustFontFallback: false,
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const scriptFont = Mrs_Saint_Delafield({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Studios at Amelia | Beauty, Photography, Classes & Community',
  description:
    'Studios at Amelia brings beauty services, professional photography, and hands-on education together under one roof in Amelia Island, Fernandina Beach, FL.',
  metadataBase: new URL('https://studiosatamelia.com'),
  openGraph: {
    title: 'Studios at Amelia | Beauty, Photography & Classes',
    description:
      'Lash extensions, brow styling, Dominican blowout, event styling, makeup and beauty education in Amelia Island, FL.',
    url: 'https://studiosatamelia.com',
    siteName: 'Studios at Amelia',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: SITE.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address1,
      addressLocality: 'Fernandina Beach',
      addressRegion: 'FL',
      postalCode: '32034',
      addressCountry: 'US',
    },
    telephone: SITE.phone,
    email: SITE.email,
    openingHours: ['Tu-Sa 10:00-18:00', 'Su-Mo By Appointment Only'],
    url: 'https://studiosatamelia.com',
  };

  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${dmSans.variable} ${scriptFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
