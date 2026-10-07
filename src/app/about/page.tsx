import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import FounderBlock from '@/components/about/FounderBlock';
import StatsStrip from '@/components/about/StatsStrip';
import MissionBlock from '@/components/about/MissionBlock';
import GalleryStrip from '@/components/about/GalleryStrip';
import CtaBand from '@/components/layout/CtaBand';

export const metadata = {
  title: 'About | Studios at Amelia',
  description:
    'More Than A Studio. It’s a Vision. Discover the story, mission and founder behind Studios at Amelia in Amelia Island, FL.',
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
