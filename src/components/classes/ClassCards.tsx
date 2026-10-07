'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CLASS_IMAGES = [
  { url: '/images/classes/card-selfmakeup.jpg' },
  { url: '/images/classes/card-private.jpg' },
  { url: '/images/classes/card-group.jpg' },
  { url: '/images/classes/card-workshops.jpg' },
];

export default function ClassCards() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsData = COPY.classes.cards;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-class-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
      id="classes"
      ref={containerRef}
      className="class-cards-section"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--hairline)',
        height: 'calc(410 * var(--u))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBlock: 'calc(20 * var(--u))',
      }}
    >
      <div className="site-container">
        {/* Section Header: Hairlines + OUR CLASSES + Subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 'calc(18 * var(--u))',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'calc(20 * var(--u))',
              marginBottom: 'calc(6 * var(--u))',
            }}
          >
            <div
              style={{
                width: 'calc(70 * var(--u))',
                height: '1px',
                backgroundColor: 'var(--hairline)',
              }}
            />
            <h2
              className="font-serif"
              style={{
                fontSize: 'calc(20 * var(--u))',
                letterSpacing: '0.3em',
                fontWeight: 500,
                color: 'var(--ink)',
                textTransform: 'uppercase',
              }}
            >
              {cardsData.title}
            </h2>
            <div
              style={{
                width: 'calc(70 * var(--u))',
                height: '1px',
                backgroundColor: 'var(--hairline)',
              }}
            />
          </div>

          <div
            style={{
              fontSize: 'calc(10 * var(--u))',
              letterSpacing: '0.25em',
              fontWeight: 500,
              color: 'var(--muted)',
              textTransform: 'uppercase',
            }}
          >
            {cardsData.subtitle}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="classes-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'calc(16 * var(--u))',
            paddingInline: 'calc(28 * var(--u))',
          }}
        >
          {cardsData.items.map((item, idx) => {
            const imgData = CLASS_IMAGES[idx];
            return (
              <div
                key={idx}
                className="anim-class-card class-card-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: '1px solid var(--hairline)',
                }}
              >
                {/* Image Top (176 px) */}
                <div
                  style={{
                    height: 'calc(160 * var(--u))',
                    backgroundImage: `url('${imgData.url}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Body in --sand */}
                <div
                  style={{
                    backgroundColor: 'var(--sand)',
                    padding: 'calc(16 * var(--u)) calc(14 * var(--u))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 'calc(16 * var(--u))',
                      fontWeight: 500,
                      color: 'var(--ink)',
                      letterSpacing: '0.04em',
                      marginBottom: 'calc(8 * var(--u))',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontStyle: 'italic',
                      fontSize: 'calc(11 * var(--u))',
                      lineHeight: 1.45,
                      color: 'var(--text)',
                      marginBottom: 'calc(14 * var(--u))',
                      minHeight: 'calc(48 * var(--u))',
                    }}
                  >
                    {item.description}
                  </p>

                  <Button
                    variant="outline"
                    href="/contact/"
                    style={{
                      width: 'calc(174 * var(--u))',
                      height: 'calc(34 * var(--u))',
                      fontSize: 'calc(9.5 * var(--u))',
                      backgroundColor: 'transparent',
                    }}
                  >
                    {item.button}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .class-cards-section {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .classes-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 0 20px !important;
          }
        }
        @media (max-width: 640px) {
          .classes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
