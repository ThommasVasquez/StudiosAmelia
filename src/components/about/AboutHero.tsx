'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const hero = COPY.about.hero;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-hero-text', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from('.anim-hero-script', {
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="about-hero"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        height: 'calc(385 * var(--u))',
        overflow: 'hidden',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <div
        className="site-container about-hero-container"
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1.25fr',
          position: 'relative',
        }}
      >
        {/* Left Content (x=55, width ≈ 330) */}
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
          <div className="anim-hero-text">
            <Eyebrow style={{ marginBottom: 'calc(14 * var(--u))' }}>
              {hero.eyebrow}
            </Eyebrow>
          </div>

          <h1
            className="font-serif anim-hero-text"
            style={{
              fontSize: 'calc(52 * var(--u))',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              color: 'var(--ink)',
              fontWeight: 400,
              marginBottom: 'calc(20 * var(--u))',
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
              }}
            >
              {hero.h1Line3Italic}
            </span>
          </h1>

          <p
            className="anim-hero-text"
            style={{
              fontSize: 'calc(14 * var(--u))',
              lineHeight: 1.45,
              color: 'var(--text)',
              maxWidth: 'calc(340 * var(--u))',
              marginBottom: 'calc(24 * var(--u))',
            }}
          >
            {hero.paragraph}
          </p>

          <div className="anim-hero-text">
            <Button
              variant="solid-tan"
              href="#founder"
              style={{
                width: 'calc(188 * var(--u))',
                height: 'calc(34 * var(--u))',
              }}
            >
              {hero.cta}
            </Button>
          </div>
        </div>

        {/* Right Bleed Image (from x≈430 to 1024) */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Main Photo with gradient fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, var(--bg) 0%, rgba(246, 241, 238, 0.4) 18%, transparent 35%), url('/images/about/hero-cris.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
            }}
          />

          {/* Wall Script (x≈840-975) */}
          <div
            className="anim-hero-script hero-wall-script"
            style={{
              position: 'absolute',
              top: 'calc(25 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
            }}
          >
            <ScriptText
              rotation={-8}
              style={{
                fontSize: 'calc(32 * var(--u))',
                color: 'rgba(28, 26, 25, 0.65)',
                textShadow: '0 0 1px rgba(0,0,0,0.1)',
              }}
            >
              {hero.wallScript}
            </ScriptText>
          </div>

          {/* Photo Credit Overlay (x=800, y 355-400) */}
          <div
            className="hero-photo-credit"
            style={{
              position: 'absolute',
              bottom: 'calc(18 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.12em',
                lineHeight: 1.4,
                color: 'var(--ink)',
                fontWeight: 600,
              }}
            >
              <div>{hero.photoCredit.line1}</div>
              <div style={{ color: 'var(--muted)', fontWeight: 400 }}>
                {hero.photoCredit.line2}
              </div>
              <div style={{ color: 'var(--muted)', fontWeight: 400 }}>
                {hero.photoCredit.line3}
              </div>
            </div>
            <div
              style={{
                width: 'calc(40 * var(--u))',
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
          .about-hero {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .about-hero-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }
          .about-hero-container > div:first-child {
            padding: 0 20px !important;
          }
          .about-hero-container > div:last-child {
            height: 380px !important;
            margin: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
