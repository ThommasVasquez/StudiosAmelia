'use client';

import React, { useRef } from 'react';
import MapBlock from './MapBlock';
import QuickAnswers from './QuickAnswers';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function MapAndFaqSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-map-faq', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="map-faq-section"
      style={{
        backgroundColor: 'var(--bg)',
        height: 'calc(405 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        className="site-container map-faq-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1px 1fr',
          gap: 'calc(20 * var(--u))',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <div className="anim-map-faq">
          <MapBlock />
        </div>

        {/* Vertical divider at x≈520 */}
        <div
          className="map-faq-divider"
          style={{
            width: '1px',
            height: 'calc(340 * var(--u))',
            backgroundColor: 'var(--hairline)',
          }}
        />

        <div className="anim-map-faq">
          <QuickAnswers />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .map-faq-section {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .map-faq-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .map-faq-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
