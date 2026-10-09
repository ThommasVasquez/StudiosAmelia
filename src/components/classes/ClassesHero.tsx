'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ClassesHero() {
  const containerRef = useRef<HTMLElement>(null);
  const hero = COPY.classes.hero;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-classes-hero', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from('.classes-wall-script', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.4,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="classes-hero"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        minHeight: 'calc(420 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container classes-hero-container"
        style={{
          minHeight: 'calc(420 * var(--u))',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.25fr',
          position: 'relative',
          height: '100%',
        }}
      >
        {/* Left Column: Eyebrow, H1, paragraph, CTA, Pillars */}
        <div
          className="classes-hero-left"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'calc(55 * var(--u))',
            paddingRight: 'calc(35 * var(--u))',
            paddingBlock: 'calc(45 * var(--u))',
            zIndex: 2,
          }}
        >
          <div className="anim-classes-hero">
            <Eyebrow style={{ marginBottom: 'calc(12 * var(--u))' }}>
              {hero.eyebrow}
            </Eyebrow>
          </div>

          <h1
            className="font-serif anim-classes-hero"
            style={{
              fontSize: 'calc(52 * var(--u))',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(18 * var(--u))',
            }}
          >
            {hero.h1Line1}
            <br />
            {hero.h1Line2}
            <br />
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--ink)',
              }}
            >
              {hero.h1Line3Italic}
            </span>
          </h1>

          <p
            className="anim-classes-hero"
            style={{
              fontSize: 'calc(13 * var(--u))',
              lineHeight: 1.5,
              color: 'var(--text)',
              maxWidth: 'calc(380 * var(--u))',
              marginBottom: 'calc(24 * var(--u))',
            }}
          >
            {hero.paragraph}
          </p>

          <div
            className="anim-classes-hero"
            style={{ marginBottom: 'calc(28 * var(--u))' }}
          >
            <Button
              variant="solid-black"
              href="#classes"
              style={{
                width: 'calc(200 * var(--u))',
                height: 'calc(36 * var(--u))',
              }}
            >
              {hero.cta}
            </Button>
          </div>

          {/* Pillars Row */}
          <div
            className="anim-classes-hero classes-pillars-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'calc(8 * var(--u))',
            }}
          >
            {['SKILLS', 'CONFIDENCE', 'SELF-LOVE', 'COMMUNITY'].map(
              (pillar, idx) => (
                <span
                  key={pillar}
                  style={{
                    fontSize: 'calc(9 * var(--u))',
                    letterSpacing: '0.2em',
                    color: 'var(--muted)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'calc(8 * var(--u))',
                  }}
                >
                  {pillar}
                  {idx < 3 && (
                    <span style={{ color: 'var(--tan-line)', opacity: 0.8 }}>
                      ·
                    </span>
                  )}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Bleed Photo Visual */}
        <div
          className="classes-hero-right"
          style={{
            position: 'relative',
            height: '100%',
            minHeight: 'calc(380 * var(--u))',
            overflow: 'hidden',
          }}
        >
          {/* Main Photo with smooth edge fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, var(--bg) 0%, rgba(246, 241, 238, 0.35) 15%, transparent 30%), url('/images/classes/hero-vanity.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
            }}
          />

          {/* Wall Script top right */}
          <div
            className="classes-wall-script"
            style={{
              position: 'absolute',
              top: 'calc(26 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
            }}
          >
            <ScriptText
              rotation={-7}
              style={{
                fontSize: 'calc(34 * var(--u))',
                color: 'rgba(28, 26, 25, 0.72)',
                lineHeight: 1.15,
                textShadow: '0 0 1px rgba(0,0,0,0.08)',
              }}
            >
              {hero.mirrorScript}
            </ScriptText>
          </div>

          {/* Academy Badge bottom right */}
          <div
            className="classes-credit-badge"
            style={{
              position: 'absolute',
              bottom: 'calc(22 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
            }}
          >
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.22em',
                color: 'rgba(28, 26, 25, 0.65)',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              STUDIOS AT AMELIA ACADEMY · AMELIA ISLAND, FL
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .classes-hero {
            height: auto !important;
            min-height: auto !important;
            padding: 0 !important;
          }
          .classes-hero-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: auto !important;
          }
          .classes-hero-left {
            padding: 48px 24px 32px !important;
          }
          .classes-hero-right {
            height: 380px !important;
            min-height: 380px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
