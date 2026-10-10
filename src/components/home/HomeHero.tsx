'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import IconCircle, { IconType } from '@/components/ui/IconCircle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface PillarItem {
  icon: IconType;
  label: string;
  tagline: string;
  href: string;
}

const PILLARS: PillarItem[] = [
  {
    icon: 'camera',
    label: 'PHOTOGRAPHY',
    tagline: 'Portraits & Studio',
    href: '/photography/',
  },
  {
    icon: 'heart',
    label: 'MINI EVENTS',
    tagline: 'Private Gatherings',
    href: '/classes/',
  },
  {
    icon: 'lotus',
    label: 'BEAUTY',
    tagline: 'Lashes, Hair & Makeup',
    href: '/beauty/',
  },
  {
    icon: 'mortarboard',
    label: 'CLASSES',
    tagline: 'Hands-on Masterclasses',
    href: '/classes/',
  },
];

export default function HomeHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-home-hero', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from('.anim-pillar-card', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.35,
        ease: 'power2.out',
      });
      gsap.from('.anim-home-script', {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay: 0.4,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="home-hero"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        minHeight: 'calc(440 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container home-hero-container"
        style={{
          minHeight: 'calc(440 * var(--u))',
          display: 'grid',
          gridTemplateColumns: 'calc(530 * var(--u)) 1fr',
          position: 'relative',
        }}
      >
        {/* Left Column (Content & Thematic Pillars) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'calc(55 * var(--u))',
            paddingRight: 'calc(35 * var(--u))',
            paddingTop: 'calc(36 * var(--u))',
            paddingBottom: 'calc(36 * var(--u))',
            zIndex: 2,
          }}
        >
          <div className="anim-home-hero">
            <Eyebrow style={{ marginBottom: 'calc(10 * var(--u))' }}>
              STUDIOS AT AMELIA · FERNANDINA BEACH, FL
            </Eyebrow>
          </div>

          <h1
            className="font-serif anim-home-hero"
            style={{
              fontSize: 'calc(48 * var(--u))',
              lineHeight: 1.04,
              letterSpacing: '-0.01em',
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(16 * var(--u))',
            }}
          >
            Where Photography,
            <br />
            Mini Events & Artistry
            <br />
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              Come Together.
            </span>
          </h1>

          <p
            className="anim-home-hero"
            style={{
              fontSize: 'calc(13.5 * var(--u))',
              lineHeight: 1.5,
              color: 'var(--text)',
              maxWidth: 'calc(450 * var(--u))',
              marginBottom: 'calc(22 * var(--u))',
            }}
          >
            A luxury creative sanctuary on Amelia Island specializing in professional
            photography, intimate mini events, high-end beauty services, and hands-on
            masterclasses.
          </p>

          {/* Dual CTAs */}
          <div
            className="anim-home-hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'calc(12 * var(--u))',
              marginBottom: 'calc(28 * var(--u))',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="solid-black"
              href="/photography/"
              style={{
                height: 'calc(35 * var(--u))',
                padding: '0 calc(22 * var(--u))',
                fontSize: 'calc(10 * var(--u))',
              }}
            >
              BOOK PHOTOGRAPHY →
            </Button>

            <Button
              variant="solid-tan"
              href="/classes/"
              style={{
                height: 'calc(35 * var(--u))',
                padding: '0 calc(20 * var(--u))',
                fontSize: 'calc(10 * var(--u))',
              }}
            >
              MINI EVENTS & CLASSES
            </Button>
          </div>

          {/* 4 Pillars Grid (Thematic Icons) */}
          <div
            className="home-pillars-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'calc(10 * var(--u))',
              maxWidth: 'calc(470 * var(--u))',
              paddingTop: 'calc(16 * var(--u))',
              borderTop: '1px solid var(--hairline)',
            }}
          >
            {PILLARS.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="anim-pillar-card home-pillar-link"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 200ms ease',
                }}
              >
                <IconCircle
                  icon={item.icon}
                  size={32}
                  style={{
                    marginBottom: 'calc(6 * var(--u))',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                />
                <span
                  style={{
                    fontSize: 'calc(8.5 * var(--u))',
                    letterSpacing: '0.18em',
                    color: 'var(--ink)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: 'calc(7.5 * var(--u))',
                    color: 'var(--muted)',
                    lineHeight: 1.25,
                    marginTop: 'calc(2 * var(--u))',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                  }}
                >
                  {item.tagline}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Bleed Studio Visual */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            minHeight: 'calc(380 * var(--u))',
            overflow: 'hidden',
          }}
        >
          {/* Main Reception Photo with gradient fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, var(--bg) 0%, rgba(246, 241, 238, 0.4) 18%, transparent 35%), url('/images/contact/hero-reception.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
            }}
          />

          {/* Wall Script (Top Right) */}
          <div
            className="anim-home-script home-wall-script"
            style={{
              position: 'absolute',
              top: 'calc(28 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
            }}
          >
            <ScriptText
              rotation={-7}
              style={{
                fontSize: 'calc(32 * var(--u))',
                color: 'rgba(28, 26, 25, 0.72)',
                lineHeight: 1.15,
                textShadow: '0 0 1px rgba(0,0,0,0.08)',
              }}
            >
              Good People{'\n'}Great Beauty{'\n'}Belong Here ♡
            </ScriptText>
          </div>

          {/* Studio Location & Experience Badge (Bottom Right) */}
          <div
            className="home-photo-badge"
            style={{
              position: 'absolute',
              bottom: 'calc(24 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
              backgroundColor: 'rgba(246, 241, 238, 0.88)',
              backdropFilter: 'blur(6px)',
              border: '1px solid var(--hairline)',
              padding: 'calc(10 * var(--u)) calc(16 * var(--u))',
              maxWidth: 'calc(240 * var(--u))',
            }}
          >
            <div
              style={{
                fontSize: 'calc(8.5 * var(--u))',
                letterSpacing: '0.22em',
                color: 'var(--muted)',
                fontWeight: 600,
                textTransform: 'uppercase',
                marginBottom: 'calc(4 * var(--u))',
              }}
            >
              AMELIA ISLAND SANCTUARY
            </div>
            <div
              className="font-serif"
              style={{
                fontSize: 'calc(14 * var(--u))',
                color: 'var(--ink)',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: 'calc(4 * var(--u))',
              }}
            >
              1939 South 8th Street
            </div>
            <div
              style={{
                fontSize: 'calc(8 * var(--u))',
                letterSpacing: '0.14em',
                color: 'var(--text)',
                textTransform: 'uppercase',
              }}
            >
              UNIT 6 · FERNANDINA BEACH, FL
            </div>
            <div
              style={{
                width: 'calc(35 * var(--u))',
                height: '1px',
                backgroundColor: 'var(--ink)',
                marginTop: 'calc(6 * var(--u))',
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-pillar-link:hover {
          transform: translateY(-2px);
        }
        .home-pillar-link:hover :global(.site-icon-circle) {
          background-color: var(--tan) !important;
          border-color: var(--ink) !important;
        }

        @media (max-width: 1023px) {
          .home-hero {
            height: auto !important;
            padding: 40px 0 !important;
          }
          .home-hero-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }
          .home-hero-container > div:first-child {
            padding: 0 20px !important;
          }
          .home-hero-container > div:last-child {
            height: 380px !important;
            margin: 0 20px !important;
          }
          .home-pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
            max-width: 100% !important;
          }
          .home-wall-script {
            top: 16px !important;
            right: 20px !important;
          }
          .home-photo-badge {
            bottom: 16px !important;
            right: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
