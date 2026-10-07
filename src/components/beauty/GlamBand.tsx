'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';
import { getBookingUrl } from '@/lib/booking';

export default function GlamBand() {
  const glam = COPY.beauty.glamBand;

  return (
    <section
      className="glam-band"
      style={{
        position: 'relative',
        height: 'calc(148 * var(--u))',
        backgroundColor: 'var(--dark)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage:
          "linear-gradient(to right, rgba(18, 16, 16, 0.85) 0%, rgba(18, 16, 16, 0.6) 50%, rgba(18, 16, 16, 0.85) 100%), url('/images/beauty/glam-band-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="site-container glam-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1.1fr',
          alignItems: 'center',
          gap: 'calc(24 * var(--u))',
          paddingInline: 'calc(65 * var(--u))',
        }}
      >
        {/* Left: Titles & Tagline */}
        <div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'calc(28 * var(--u))',
              lineHeight: 1.08,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              marginBottom: 'calc(6 * var(--u))',
            }}
          >
            {glam.titleLine1}
            <br />
            {glam.titleLine2}
          </h2>
          <div
            style={{
              fontSize: 'calc(11 * var(--u))',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.35,
            }}
          >
            <div>{glam.p1}</div>
            <div>{glam.p2}</div>
          </div>
        </div>

        {/* Center: CTA Button */}
        <div>
          <Button
            variant="solid-tan"
            href={getBookingUrl('beauty-photography')}
            isExternal
            style={{
              width: 'calc(230 * var(--u))',
              height: 'calc(34 * var(--u))',
              fontSize: 'calc(9.5 * var(--u))',
            }}
          >
            {glam.cta}
          </Button>
        </div>

        {/* Right: White Script + Pillar Tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 'calc(24 * var(--u))',
          }}
        >
          <ScriptText
            rotation={-8}
            style={{
              fontSize: 'calc(26 * var(--u))',
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            {glam.script}
          </ScriptText>

          <div>
            <div
              style={{
                fontSize: 'calc(8 * var(--u))',
                letterSpacing: '0.22em',
                lineHeight: 1.5,
                color: 'rgba(255, 255, 255, 0.75)',
                whiteSpace: 'pre-line',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              {glam.subTags}
            </div>
            <div
              style={{
                width: 'calc(30 * var(--u))',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                marginTop: 'calc(4 * var(--u))',
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .glam-band {
            height: auto !important;
            padding: 44px 0 !important;
          }
          .glam-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 20px !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
