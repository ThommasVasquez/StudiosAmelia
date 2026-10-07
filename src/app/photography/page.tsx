import React from 'react';
import PhotographyHero from '@/components/photography/PhotographyHero';
import PhotographySessions from '@/components/photography/PhotographySessions';
import CtaBand from '@/components/layout/CtaBand';

export const metadata = {
  title: 'Photography | Studios at Amelia',
  description:
    'Professional in-studio and on-location photography sessions in Amelia Island, FL. Personal branding, beauty portraits, and creative sessions with Cris Emiliano.',
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
