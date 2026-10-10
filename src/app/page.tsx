import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeShowcase from '@/components/home/HomeShowcase';
import CtaBand from '@/components/layout/CtaBand';

export const metadata = {
  title: 'Studios at Amelia | Photography, Mini Events, Beauty & Classes',
  description:
    'Studios at Amelia is a luxury creative sanctuary specializing in photography, intimate mini events, high-end beauty, and masterclasses in Fernandina Beach, Amelia Island, FL.',
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
