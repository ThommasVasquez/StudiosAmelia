'use client';

import React, { useRef } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);
  const hero = COPY.contact.hero;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-contact-hero', {
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
      className="contact-hero"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        height: 'calc(335 * var(--u))',
        overflow: 'hidden',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      {/* Background with right reception desk photo and left gradient to --bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, var(--bg) 0%, rgba(246, 241, 238, 0.6) 38%, transparent 60%), url('/images/contact/hero-reception.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      />

      <div
        className="site-container contact-hero-container"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 'calc(55 * var(--u))',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="anim-contact-hero">
          <Eyebrow style={{ marginBottom: 'calc(12 * var(--u))' }}>
            {hero.eyebrow}
          </Eyebrow>
        </div>

        <h1
          className="font-serif anim-contact-hero"
          style={{
            fontSize: 'calc(52 * var(--u))',
            lineHeight: 1.05,
            fontWeight: 400,
            color: 'var(--ink)',
            marginBottom: 'calc(18 * var(--u))',
          }}
        >
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </h1>

        <div
          className="anim-contact-hero"
          style={{
            fontSize: 'calc(14 * var(--u))',
            lineHeight: 1.5,
            color: 'var(--text)',
            marginBottom: 'calc(26 * var(--u))',
          }}
        >
          <div>{hero.paragraphs[0]}</div>
          <div>{hero.paragraphs[1]}</div>
        </div>

        <div
          className="anim-contact-hero"
          style={{
            fontSize: 'calc(10 * var(--u))',
            letterSpacing: '0.3em',
            color: 'var(--muted)',
            fontWeight: 500,
          }}
        >
          {hero.tagline}
        </div>

        {/* Wall Script top right */}
        <div
          className="contact-wall-script"
          style={{
            position: 'absolute',
            top: 'calc(30 * var(--u))',
            right: 'calc(55 * var(--u))',
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
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .contact-hero {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .contact-hero-container {
            padding: 0 20px !important;
          }
          .contact-wall-script {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
