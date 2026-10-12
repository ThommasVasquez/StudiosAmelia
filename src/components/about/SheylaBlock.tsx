'use client';

import React, { useRef } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBookingUrl } from '@/lib/booking';

export default function SheylaBlock() {
  const containerRef = useRef<HTMLElement>(null);
  const sheyla = COPY.about.sheyla;

  useGSAP(
    () => {
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-sheyla-col', {
        y: 30,
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
      id="sheyla"
      ref={containerRef}
      className="sheyla-block"
      style={{
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--hairline)',
        height: 'calc(346 * var(--u))',
        paddingBlock: 'calc(20 * var(--u))',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="site-container sheyla-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'calc(184 * var(--u)) calc(181 * var(--u)) 1fr 1px calc(182 * var(--u))',
          gap: 'calc(16 * var(--u))',
          paddingInline: 'calc(30 * var(--u))',
          alignItems: 'stretch',
          height: '100%',
        }}
      >
        {/* Column A (x 30–214): Secondary creative lifestyle photo & Dark tile */}
        <div
          className="anim-sheyla-col sheyla-col-a"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(7 * var(--u))',
            height: '100%',
          }}
        >
          {/* Top creative session photo */}
          <div
            style={{
              height: 'calc(190 * var(--u))',
              backgroundImage: "url('/images/photography/session-branding.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Bottom dark tile with branding statement */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#1C1917',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'calc(12 * var(--u))',
              textAlign: 'center',
              color: 'var(--bg)',
            }}
          >
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.22em',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: 'calc(4 * var(--u))',
              }}
            >
              VISUAL STORYTELLING
            </div>
            <div
              className="font-serif"
              style={{
                fontSize: 'calc(14 * var(--u))',
                fontStyle: 'italic',
                lineHeight: 1.25,
                color: '#FAF6F0',
              }}
            >
              Turning Real Moments Into Art
            </div>
          </div>
        </div>

        {/* Column B (x 221–402): Sheyla Portrait */}
        <div
          className="anim-sheyla-col sheyla-col-b"
          style={{
            height: '100%',
            backgroundImage: "url('/images/about/sheyla-portrait.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />

        {/* Column C (x 435–800): Meet Sheyla info */}
        <div
          className="anim-sheyla-col sheyla-col-c"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingInline: 'calc(15 * var(--u))',
          }}
        >
          <Eyebrow style={{ marginBottom: 'calc(6 * var(--u))' }}>
            {sheyla.eyebrow}
          </Eyebrow>

          <h2
            className="font-serif"
            style={{
              fontSize: 'calc(44 * var(--u))',
              lineHeight: 1.05,
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(6 * var(--u))',
            }}
          >
            {sheyla.name}
          </h2>

          <div
            style={{
              fontSize: 'calc(10 * var(--u))',
              letterSpacing: '0.3em',
              fontWeight: 600,
              color: 'var(--muted)',
              marginBottom: 'calc(14 * var(--u))',
            }}
          >
            {sheyla.subtitle}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'calc(8 * var(--u))',
              fontSize: 'calc(11.5 * var(--u))',
              lineHeight: 1.48,
              color: 'var(--text)',
              marginBottom: 'calc(14 * var(--u))',
            }}
          >
            {sheyla.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div>
            <Button
              variant="solid-black"
              href={getBookingUrl('photography')}
              isExternal
              style={{
                height: 'calc(32 * var(--u))',
                padding: '0 calc(18 * var(--u))',
                fontSize: 'calc(9.5 * var(--u))',
              }}
            >
              BOOK A SESSION WITH SHEYLA →
            </Button>
          </div>
        </div>

        {/* Vertical Divider */}
        <div
          className="sheyla-divider"
          style={{
            width: '1px',
            height: 'calc(265 * var(--u))',
            backgroundColor: 'var(--hairline)',
            alignSelf: 'center',
          }}
        />

        {/* Column D (x 818–1000): Sheyla Quote & Signature */}
        <div
          className="anim-sheyla-col sheyla-col-d"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingInline: 'calc(10 * var(--u))',
            paddingBlock: 'calc(15 * var(--u))',
          }}
        >
          <div style={{ marginTop: 'calc(10 * var(--u))' }}>
            <blockquote
              className="font-serif"
              style={{
                fontSize: 'calc(13.5 * var(--u))',
                lineHeight: 1.5,
                color: 'var(--ink)',
                fontStyle: 'normal',
                margin: 0,
              }}
            >
              {`"${sheyla.quote}"`}
            </blockquote>
          </div>

          <div
            style={{
              fontSize: 'calc(9 * var(--u))',
              letterSpacing: '0.12em',
              color: 'var(--ink)',
              fontWeight: 600,
              marginTop: 'calc(14 * var(--u))',
            }}
          >
            {sheyla.quoteAuthor}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .sheyla-block {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .sheyla-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
            padding: 0 20px !important;
          }
          .sheyla-col-a {
            height: 280px !important;
            order: 2;
          }
          .sheyla-col-b {
            height: 380px !important;
            order: 1;
          }
          .sheyla-col-c {
            order: 3;
          }
          .sheyla-col-d {
            order: 4;
          }
          .sheyla-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
