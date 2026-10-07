'use client';

import React, { useRef } from 'react';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function StatsStrip() {
  const containerRef = useRef<HTMLElement>(null);
  const stats = COPY.about.stats;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-stat-item', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="stats-strip"
      style={{
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        height: 'calc(115 * var(--u))',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="site-container stats-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          height: '100%',
          width: '100%',
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="anim-stat-item stat-cell"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              paddingInline: 'calc(10 * var(--u))',
              borderRight: idx < stats.length - 1 ? '1px solid var(--hairline)' : 'none',
              height: '100%',
            }}
          >
            {stat.isScript ? (
              <ScriptText
                rotation={-6}
                style={{
                  fontSize: 'calc(28 * var(--u))',
                  color: 'var(--ink)',
                  marginBottom: 'calc(4 * var(--u))',
                }}
              >
                {stat.value}
              </ScriptText>
            ) : (
              <span
                className="font-serif stat-number"
                style={{
                  fontSize: 'calc(32 * var(--u))',
                  lineHeight: 1,
                  fontWeight: 400,
                  color: 'var(--ink)',
                  marginBottom: 'calc(6 * var(--u))',
                }}
              >
                {stat.value}
              </span>
            )}
            <span
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.15em',
                color: 'var(--muted)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .stats-strip {
            height: auto !important;
            padding: 36px 0 !important;
          }
          .stats-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
            padding: 0 20px !important;
          }
          .stat-cell {
            border-right: none !important;
            border-bottom: 1px solid var(--hairline);
            padding-bottom: 18px !important;
          }
          .stat-cell:last-child {
            grid-column: span 2;
            border-bottom: none !important;
          }
          .stat-number {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
