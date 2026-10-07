'use client';

import React, { useRef } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Stars from '@/components/ui/Stars';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AVATARS = [
  '/images/classes/avatar-maria.jpg',
  '/images/classes/avatar-daniela.jpg',
  '/images/classes/avatar-jessica.jpg',
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const testData = COPY.classes.testimonials;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-test-col', {
        y: 25,
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
      className="testimonials-section"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--hairline)',
        height: 'calc(187 * var(--u))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBlock: 'calc(16 * var(--u))',
      }}
    >
      <div className="site-container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 'calc(18 * var(--u))' }}>
          <Eyebrow style={{ fontSize: 'calc(11 * var(--u))', letterSpacing: '0.3em' }}>
            {testData.title}
          </Eyebrow>
        </div>

        {/* 3 Columns with vertical hairline dividers */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
            alignItems: 'center',
            paddingInline: 'calc(40 * var(--u))',
          }}
        >
          {testData.items.map((item, idx) => (
            <React.Fragment key={idx}>
              <div
                className="anim-test-col test-col"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'calc(16 * var(--u))',
                  paddingInline: 'calc(16 * var(--u))',
                }}
              >
                {/* Circular Avatar 70px */}
                <div
                  style={{
                    width: 'calc(68 * var(--u))',
                    height: 'calc(68 * var(--u))',
                    borderRadius: '50%',
                    backgroundImage: `url('${AVATARS[idx]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexShrink: 0,
                    border: '1px solid var(--hairline)',
                  }}
                />

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Stars count={item.rating} size={13} style={{ marginBottom: 'calc(6 * var(--u))' }} />

                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontStyle: 'italic',
                      fontSize: 'calc(13 * var(--u))',
                      lineHeight: 1.45,
                      color: 'var(--text)',
                      marginBottom: 'calc(6 * var(--u))',
                    }}
                  >
                    {`"${item.quote}"`}
                  </p>

                  <div
                    style={{
                      fontSize: 'calc(9.5 * var(--u))',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      color: 'var(--ink)',
                      textTransform: 'uppercase',
                    }}
                  >
                    — {item.author}
                  </div>
                </div>
              </div>

              {idx < testData.items.length - 1 && (
                <div
                  className="test-divider"
                  style={{
                    width: '1px',
                    height: 'calc(90 * var(--u))',
                    backgroundColor: 'var(--hairline)',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .testimonials-section {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .testimonials-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
            padding: 0 20px !important;
          }
          .test-divider {
            display: none !important;
          }
          .test-col {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
