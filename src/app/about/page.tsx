import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import FounderBlock from '@/components/about/FounderBlock';
import SheylaBlock from '@/components/about/SheylaBlock';
import StatsStrip from '@/components/about/StatsStrip';
import MissionBlock from '@/components/about/MissionBlock';
import GalleryStrip from '@/components/about/GalleryStrip';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'About Studios at Amelia | Founder Cris Emiliano & Sheyla Vernice | Amelia Island, FL',
  description:
    'Discover the vision behind Studios at Amelia. Founded by master beauty artist Cris Emiliano and creative strategist Sheyla Vernice, bringing artistry, photography, education, and community to Fernandina Beach, FL.',
  alternates: {
    canonical: 'https://studiosatamelia.com/about/',
  },
  openGraph: {
    title: 'About Studios at Amelia | Cris Emiliano & Sheyla Vernice',
    description:
      'More than a studio, it is a vision. Meet founder Cris Emiliano, photographer Sheyla Vernice, and explore our Amelia Island sanctuary.',
    url: 'https://studiosatamelia.com/about/',
    images: ['https://studiosatamelia.com/images/about/hero-cris.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <FounderBlock />
      <SheylaBlock />
      <StatsStrip />
      <MissionBlock />
      <GalleryStrip />
      <CtaBand variant="about" />
    </main>
  );
}
