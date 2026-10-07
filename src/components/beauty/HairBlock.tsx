'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { COPY } from '@/content/copy';
import { getBookingUrl } from '@/lib/booking';

export default function HairBlock() {
  const hair = COPY.beauty.hair;

  const hairImages = [
    '/images/beauty/hair-blowout.jpg',
    '/images/beauty/hair-updo.jpg',
  ];

  return (
    <section
      className="service-block hair-block"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--hairline)',
        height: 'calc(205 * var(--u))',
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
        {/* Left Image Panel (x 0–240) */}
        <div
          className="service-panel"
          style={{
            height: '100%',
            position: 'relative',
            backgroundImage:
              "url('/images/beauty/panel-hair.jpg')",
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
              {hair.panelTitle}
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
              {hair.panelSubtitle}
            </div>
          </div>
        </div>

        {/* Right Content: Title + 2 Columns (Image + Text) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: 'calc(30 * var(--u))',
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: 'calc(12 * var(--u))' }}>
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
              {hair.headerTitle}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: 'calc(15 * var(--u))',
                color: 'var(--muted)',
              }}
            >
              {hair.headerSubtitle}
            </span>
          </div>

          {/* 2 Split Columns */}
          <div
            className="split-services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'calc(24 * var(--u))',
            }}
          >
            {hair.services.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'calc(120 * var(--u)) 1fr',
                  gap: 'calc(12 * var(--u))',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    height: 'calc(100 * var(--u))',
                    backgroundImage: `url('${hairImages[idx]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                    {item.title}
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontStyle: 'italic',
                      fontSize: 'calc(8.5 * var(--u))',
                      lineHeight: 1.35,
                      color: 'var(--text)',
                      height: 'calc(48 * var(--u))',
                      overflow: 'hidden',
                      marginBottom: 'calc(8 * var(--u))',
                    }}
                  >
                    {item.description}
                  </p>

                  <div>
                    <Button
                      variant="outline"
                      href={getBookingUrl(item.serviceKey)}
                      isExternal
                      style={{
                        height: 'calc(24 * var(--u))',
                        fontSize: 'calc(8 * var(--u))',
                        padding: '0 calc(8 * var(--u))',
                      }}
                    >
                      {item.button}
                    </Button>
                  </div>
                </div>
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
          .split-services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
