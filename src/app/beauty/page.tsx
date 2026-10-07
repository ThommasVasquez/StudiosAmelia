import React from 'react';
import BeautyHero from '@/components/beauty/BeautyHero';
import LashBlock from '@/components/beauty/LashBlock';
import BrowBlock from '@/components/beauty/BrowBlock';
import HairBlock from '@/components/beauty/HairBlock';
import MakeupBlock from '@/components/beauty/MakeupBlock';
import GlamBand from '@/components/beauty/GlamBand';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Beauty Services | Studios at Amelia',
  description:
    'Look Good. Feel Confident. Be You. Professional lash extensions, brow styling, Dominican blowout, event hair, and makeup services in Amelia Island.',
};

export default function BeautyPage() {
  return (
    <main>
      <BeautyHero />
      <LashBlock />
      <BrowBlock />
      <HairBlock />
      <MakeupBlock />
      <GlamBand />
      <Footer />
    </main>
  );
}
