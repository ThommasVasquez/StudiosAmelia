import React from 'react';
import type { Metadata } from 'next';
import ClassesHero from '@/components/classes/ClassesHero';
import ClassCards from '@/components/classes/ClassCards';
import ExperienceBlock from '@/components/classes/ExperienceBlock';
import Testimonials from '@/components/classes/Testimonials';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'Makeup Classes & Beauty Workshops | Fernandina Beach & Amelia Island, FL',
  description:
    'Empower your beauty skills with hands-on self-makeup classes, private 1-on-1 coaching, and interactive group beauty workshops taught by Cris Emiliano in Amelia Island, FL.',
  alternates: {
    canonical: 'https://studiosatamelia.com/classes/',
  },
  openGraph: {
    title: 'Makeup Classes & Beauty Workshops | Studios at Amelia',
    description:
      'Learn professional makeup techniques in a supportive studio setting in Fernandina Beach, FL. Book your self-makeup class or private training.',
    url: 'https://studiosatamelia.com/classes/',
    images: ['https://studiosatamelia.com/images/classes/hero-vanity.jpg'],
  },
};

export default function ClassesPage() {
  return (
    <main>
      <ClassesHero />
      <ClassCards />
      <ExperienceBlock />
      <Testimonials />
      <CtaBand variant="classes" />
    </main>
  );
}
