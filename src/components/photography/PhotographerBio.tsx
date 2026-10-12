'use client';

import React, { useRef } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBookingUrl } from '@/lib/booking';

export default function PhotographerBio() {
  const containerRef = useRef<HTMLElement>(null);
  const sheyla = COPY.about.sheyla;

  useGSAP(
    () => {
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-photo-bio', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
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
      className="photographer-bio-section"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--hairline)',
        paddingBlock: 'calc(50 * var(--u))',
        position: 'relative',
      }}
    >
      <div
        className="site-container photographer-bio-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'calc(320 * var(--u)) 1fr',
          gap: 'calc(40 * var(--u))',
          paddingInline: 'calc(45 * var(--u))',
          alignItems: 'center',
        }}
      >
        {/* Left: Sheyla Portrait */}
        <div
          className="anim-photo-bio photo-bio-img-col"
          style={{
            position: 'relative',
            height: 'calc(380 * var(--u))',
            borderRadius: '2px',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: "url('/images/photography/sheyla-photographer.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          />
          {/* Subtle Tag Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 'calc(16 * var(--u))',
              left: 'calc(16 * var(--u))',
              backgroundColor: 'rgba(28, 25, 23, 0.92)',
              backdropFilter: 'blur(8px)',
              padding: 'calc(6 * var(--u)) calc(12 * var(--u))',
              color: '#FAF6F0',
            }}
          >
            <div
              style={{
                fontSize: 'calc(8.5 * var(--u))',
                letterSpacing: '0.2em',
                fontWeight: 600,
              }}
            >
              LEAD PHOTOGRAPHER
            </div>
          </div>
        </div>

        {/* Right: Bio Information & Story */}
        <div
          className="anim-photo-bio photo-bio-content-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Eyebrow style={{ marginBottom: 'calc(8 * var(--u))' }}>
            BEHIND THE LENS · STUDIOS AT AMELIA
          </Eyebrow>

          <h2
            className="font-serif"
            style={{
              fontSize: 'calc(38 * var(--u))',
              lineHeight: 1.1,
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(6 * var(--u))',
            }}
          >
            {sheyla.name}
          </h2>

          <div
            style={{
              fontSize: 'calc(9.5 * var(--u))',
              letterSpacing: '0.24em',
              fontWeight: 600,
              color: 'var(--muted)',
              marginBottom: 'calc(16 * var(--u))',
            }}
          >
            {sheyla.subtitle}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'calc(10 * var(--u))',
              fontSize: 'calc(12 * var(--u))',
              lineHeight: 1.55,
              color: 'var(--text)',
              marginBottom: 'calc(20 * var(--u))',
              maxWidth: 'calc(540 * var(--u))',
            }}
          >
            {sheyla.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Quote Callout */}
          <div
            style={{
              borderLeft: '2px solid var(--ink)',
              paddingLeft: 'calc(16 * var(--u))',
              marginBottom: 'calc(22 * var(--u))',
            }}
          >
            <blockquote
              className="font-serif"
              style={{
                fontSize: 'calc(13.5 * var(--u))',
                fontStyle: 'italic',
                lineHeight: 1.45,
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              {`"${sheyla.quote}"`}
            </blockquote>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'calc(12 * var(--u))',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="solid-black"
              href={getBookingUrl('photography')}
              isExternal
              style={{
                height: 'calc(34 * var(--u))',
                padding: '0 calc(20 * var(--u))',
                fontSize: 'calc(9.5 * var(--u))',
              }}
            >
              BOOK YOUR PHOTOSHOOT →
            </Button>

            <Button
              variant="outline-dark"
              href="#sessions"
              style={{
                height: 'calc(34 * var(--u))',
                padding: '0 calc(18 * var(--u))',
                fontSize: 'calc(9.5 * var(--u))',
              }}
            >
              VIEW PACKAGES
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .photographer-bio-section {
            padding: 44px 0 !important;
          }
          .photographer-bio-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
            padding: 0 20px !important;
          }
          .photo-bio-img-col {
            width: 100% !important;
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
