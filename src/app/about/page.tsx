import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import FounderBlock from '@/components/about/FounderBlock';
import StatsStrip from '@/components/about/StatsStrip';
import MissionBlock from '@/components/about/MissionBlock';
import GalleryStrip from '@/components/about/GalleryStrip';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'About Studios at Amelia | Founder Cris Emiliano & Studio Story | Amelia Island, FL',
  description:
    'Discover the vision behind Studios at Amelia. Founded by master beauty artist and photographer Cris Emiliano, bringing 15+ years of artistry, education, and community to Fernandina Beach, FL.',
  alternates: {
    canonical: 'https://studiosatamelia.com/about/',
  },
  openGraph: {
    title: 'About Studios at Amelia | Founder Cris Emiliano',
    description:
      'More than a studio, it is a vision. Meet founder Cris Emiliano and explore our Amelia Island beauty and photography sanctuary.',
    url: 'https://studiosatamelia.com/about/',
    images: ['https://studiosatamelia.com/images/about/hero-cris.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <FounderBlock />
      <StatsStrip />
      <MissionBlock />
      <GalleryStrip />
      <CtaBand variant="about" />
    </main>
  );
}
