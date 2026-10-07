'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { COPY } from '@/content/copy';
import { getBookingUrl } from '@/lib/booking';

const LASH_IMAGES = [
  '/images/beauty/lash-classic.jpg',
  '/images/beauty/lash-hybrid.jpg',
  '/images/beauty/lash-volume.jpg',
  '/images/beauty/lash-mega.jpg',
  '/images/beauty/lash-lift.jpg',
];

export default function LashBlock() {
  const lashes = COPY.beauty.lashes;

  return (
    <section
      className="service-block lash-block"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--hairline)',
        height: 'calc(260 * var(--u))',
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <div
        className="site-container service-block-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'calc(240 * var(--u)) 1fr',
          gap: 'calc(18 * var(--u))',
          height: '100%',
        }}
      >
        {/* Left Image Panel with overlay (x 0–240) */}
        <div
          className="service-panel"
          style={{
            height: '100%',
            position: 'relative',
            backgroundImage:
              "url('/images/beauty/panel-lashes.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 'calc(20 * var(--u))',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2
              className="font-serif"
              style={{
                fontSize: 'calc(34 * var(--u))',
                lineHeight: 1,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                marginBottom: 'calc(6 * var(--u))',
              }}
            >
              {lashes.panelTitle}
            </h2>
            <div
              style={{
                fontSize: 'calc(10 * var(--u))',
                letterSpacing: '0.18em',
                color: 'rgba(255, 255, 255, 0.85)',
                whiteSpace: 'pre-line',
                lineHeight: 1.35,
              }}
            >
              {lashes.panelSubtitle}
            </div>
          </div>
        </div>

        {/* Right Content Zone (x 258–1004) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: 'calc(30 * var(--u))',
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: 'calc(14 * var(--u))' }}>
            <span
              style={{
                fontSize: 'calc(16 * var(--u))',
                letterSpacing: '0.2em',
                fontWeight: 600,
                color: 'var(--ink)',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginRight: 'calc(12 * var(--u))',
              }}
            >
              {lashes.headerTitle}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: 'calc(15 * var(--u))',
                color: 'var(--muted)',
              }}
            >
              {lashes.headerSubtitle}
            </span>
          </div>

          {/* 5 Cards Row */}
          <div
            className="cards-grid-5"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 'calc(12 * var(--u))',
            }}
          >
            {lashes.cards.map((card, idx) => (
              <div
                key={idx}
                className="lash-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--bg)',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: 'calc(80 * var(--u))',
                    width: '100%',
                    backgroundImage: `url('${LASH_IMAGES[idx]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: 'calc(8 * var(--u))',
                  }}
                />

                {/* Title */}
                <div
                  style={{
                    fontSize: 'calc(11.5 * var(--u))',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--ink)',
                    textTransform: 'uppercase',
                    marginBottom: 'calc(4 * var(--u))',
                  }}
                >
                  {card.title}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontSize: 'calc(8.5 * var(--u))',
                    lineHeight: 1.35,
                    color: 'var(--text)',
                    height: 'calc(44 * var(--u))',
                    overflow: 'hidden',
                    marginBottom: 'calc(4 * var(--u))',
                  }}
                >
                  {card.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    fontSize: 'calc(7 * var(--u))',
                    letterSpacing: '0.12em',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    marginBottom: 'calc(8 * var(--u))',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {card.tags}
                </div>

                {/* Button */}
                <Button
                  variant="outline"
                  href={getBookingUrl(card.serviceKey)}
                  isExternal
                  style={{
                    height: 'calc(24 * var(--u))',
                    fontSize: 'calc(8 * var(--u))',
                    padding: '0 calc(8 * var(--u))',
                    width: '100%',
                  }}
                >
                  {card.button}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .service-block {
            height: auto !important;
            padding: 32px 0 !important;
          }
          .service-block-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 16px !important;
          }
          .service-panel {
            height: 240px !important;
          }
          .cards-grid-5 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
