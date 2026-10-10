'use client';

import React from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';

const STUDIO_CARDS = [
  {
    num: '01',
    title: 'PHOTOGRAPHY',
    tag: 'MAIN FOCUS',
    href: '/photography/',
    btnText: 'BOOK A PHOTOSHOOT →',
    desc: 'Branding, portraits, family, birthdays, weddings, content creation and more.',
    image: '/images/photography/hero-photography.jpg',
  },
  {
    num: '02',
    title: 'MINI EVENTS',
    tag: null,
    href: '/classes/',
    btnText: 'EXPLORE OUR SPACE →',
    desc: 'Intimate celebrations, creative gatherings, private experiences and studio rental.',
    image: '/images/classes/card-group.jpg',
  },
  {
    num: '03',
    title: 'BEAUTY',
    tag: null,
    href: '/beauty/',
    btnText: 'EXPLORE BEAUTY SERVICES →',
    desc: 'Lashes, brows, hair and makeup by beauty specialists.',
    image: '/images/beauty/panel-lashes.jpg',
  },
  {
    num: '04',
    title: 'CLASSES & EXPERIENCES',
    tag: null,
    href: '/classes/',
    btnText: 'VIEW CLASSES →',
    desc: 'Beauty education, makeup workshops and hands-on creative experiences.',
    image: '/images/classes/card-workshops.jpg',
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
          STUDIOS AT AMELIA · SERVICES & FOCUS
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
          Photography, Mini Events & Creative Artistry
        </h2>

        <ScriptText
          rotation={-6}
          style={{
            fontSize: 'calc(28 * var(--u))',
            color: 'var(--ink)',
          }}
        >
          Designed with Photography & Mini Events as our main focus ♡
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
            key={card.href + card.num}
            href={card.href}
            className="home-feature-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-alt)',
              border: card.tag ? '1.5px solid var(--ink)' : '1px solid var(--hairline)',
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
              {card.tag ? (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(12 * var(--u))',
                    left: 'calc(12 * var(--u))',
                    backgroundColor: 'var(--ink)',
                    color: 'var(--bg)',
                    padding: 'calc(4 * var(--u)) calc(10 * var(--u))',
                    fontSize: 'calc(8 * var(--u))',
                    letterSpacing: '0.18em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  {card.tag}
                </div>
              ) : null}
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 'calc(6 * var(--u))',
                    marginBottom: 'calc(8 * var(--u))',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'calc(12 * var(--u))',
                      fontWeight: 600,
                      color: 'var(--muted)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {card.num}.
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 'calc(18 * var(--u))',
                      fontWeight: 500,
                      color: 'var(--ink)',
                      letterSpacing: '0.02em',
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: 'calc(12 * var(--u))',
                    lineHeight: 1.5,
                    color: 'var(--text)',
                    marginBottom: 'calc(18 * var(--u))',
                  }}
                >
                  {card.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 'calc(9 * var(--u))',
                  letterSpacing: '0.16em',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  textTransform: 'uppercase',
                  borderTop: '1px solid var(--hairline)',
                  paddingTop: 'calc(12 * var(--u))',
                }}
              >
                <span>{card.btnText}</span>
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
