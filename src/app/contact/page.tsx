import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactBody from '@/components/contact/ContactBody';
import MapAndFaqSection from '@/components/contact/MapAndFaqSection';
import CtaBand from '@/components/layout/CtaBand';

export const metadata = {
  title: 'Contact | Studios at Amelia',
  description:
    'Get in touch with Studios at Amelia. Send us a message, view our location, business hours, and find answers to frequently asked questions.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactBody />
      <MapAndFaqSection />
      <CtaBand variant="contact" />
    </main>
  );
}
