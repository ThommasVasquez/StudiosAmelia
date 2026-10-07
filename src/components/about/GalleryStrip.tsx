'use client';

import React, { useRef } from 'react';
import ScriptText from '@/components/ui/ScriptText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GALLERY_ITEMS = [
  {
    type: 'image',
    url: '/images/about/gallery-1.jpg',
    title: 'Good People Great Beauty',
  },
  {
    type: 'image',
    url: '/images/about/gallery-2.jpg',
    title: 'Studio with softbox & stool',
  },
  {
    type: 'image',
    url: '/images/about/gallery-3.jpg',
    title: 'Neon Sign',
  },
  {
    type: 'image',
    url: '/images/about/gallery-4.jpg',
    title: 'Lash bed & shelving',
  },
  {
    type: 'image',
    url: '/images/about/gallery-5.jpg',
    title: 'Camera on books',
  },
  {
    type: 'image',
    url: '/images/about/gallery-6.jpg',
    title: 'Studio sofa lounge',
  },
];

export default function GalleryStrip() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-gallery-item', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="gallery-strip"
      style={{
        backgroundColor: 'var(--bg)',
        height: 'calc(180 * var(--u))',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container gallery-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 'calc(6 * var(--u))',
          height: '100%',
          width: '100%',
        }}
      >
        {GALLERY_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="anim-gallery-item gallery-tile"
            style={{
              height: '100%',
              backgroundImage: `url('${item.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .gallery-strip {
            height: auto !important;
            padding: 24px 0 !important;
          }
          .gallery-container {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
            padding: 0 16px !important;
          }
          .gallery-tile {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
}
