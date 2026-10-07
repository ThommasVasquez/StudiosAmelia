'use client';

import React from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';

const STUDIO_CARDS = [
  {
    title: 'About the Studio',
    subtitle: 'More Than A Studio. It’s a Vision.',
    href: '/about/',
    desc: 'Meet founder Cris Emiliano, explore our 15+ years of experience, values, and studio gallery.',
    tag: 'THE VISION',
    image: '/images/about/hero-cris.jpg',
  },
  {
    title: 'Beauty Services',
    subtitle: 'Look Good. Feel Confident. Be You.',
    href: '/beauty/',
    desc: 'Lashes, Brows, Dominican Blowout, Updos, No-Makeup & High Glam artistry.',
    tag: 'ARTISTRY',
    image: '/images/beauty/panel-lashes.jpg',
  },
  {
    title: 'Classes & Experiences',
    subtitle: 'Learn. Create. Be Confident.',
    href: '/classes/',
    desc: 'Self-makeup workshops, private lessons, masterclasses & creative group experiences.',
    tag: 'EDUCATION',
    image: '/images/classes/card-selfmakeup.jpg',
  },
  {
    title: 'Contact & Location',
    subtitle: 'We’d Love to Hear From You.',
    href: '/contact/',
    desc: 'Direct inquiry, studio bookings, Fernandina Beach map & frequently asked questions.',
    tag: 'VISIT US',
    image: '/images/contact/lounge-chair.jpg',
  },
];

export default function HomeShowcase() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        paddingTop: 'calc(60 * var(--u))',
        paddingBottom: 'calc(65 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <div
        className="site-container"
        style={{ textAlign: 'center', marginBottom: 'calc(40 * var(--u))' }}
      >
        <Eyebrow style={{ marginBottom: 'calc(12 * var(--u))' }}>
          EXPLORE THE STUDIOS
        </Eyebrow>

        <h2
          className="font-serif"
          style={{
            fontSize: 'calc(38 * var(--u))',
            lineHeight: 1.1,
            fontWeight: 400,
            color: 'var(--ink)',
            marginBottom: 'calc(12 * var(--u))',
          }}
        >
          Crafted for Beauty, Learning & Connection
        </h2>

        <ScriptText
          rotation={-6}
          style={{
            fontSize: 'calc(28 * var(--u))',
            color: 'var(--ink)',
          }}
        >
          Discover our spaces & offerings ♡
        </ScriptText>
      </div>

      {/* 4 Editorial Studio Cards */}
      <div
        className="site-container home-cards-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'calc(18 * var(--u))',
          paddingLeft: 'calc(35 * var(--u))',
          paddingRight: 'calc(35 * var(--u))',
        }}
      >
        {STUDIO_CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="home-feature-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--hairline)',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              transition:
                'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease',
            }}
          >
            {/* Card Image Thumbnail */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'calc(180 * var(--u))',
                overflow: 'hidden',
                backgroundColor: 'var(--sand)',
              }}
            >
              <div
                className="card-thumb-img"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${card.image})`,
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
                {card.tag}
              </div>
            </div>

            {/* Card Body */}
            <div
              style={{
                padding: 'calc(20 * var(--u))',
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
                    fontSize: 'calc(19 * var(--u))',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    marginBottom: 'calc(4 * var(--u))',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontSize: 'calc(13 * var(--u))',
                    color: 'var(--muted)',
                    marginBottom: 'calc(10 * var(--u))',
                  }}
                >
                  {card.subtitle}
                </div>

                <p
                  style={{
                    fontSize: 'calc(11.5 * var(--u))',
                    lineHeight: 1.45,
                    color: 'var(--text)',
                    marginBottom: 'calc(16 * var(--u))',
                  }}
                >
                  {card.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: 'calc(9 * var(--u))',
                  letterSpacing: '0.16em',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  textTransform: 'uppercase',
                  borderTop: '1px solid var(--hairline)',
                  paddingTop: 'calc(12 * var(--u))',
                }}
              >
                <span>EXPLORE PAGE</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .home-feature-card:hover {
          transform: translateY(-4px);
          border-color: var(--tan-line);
          box-shadow: 0 10px 25px -5px rgba(28, 26, 25, 0.08);
        }
        .home-feature-card:hover .card-thumb-img {
          transform: scale(1.05);
        }

        @media (max-width: 1023px) {
          .home-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 0 20px !important;
          }
          .home-feature-card div[style*='height: calc(180'] {
            height: 180px !important;
          }
        }

        @media (max-width: 639px) {
          .home-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
