import React from 'react';
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactBody from '@/components/contact/ContactBody';
import MapAndFaqSection from '@/components/contact/MapAndFaqSection';
import CtaBand from '@/components/layout/CtaBand';
import { getFaqSchema } from '@/lib/seo';
import { COPY } from '@/content/copy';

export const metadata: Metadata = {
  title: 'Contact & Location | Book Appointment | Studios at Amelia Fernandina Beach, FL',
  description:
    'Contact Studios at Amelia. Visit us at 1939 South 8th Street, Unit 6, Fernandina Beach, FL 32034. Direct booking, studio hours, phone, and answers to common questions.',
  alternates: {
    canonical: 'https://studiosatamelia.com/contact/',
  },
  openGraph: {
    title: 'Contact & Location | Studios at Amelia',
    description:
      'We would love to hear from you. Visit our Fernandina Beach beauty & photography studio or get in touch today.',
    url: 'https://studiosatamelia.com/contact/',
    images: ['https://studiosatamelia.com/images/contact/hero-reception.jpg'],
  },
};

export default function ContactPage() {
  const faqSchema = getFaqSchema(COPY.contact.mapFaq.faqs);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContactHero />
      <ContactBody />
      <MapAndFaqSection />
      <CtaBand variant="contact" />
    </main>
  );
}
