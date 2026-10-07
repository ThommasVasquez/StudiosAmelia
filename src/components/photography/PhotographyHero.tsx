'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import ScriptText from '@/components/ui/ScriptText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function PhotographyHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-photo-hero', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from('.anim-photo-script', {
        opacity: 0,
        duration: 1.2,
        delay: 0.35,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="photo-hero"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        height: 'calc(385 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container photo-hero-container"
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'calc(480 * var(--u)) 1fr',
          position: 'relative',
        }}
      >
        {/* Left Column Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'calc(55 * var(--u))',
            paddingRight: 'calc(24 * var(--u))',
            zIndex: 2,
          }}
        >
          <div className="anim-photo-hero">
            <Eyebrow style={{ marginBottom: 'calc(10 * var(--u))' }}>
              STUDIOS AT AMELIA · PHOTOGRAPHY
            </Eyebrow>
          </div>

          <h1
            className="font-serif anim-photo-hero"
            style={{
              fontSize: 'calc(48 * var(--u))',
              lineHeight: 1.04,
              letterSpacing: '-0.01em',
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 'calc(14 * var(--u))',
            }}
          >
            Capturing Moments.
            <br />
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              Creating Timeless Art.
            </span>
          </h1>

          <p
            className="anim-photo-hero"
            style={{
              fontSize: 'calc(13.5 * var(--u))',
              lineHeight: 1.48,
              color: 'var(--text)',
              maxWidth: 'calc(420 * var(--u))',
              marginBottom: 'calc(22 * var(--u))',
            }}
          >
            Professional studio and on-location photography sessions in Amelia Island.
            From personal branding and high-glamour beauty portraits to creative milestone
            sessions, we capture your authentic essence in every frame.
          </p>

          <div
            className="anim-photo-hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'calc(12 * var(--u))',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="solid-black"
              href="/contact/"
              style={{
                height: 'calc(35 * var(--u))',
                padding: '0 calc(22 * var(--u))',
                fontSize: 'calc(10 * var(--u))',
              }}
            >
              BOOK A SESSION →
            </Button>

            <Button
              variant="solid-tan"
              href="#sessions"
              style={{
                height: 'calc(35 * var(--u))',
                padding: '0 calc(20 * var(--u))',
                fontSize: 'calc(10 * var(--u))',
              }}
            >
              EXPLORE SESSIONS
            </Button>
          </div>
        </div>

        {/* Right Bleed Photo Visual */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Main Photo with gradient fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, var(--bg) 0%, rgba(246, 241, 238, 0.4) 18%, transparent 35%), url('/images/about/founder-camera-bw.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 25%',
            }}
          />

          {/* Wall Script top right */}
          <div
            className="anim-photo-script photo-wall-script"
            style={{
              position: 'absolute',
              top: 'calc(26 * var(--u))',
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
              Beauty in Every Frame ♡
            </ScriptText>
          </div>

          {/* Photographer Badge bottom right */}
          <div
            className="photo-credit-badge"
            style={{
              position: 'absolute',
              bottom: 'calc(22 * var(--u))',
              right: 'calc(45 * var(--u))',
              zIndex: 3,
            }}
          >
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.14em',
                lineHeight: 1.4,
                color: 'var(--ink)',
                fontWeight: 600,
              }}
            >
              <div>CRIS EMILIANO</div>
              <div style={{ color: 'var(--muted)', fontWeight: 400 }}>
                LEAD PHOTOGRAPHER & CREATIVE DIRECTOR
              </div>
            </div>
            <div
              style={{
                width: 'calc(35 * var(--u))',
                height: '1px',
                backgroundColor: 'var(--ink)',
                marginTop: 'calc(5 * var(--u))',
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .photo-hero {
            height: auto !important;
            padding: 44px 0 !important;
          }
          .photo-hero-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
          }
          .photo-hero-container > div:first-child {
            padding: 0 20px !important;
          }
          .photo-hero-container > div:last-child {
            height: 380px !important;
            margin: 0 20px !important;
          }
          .photo-wall-script {
            top: 16px !important;
            right: 20px !important;
          }
          .photo-credit-badge {
            bottom: 16px !important;
            right: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
