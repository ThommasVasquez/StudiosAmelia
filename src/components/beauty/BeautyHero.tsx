'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import IconCircle, { IconType } from '@/components/ui/IconCircle';
import { COPY } from '@/content/copy';
import { getBookingUrl } from '@/lib/booking';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function BeautyHero() {
  const containerRef = useRef<HTMLElement>(null);
  const hero = COPY.beauty.hero;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-beauty-hero', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from('.anim-feature-col', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.3,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="beauty-hero"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        height: 'calc(315 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container beauty-hero-container"
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'calc(480 * var(--u)) 1fr',
          position: 'relative',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'calc(55 * var(--u))',
            paddingRight: 'calc(20 * var(--u))',
            zIndex: 2,
          }}
        >
          <div className="anim-beauty-hero">
            <Eyebrow style={{ marginBottom: 'calc(8 * var(--u))' }}>
              {hero.eyebrow}
            </Eyebrow>
          </div>

          <h1
            className="font-serif anim-beauty-hero"
            style={{
              fontSize: 'calc(48 * var(--u))',
              lineHeight: 1.05,
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(14 * var(--u))',
            }}
          >
            {hero.titleLine1}
            <br />
            {hero.titleLine2Part1}
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              {hero.titleLine2Italic}
            </span>
          </h1>

          <p
            className="anim-beauty-hero"
            style={{
              fontSize: 'calc(13 * var(--u))',
              lineHeight: 1.45,
              color: 'var(--text)',
              maxWidth: 'calc(440 * var(--u))',
              marginBottom: 'calc(18 * var(--u))',
            }}
          >
            {hero.paragraph}
          </p>

          <div className="anim-beauty-hero" style={{ marginBottom: 'calc(20 * var(--u))' }}>
            <Button
              variant="solid-black"
              href={getBookingUrl('beauty')}
              isExternal
              style={{
                width: 'calc(260 * var(--u))',
                height: 'calc(32 * var(--u))',
                fontSize: 'calc(9.5 * var(--u))',
              }}
            >
              {hero.cta}
            </Button>
          </div>

          {/* Row of 4 Features */}
          <div
            className="beauty-features-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'calc(12 * var(--u))',
              maxWidth: 'calc(460 * var(--u))',
            }}
          >
            {hero.features.map((feat, idx) => (
              <div
                key={idx}
                className="anim-feature-col"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <IconCircle
                  icon={feat.icon as IconType}
                  size={32}
                  style={{ marginBottom: 'calc(6 * var(--u))' }}
                />
                <span
                  style={{
                    fontSize: 'calc(8 * var(--u))',
                    letterSpacing: '0.18em',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Bleed Portrait */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, var(--bg) 0%, rgba(246, 241, 238, 0.4) 18%, transparent 35%), url('/images/beauty/hero-portrait.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
            }}
          />

          {/* Wall Script top right */}
          <div
            className="beauty-wall-script"
            style={{
              position: 'absolute',
              top: 'calc(24 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
            }}
          >
            <ScriptText
              rotation={-8}
              style={{
                fontSize: 'calc(30 * var(--u))',
                color: 'var(--ink)',
                lineHeight: 1.15,
              }}
            >
              {hero.wallScript}
            </ScriptText>
          </div>

          {/* Sub badge: SAME GIRL. BIGGER DREAMS. */}
          <div
            className="beauty-sub-badge"
            style={{
              position: 'absolute',
              bottom: 'calc(20 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
            }}
          >
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.25em',
                lineHeight: 1.4,
                color: 'var(--ink)',
                fontWeight: 600,
                whiteSpace: 'pre-line',
              }}
            >
              {hero.subBadge}
            </div>
            <div
              style={{
                width: 'calc(30 * var(--u))',
                height: '1px',
                backgroundColor: 'var(--ink)',
                marginTop: 'calc(4 * var(--u))',
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .beauty-hero {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .beauty-hero-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }
          .beauty-hero-container > div:first-child {
            padding: 0 20px !important;
          }
          .beauty-hero-container > div:last-child {
            height: 380px !important;
            margin: 0 20px !important;
          }
          .beauty-features-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
