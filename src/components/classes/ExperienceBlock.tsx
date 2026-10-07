'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import IconCircle, { IconType } from '@/components/ui/IconCircle';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ExperienceBlock() {
  const containerRef = useRef<HTMLElement>(null);
  const exp = COPY.classes.experience;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-exp-content', {
        y: 25,
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
      ref={containerRef}
      className="experience-block"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--hairline)',
        height: 'calc(261 * var(--u))',
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <div
        className="site-container experience-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'calc(452 * var(--u)) 1fr 1px calc(240 * var(--u))',
          gap: 'calc(20 * var(--u))',
          height: '100%',
          width: '100%',
        }}
      >
        {/* Left Image with overlay script (x 0–452) */}
        <div
          className="experience-left-img"
          style={{
            height: '100%',
            position: 'relative',
            backgroundImage:
              "url('/images/classes/experience-vanity.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(246, 241, 238, 0.45)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <ScriptText
              rotation={-8}
              style={{
                fontSize: 'calc(28 * var(--u))',
                lineHeight: 1.25,
                color: 'var(--ink)',
                textShadow: '0 0 10px rgba(255,255,255,0.7)',
              }}
            >
              {exp.mirrorScript}
            </ScriptText>
          </div>
        </div>

        {/* Center: Eyebrow, H2, paragraph, CTA (x 480–800) */}
        <div
          className="anim-exp-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingInline: 'calc(10 * var(--u))',
          }}
        >
          <Eyebrow style={{ marginBottom: 'calc(6 * var(--u))' }}>
            {exp.eyebrow}
          </Eyebrow>

          <h2
            className="font-serif"
            style={{
              fontSize: 'calc(38 * var(--u))',
              lineHeight: 1.05,
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(14 * var(--u))',
            }}
          >
            {exp.title}
          </h2>

          <p
            style={{
              fontSize: 'calc(13 * var(--u))',
              lineHeight: 1.48,
              color: 'var(--text)',
              maxWidth: 'calc(360 * var(--u))',
              marginBottom: 'calc(20 * var(--u))',
            }}
          >
            {exp.paragraph}
          </p>

          <div>
            <Button
              variant="solid-tan"
              href="/contact/"
              style={{
                width: 'calc(212 * var(--u))',
                height: 'calc(34 * var(--u))',
              }}
            >
              {exp.cta}
            </Button>
          </div>
        </div>

        {/* Vertical divider in x=822 */}
        <div
          className="experience-divider"
          style={{
            width: '1px',
            height: 'calc(200 * var(--u))',
            backgroundColor: 'var(--hairline)',
            alignSelf: 'center',
          }}
        />

        {/* Right: 5 Features with small icons */}
        <div
          className="anim-exp-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'calc(12 * var(--u))',
            paddingRight: 'calc(20 * var(--u))',
          }}
        >
          {exp.features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'calc(10 * var(--u))',
              }}
            >
              <IconCircle icon={feat.icon as IconType} size={28} />
              <div
                style={{
                  fontSize: 'calc(9 * var(--u))',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: 'var(--ink)',
                  textTransform: 'uppercase',
                  lineHeight: 1.25,
                }}
              >
                <div>{feat.line1}</div>
                <div>{feat.line2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .experience-block {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .experience-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 36px !important;
            padding: 0 20px !important;
          }
          .experience-left-img {
            height: 280px !important;
          }
          .experience-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
