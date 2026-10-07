import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeShowcase from '@/components/home/HomeShowcase';
import CtaBand from '@/components/layout/CtaBand';

export const metadata = {
  title: 'Studios at Amelia | Beauty, Photography, Classes, Community',
  description:
    'Studios at Amelia was created to bring beauty, photography and education together in Fernandina Beach, Amelia Island, FL.',
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeShowcase />
      <CtaBand variant="about" />
    </main>
  );
}
