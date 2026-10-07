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
        height: 'calc(420 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        overflow: 'hidden',
      }}
    >
      {/* Background with vanity mirror & bulbs, left gradient to --bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, var(--bg) 0%, rgba(246, 241, 238, 0.5) 35%, transparent 60%), url('/images/classes/hero-vanity.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        className="site-container classes-hero-container"
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.9fr 0.9fr',
          alignItems: 'center',
          paddingLeft: 'calc(60 * var(--u))',
          paddingRight: 'calc(50 * var(--u))',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left Column: Eyebrow, H1, paragraph, CTA, tagline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="anim-classes-hero">
            <Eyebrow style={{ marginBottom: 'calc(10 * var(--u))' }}>
              {hero.eyebrow}
            </Eyebrow>
          </div>

          <h1
            className="font-serif anim-classes-hero"
            style={{
              fontSize: 'calc(54 * var(--u))',
              lineHeight: 1.02,
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(16 * var(--u))',
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
            className="anim-classes-hero"
            style={{
              fontSize: 'calc(13.5 * var(--u))',
              lineHeight: 1.48,
              color: 'var(--text)',
              maxWidth: 'calc(340 * var(--u))',
              marginBottom: 'calc(20 * var(--u))',
            }}
          >
            {hero.paragraph}
          </p>

          <div className="anim-classes-hero" style={{ marginBottom: 'calc(26 * var(--u))' }}>
            <Button
              variant="solid-black"
              href="#classes"
              style={{
                width: 'calc(204 * var(--u))',
                height: 'calc(36 * var(--u))',
              }}
            >
              {hero.cta}
            </Button>
          </div>

          <div
            className="anim-classes-hero"
            style={{
              fontSize: 'calc(9.5 * var(--u))',
              letterSpacing: '0.3em',
              color: 'var(--muted)',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
          >
            {hero.tagline}
          </div>
        </div>

        {/* Center: Mirror script (x 490–580) */}
        <div
          className="classes-mirror-script"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ScriptText
            rotation={-8}
            style={{
              fontSize: 'calc(32 * var(--u))',
              color: 'var(--ink)',
              lineHeight: 1.25,
            }}
          >
            {hero.mirrorScript}
          </ScriptText>
        </div>

        {/* Right: Skills List (x 885) */}
        <div
          className="classes-side-list"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 'calc(11 * var(--u))',
              letterSpacing: '0.3em',
              lineHeight: 1.8,
              color: 'var(--ink)',
              fontWeight: 500,
              whiteSpace: 'pre-line',
              textAlign: 'right',
            }}
          >
            {hero.sideList}
          </div>
          <div
            style={{
              width: 'calc(40 * var(--u))',
              height: '1px',
              backgroundColor: 'var(--ink)',
              marginTop: 'calc(8 * var(--u))',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .classes-hero {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .classes-hero-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
            padding: 0 20px !important;
          }
          .classes-side-list {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
