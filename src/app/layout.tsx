import type { Metadata } from 'next';
import { Bodoni_Moda, Cormorant_Garamond, DM_Sans, Mrs_Saint_Delafield } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getLocalBusinessSchema } from '@/lib/seo';

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
  metadataBase: new URL('https://studiosatamelia.com'),
  title: {
    default: 'Studios at Amelia | Luxury Beauty, Photography & Classes | Amelia Island, FL',
    template: '%s | Studios at Amelia',
  },
  description:
    'Premier multi-concept beauty & creative studio in Fernandina Beach, Amelia Island, FL. Luxury lash extensions, Dominican blowouts, brow styling, professional photography, and makeup masterclasses.',
  keywords: [
    'Beauty salon Amelia Island',
    'Lash extensions Fernandina Beach',
    'Dominican blowout Florida',
    'Brow lamination Amelia Island',
    'Photography studio Fernandina Beach',
    'Makeup artist Amelia Island',
    'Makeup masterclasses Florida',
    'Silk press Amelia Island',
    'Cris Emiliano Studios at Amelia',
    'Studios at Amelia Fernandina Beach FL',
  ],
  authors: [{ name: 'Cris Emiliano', url: 'https://studiosatamelia.com/about/' }],
  creator: 'Studios at Amelia',
  publisher: 'Studios at Amelia LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://studiosatamelia.com/',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Studios at Amelia | Luxury Beauty, Photography & Classes',
    description:
      'Premier multi-concept beauty studio in Fernandina Beach, Amelia Island, FL. Luxury lashes, Dominican blowouts, photography, and masterclasses.',
    url: 'https://studiosatamelia.com/',
    siteName: 'Studios at Amelia',
    images: [
      {
        url: 'https://studiosatamelia.com/images/contact/hero-reception.jpg',
        width: 1200,
        height: 630,
        alt: 'Studios at Amelia - Reception and Creative Sanctuary in Fernandina Beach, FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studios at Amelia | Luxury Beauty, Photography & Classes',
    description:
      'Lashes, Dominican blowouts, makeup artistry, studio photography, and hands-on classes in Amelia Island, FL.',
    images: ['https://studiosatamelia.com/images/contact/hero-reception.jpg'],
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Fernandina Beach, Amelia Island, Florida',
    'geo.position': '30.6552;-81.4589',
    ICBM: '30.6552, -81.4589',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = getLocalBusinessSchema();
  const ghlChatWidgetId = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID;

  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${dmSans.variable} ${scriptFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {/* GoHighLevel Web Chat Widget (Loaded when configured) */}
        {ghlChatWidgetId && (
          <script
            src={`https://widgets.leadconnectorhq.com/loader.js`}
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id={ghlChatWidgetId}
            async
          />
        )}
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
