import React from 'react';
import type { Metadata } from 'next';
import BeautyHero from '@/components/beauty/BeautyHero';
import LashBlock from '@/components/beauty/LashBlock';
import BrowBlock from '@/components/beauty/BrowBlock';
import HairBlock from '@/components/beauty/HairBlock';
import MakeupBlock from '@/components/beauty/MakeupBlock';
import GlamBand from '@/components/beauty/GlamBand';

export const metadata: Metadata = {
  title: 'Beauty Salon & Lash Extensions | Dominican Blowout & Brows | Fernandina Beach, FL',
  description:
    'Experience luxury beauty services at Studios at Amelia. Custom lash extensions (Classic, Hybrid, Volume), brow lamination, Dominican blowouts, and professional makeup in Fernandina Beach, FL.',
  alternates: {
    canonical: 'https://studiosatamelia.com/beauty/',
  },
  openGraph: {
    title: 'Beauty Salon & Lash Studio | Dominican Blowout & Brows | Amelia Island',
    description:
      'Lashes, brow lamination, Dominican blowouts, and makeup artistry tailored to you. Book your appointment at Studios at Amelia in Fernandina Beach, FL.',
    url: 'https://studiosatamelia.com/beauty/',
    images: ['https://studiosatamelia.com/images/beauty/hero-portrait.jpg'],
  },
};

export default function BeautyPage() {
  return (
    <main>
      <BeautyHero />
      <LashBlock />
      <BrowBlock />
      <HairBlock />
      <MakeupBlock />
      <GlamBand />
    </main>
  );
}
