import React from 'react';
import ClassesHero from '@/components/classes/ClassesHero';
import ClassCards from '@/components/classes/ClassCards';
import ExperienceBlock from '@/components/classes/ExperienceBlock';
import Testimonials from '@/components/classes/Testimonials';
import CtaBand from '@/components/layout/CtaBand';

export const metadata = {
  title: 'Classes & Experiences | Studios at Amelia',
  description:
    'Learn. Create. Be Confident. Self-makeup classes, private trainings, group events, and hands-on beauty workshops in Amelia Island, FL.',
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
