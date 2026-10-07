'use client';

import React, { useRef } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FounderBlock() {
  const containerRef = useRef<HTMLElement>(null);
  const founder = COPY.about.founder;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-founder-col', {
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
      id="founder"
      ref={containerRef}
      className="founder-block"
      style={{
        backgroundColor: 'var(--bg)',
        height: 'calc(346 * var(--u))',
        paddingBlock: 'calc(20 * var(--u))',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="site-container founder-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'calc(184 * var(--u)) calc(181 * var(--u)) 1fr 1px calc(182 * var(--u))',
          gap: 'calc(16 * var(--u))',
          paddingInline: 'calc(30 * var(--u))',
          alignItems: 'stretch',
          height: '100%',
        }}
      >
        {/* Column A (x 30–214): Camera photo + dark tile with neon script */}
        <div
          className="anim-founder-col founder-col-a"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(7 * var(--u))',
            height: '100%',
          }}
        >
          {/* Top B/W camera photo */}
          <div
            style={{
              height: 'calc(190 * var(--u))',
              backgroundImage:
                "url('/images/about/founder-camera-bw.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Bottom dark tile with neon text */}
          <div
            style={{
              flex: 1,
              backgroundImage: "url('/images/about/founder-neon.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#1C1917',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'calc(12 * var(--u))',
              textAlign: 'center',
            }}
          >
          </div>
        </div>

        {/* Column B (x 221–402): Profile Portrait */}
        <div
          className="anim-founder-col founder-col-b"
          style={{
            height: '100%',
            backgroundImage:
              "url('/images/about/founder-portrait.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Column C (x 435–800): Meet the Founder info */}
        <div
          className="anim-founder-col founder-col-c"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingInline: 'calc(15 * var(--u))',
          }}
        >
          <Eyebrow style={{ marginBottom: 'calc(6 * var(--u))' }}>
            {founder.eyebrow}
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
            {founder.name}
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
            {founder.subtitle}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'calc(8 * var(--u))',
              fontSize: 'calc(11.5 * var(--u))',
              lineHeight: 1.48,
              color: 'var(--text)',
            }}
          >
            {founder.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Vertical Divider */}
        <div
          className="founder-divider"
          style={{
            width: '1px',
            height: 'calc(265 * var(--u))',
            backgroundColor: 'var(--hairline)',
            alignSelf: 'center',
          }}
        />

        {/* Column D (x 818–1000): Handwritten Quote & Signature */}
        <div
          className="anim-founder-col founder-col-d"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingInline: 'calc(10 * var(--u))',
            paddingBlock: 'calc(15 * var(--u))',
          }}
        >
          <div style={{ marginTop: 'calc(10 * var(--u))' }}>
            <ScriptText
              rotation={-8}
              style={{
                fontSize: 'calc(17 * var(--u))',
                lineHeight: 1.35,
                color: 'var(--ink)',
              }}
            >
              {`"${founder.quote}"`}
            </ScriptText>
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
            {founder.quoteAuthor}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .founder-block {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .founder-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
            padding: 0 20px !important;
          }
          .founder-col-a {
            height: 320px !important;
          }
          .founder-col-b {
            height: 320px !important;
          }
          .founder-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
