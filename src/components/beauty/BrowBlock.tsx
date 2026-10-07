'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { COPY } from '@/content/copy';
import { getBookingUrl } from '@/lib/booking';

const BROW_IMAGES = [
  '/images/beauty/brow-lamination.jpg',
  '/images/beauty/brow-tint.jpg',
  '/images/beauty/brow-wax.jpg',
];

export default function BrowBlock() {
  const brows = COPY.beauty.brows;

  return (
    <section
      className="service-block brow-block"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--hairline)',
        height: 'calc(235 * var(--u))',
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <div
        className="site-container service-block-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'calc(240 * var(--u)) 1fr calc(132 * var(--u))',
          gap: 'calc(18 * var(--u))',
          height: '100%',
        }}
      >
        {/* Left Image Panel (x 0–240) */}
        <div
          className="service-panel"
          style={{
            height: '100%',
            position: 'relative',
            backgroundImage:
              "url('/images/beauty/panel-brows.jpg')",
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
              {brows.panelTitle}
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
              {brows.panelSubtitle}
            </div>
          </div>
        </div>

        {/* Center: Title + 3 Brow Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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
              {brows.headerTitle}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: 'calc(15 * var(--u))',
                color: 'var(--muted)',
              }}
            >
              {brows.headerSubtitle}
            </span>
          </div>

          {/* 3 Cards */}
          <div
            className="cards-grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'calc(14 * var(--u))',
            }}
          >
            {brows.cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    height: 'calc(52 * var(--u))',
                    width: '100%',
                    backgroundImage: `url('${BROW_IMAGES[idx]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: 'calc(8 * var(--u))',
                  }}
                />

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

                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontSize: 'calc(8.5 * var(--u))',
                    lineHeight: 1.35,
                    color: 'var(--text)',
                    height: 'calc(44 * var(--u))',
                    overflow: 'hidden',
                    marginBottom: 'calc(8 * var(--u))',
                  }}
                >
                  {card.description}
                </p>

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

        {/* Right Side Banner (x 872–1004, fondo --bg-alt) */}
        <div
          className="brow-side-banner"
          style={{
            backgroundColor: 'var(--bg-alt)',
            height: 'calc(204 * var(--u))',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'calc(16 * var(--u))',
            marginRight: 'calc(20 * var(--u))',
          }}
        >
          <div
            style={{
              fontSize: 'calc(10.5 * var(--u))',
              letterSpacing: '0.28em',
              lineHeight: 1.6,
              color: 'var(--ink)',
              fontWeight: 500,
              textTransform: 'uppercase',
              whiteSpace: 'pre-line',
            }}
          >
            {brows.sideBanner}
          </div>
          <div
            style={{
              width: 'calc(26 * var(--u))',
              height: '1px',
              backgroundColor: 'var(--ink)',
              marginTop: 'calc(12 * var(--u))',
            }}
          />
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
          .cards-grid-3 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .brow-side-banner {
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
