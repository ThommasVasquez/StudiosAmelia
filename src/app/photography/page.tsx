import React from 'react';
import type { Metadata } from 'next';
import PhotographyHero from '@/components/photography/PhotographyHero';
import PhotographySessions from '@/components/photography/PhotographySessions';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'Photography Studio & Portraits | Personal Branding & Editorial | Amelia Island, FL',
  description:
    'Capture your authentic essence with professional studio photography in Fernandina Beach, FL. Personal branding headshots, beauty editorial portraits, and creative milestone sessions.',
  alternates: {
    canonical: 'https://studiosatamelia.com/photography/',
  },
  openGraph: {
    title: 'Photography Studio & Portraits | Studios at Amelia',
    description:
      'Professional photography sessions in Fernandina Beach, Amelia Island, FL. Executive branding, glamour portraits, and artistic studio shoots.',
    url: 'https://studiosatamelia.com/photography/',
    images: ['https://studiosatamelia.com/images/about/founder-camera-bw.jpg'],
  },
};

export default function PhotographyPage() {
  return (
    <main>
      <PhotographyHero />
      <PhotographySessions />
      <CtaBand variant="about" />
    </main>
  );
}
