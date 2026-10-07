'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import IconCircle, { IconType } from '@/components/ui/IconCircle';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function MissionBlock() {
  const containerRef = useRef<HTMLElement>(null);
  const mission = COPY.about.mission;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-mission-left', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });
      gsap.from('.anim-value-row', {
        x: 25,
        opacity: 0,
        duration: 0.6,
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
      className="mission-block"
      style={{
        backgroundColor: 'var(--bg-alt)',
        height: 'calc(265 * var(--u))',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container mission-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.95fr 1.1fr',
          height: '100%',
          width: '100%',
        }}
      >
        {/* Left (x 50) */}
        <div
          className="anim-mission-left"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'calc(50 * var(--u))',
            paddingRight: 'calc(24 * var(--u))',
          }}
        >
          <Eyebrow style={{ marginBottom: 'calc(10 * var(--u))' }}>
            {mission.eyebrow}
          </Eyebrow>

          <h2
            className="font-serif"
            style={{
              fontSize: 'calc(34 * var(--u))',
              lineHeight: 1.08,
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(14 * var(--u))',
            }}
          >
            {mission.title}
          </h2>

          <p
            style={{
              fontSize: 'calc(13 * var(--u))',
              lineHeight: 1.48,
              color: 'var(--text)',
              maxWidth: 'calc(380 * var(--u))',
              marginBottom: 'calc(22 * var(--u))',
            }}
          >
            {mission.paragraph}
          </p>

          <div>
            <Button
              variant="solid-tan"
              style={{
                width: 'calc(156 * var(--u))',
                height: 'calc(34 * var(--u))',
              }}
            >
              {mission.cta}
            </Button>
          </div>
        </div>

        {/* Center: Full-height studio photo with plants and wall logo */}
        <div
          className="mission-center-image"
          style={{
            height: '100%',
            backgroundImage:
              "url('/images/about/mission-studio.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Right (x 777–): 5 Value rows with circular icons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'calc(10 * var(--u))',
            paddingLeft: 'calc(32 * var(--u))',
            paddingRight: 'calc(30 * var(--u))',
          }}
        >
          {mission.values.map((val, idx) => (
            <div
              key={idx}
              className="anim-value-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'calc(14 * var(--u))',
              }}
            >
              <IconCircle icon={val.icon as IconType} size={36} />
              <div>
                <div
                  style={{
                    fontSize: 'calc(10 * var(--u))',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    color: 'var(--ink)',
                    textTransform: 'uppercase',
                  }}
                >
                  {val.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontSize: 'calc(12 * var(--u))',
                    color: 'var(--muted)',
                    lineHeight: 1.1,
                  }}
                >
                  {val.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .mission-block {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .mission-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 36px !important;
          }
          .mission-container > div:first-child {
            padding: 0 20px !important;
          }
          .mission-center-image {
            height: 280px !important;
            margin: 0 20px !important;
          }
          .mission-container > div:last-child {
            padding: 0 20px !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
