import React from 'react';
import type { Metadata } from 'next';
import PhotographyHero from '@/components/photography/PhotographyHero';
import PhotographerBio from '@/components/photography/PhotographerBio';
import PhotographySessions from '@/components/photography/PhotographySessions';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'Photography Studio & Portraits | Photographer Sheyla Vernice | Amelia Island, FL',
  description:
    'Capture your authentic essence with professional studio photography in Fernandina Beach, FL. Lifestyle, personal branding headshots, and creative storytelling with photographer Sheyla Vernice.',
  alternates: {
    canonical: 'https://studiosatamelia.com/photography/',
  },
  openGraph: {
    title: 'Photography Studio & Portraits | Studios at Amelia',
    description:
      'Professional photography sessions in Fernandina Beach, Amelia Island, FL with photographer and creative strategist Sheyla Vernice.',
    url: 'https://studiosatamelia.com/photography/',
    images: ['https://studiosatamelia.com/images/photography/sheyla-photographer.jpg'],
  },
};

export default function PhotographyPage() {
  return (
    <main>
      <PhotographyHero />
      <PhotographerBio />
      <PhotographySessions />
      <CtaBand variant="about" />
    </main>
  );
}
