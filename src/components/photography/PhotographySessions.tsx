'use client';

import React from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import Button from '@/components/ui/Button';
import IconCircle, { IconType } from '@/components/ui/IconCircle';
import { getBookingUrl } from '@/lib/booking';

const SESSIONS = [
  {
    title: 'Personal Branding & Headshots',
    subtitle: 'Elevate your presence & executive vision',
    desc: 'Bespoke portrait sessions crafted for entrepreneurs, corporate leaders, artists, and beauty pros. Includes wardrobe guidance, dynamic lighting set-ups, and magazine-quality retouching.',
    tag: 'BRANDING',
    image: '/images/photography/session-branding.jpg',
  },
  {
    title: 'Beauty & Glamour Portraits',
    subtitle: 'Confidence, radiance & editorial detail',
    desc: 'Harness the full magic of Studios at Amelia: high-end hair styling, professional makeup application, and glamorous editorial studio lighting to celebrate your authentic radiance.',
    tag: 'SIGNATURE',
    image: '/images/photography/session-glamour.jpg',
  },
  {
    title: 'Creative, Bridal & Milestones',
    subtitle: 'Artistic memories designed to last generations',
    desc: 'Special milestones, bridal portraits, senior celebrations, and artistic editorial sessions captured in the peaceful, private atmosphere of our Fernandina Beach studio.',
    tag: 'KEEPSAKES',
    image: '/images/photography/session-bridal.jpg',
  },
];

const FEATURES = [
  {
    icon: 'camera' as IconType,
    label: 'PRO STUDIO GEAR',
    desc: 'High-end lighting, tethered preview & prime optics',
  },
  {
    icon: 'diamond' as IconType,
    label: 'BEAUTY INTEGRATION',
    desc: 'In-house lash, hair & makeup styling packages',
  },
  {
    icon: 'heart' as IconType,
    label: 'GUIDED DIRECTION',
    desc: 'Gentle, empowering posing guidance for everyone',
  },
  {
    icon: 'pin' as IconType,
    label: 'ISLAND SANCTUARY',
    desc: 'Private, relaxing studio in Fernandina Beach, FL',
  },
];

export default function PhotographySessions() {
  return (
    <section
      id="sessions"
      style={{
        backgroundColor: 'var(--bg)',
        paddingTop: 'calc(55 * var(--u))',
        paddingBottom: 'calc(65 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        position: 'relative',
      }}
    >
      <div
        className="site-container"
        style={{ textAlign: 'center', marginBottom: 'calc(38 * var(--u))' }}
      >
        <Eyebrow style={{ marginBottom: 'calc(10 * var(--u))' }}>
          SESSION EXPERIENCES
        </Eyebrow>

        <h2
          className="font-serif"
          style={{
            fontSize: 'calc(36 * var(--u))',
            lineHeight: 1.1,
            fontWeight: 400,
            color: 'var(--ink)',
            marginBottom: 'calc(10 * var(--u))',
          }}
        >
          Signature Studio Packages
        </h2>

        <ScriptText
          rotation={-6}
          style={{
            fontSize: 'calc(26 * var(--u))',
            color: 'var(--ink)',
          }}
        >
          Tailored to your story & style ♡
        </ScriptText>
      </div>

      {/* 3 Columns Grid of Sessions */}
      <div
        className="site-container photo-grid-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'calc(20 * var(--u))',
          paddingInline: 'calc(45 * var(--u))',
          marginBottom: 'calc(50 * var(--u))',
        }}
      >
        {SESSIONS.map((sess, idx) => (
          <div
            key={idx}
            className="photo-card"
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--hairline)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease',
            }}
          >
            {/* Image Thumbnail */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'calc(190 * var(--u))',
                overflow: 'hidden',
                backgroundColor: 'var(--sand)',
              }}
            >
              <div
                className="photo-card-img"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${sess.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 400ms ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(12 * var(--u))',
                  left: 'calc(12 * var(--u))',
                  backgroundColor: 'rgba(246, 241, 238, 0.92)',
                  backdropFilter: 'blur(4px)',
                  padding: 'calc(4 * var(--u)) calc(10 * var(--u))',
                  fontSize: 'calc(8 * var(--u))',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  textTransform: 'uppercase',
                }}
              >
                {sess.tag}
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                padding: 'calc(22 * var(--u))',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'calc(20 * var(--u))',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    marginBottom: 'calc(4 * var(--u))',
                    lineHeight: 1.2,
                  }}
                >
                  {sess.title}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontSize: 'calc(13 * var(--u))',
                    color: 'var(--muted)',
                    marginBottom: 'calc(12 * var(--u))',
                  }}
                >
                  {sess.subtitle}
                </div>

                <p
                  style={{
                    fontSize: 'calc(12 * var(--u))',
                    lineHeight: 1.5,
                    color: 'var(--text)',
                    marginBottom: 'calc(20 * var(--u))',
                  }}
                >
                  {sess.desc}
                </p>
              </div>

              <div>
                <Button
                  variant="solid-black"
                  href={getBookingUrl('photography')}
                  isExternal
                  style={{
                    width: '100%',
                    height: 'calc(35 * var(--u))',
                    fontSize: 'calc(9.5 * var(--u))',
                  }}
                >
                  BOOK SESSION ONLINE →
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4 Feature Strip */}
      <div
        className="site-container photo-features-row"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'calc(20 * var(--u))',
          paddingInline: 'calc(45 * var(--u))',
          paddingTop: 'calc(24 * var(--u))',
          borderTop: '1px solid var(--hairline)',
        }}
      >
        {FEATURES.map((feat, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <IconCircle
              icon={feat.icon}
              size={36}
              style={{
                marginBottom: 'calc(8 * var(--u))',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
              }}
            />
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.18em',
                fontWeight: 600,
                color: 'var(--ink)',
                textTransform: 'uppercase',
                marginBottom: 'calc(4 * var(--u))',
              }}
            >
              {feat.label}
            </div>
            <div
              style={{
                fontSize: 'calc(8.5 * var(--u))',
                color: 'var(--muted)',
                lineHeight: 1.35,
              }}
            >
              {feat.desc}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .photo-card:hover {
          transform: translateY(-4px);
          border-color: var(--tan-line);
          box-shadow: 0 10px 25px -5px rgba(28, 26, 25, 0.08);
        }
        .photo-card:hover .photo-card-img {
          transform: scale(1.05);
        }

        @media (max-width: 1023px) {
          .photo-grid-3 {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding-inline: 20px !important;
          }
          .photo-features-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding-inline: 20px !important;
          }
          .photo-card div[style*='height: calc(190'] {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
