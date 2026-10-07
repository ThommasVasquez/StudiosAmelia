'use client';

import React from 'react';
import ScriptText from '@/components/ui/ScriptText';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/site';
import { getBookingUrl } from '@/lib/booking';

interface CtaBandProps {
  variant?: 'about' | 'contact' | 'classes';
}

export default function CtaBand({ variant = 'about' }: CtaBandProps) {
  if (variant === 'contact') {
    return (
      <section
        className="site-cta-band"
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg)',
          height: 'calc(188 * var(--u))',
          borderTop: '1px solid var(--hairline)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          className="site-container cta-container-contact"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 'calc(55 * var(--u))',
            width: '100%',
          }}
        >
          {/* Left Script */}
          <div>
            <ScriptText
              rotation={-8}
              style={{
                fontSize: 'calc(44 * var(--u))',
                color: 'var(--ink)',
                lineHeight: 1.1,
              }}
            >
              {"Let's Create\nSomething Beautiful. Together."}
            </ScriptText>
          </div>

          {/* Right Button & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'calc(14 * var(--u))' }}>
            <Button
              variant="solid-black"
              href={getBookingUrl()}
              isExternal
              style={{
                width: 'calc(232 * var(--u))',
                height: 'calc(36 * var(--u))',
                fontSize: 'calc(10 * var(--u))',
              }}
            >
              BOOK NOW
            </Button>
            <span
              style={{
                fontSize: 'calc(7.5 * var(--u))',
                letterSpacing: '0.25em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              {SITE.tagline}
            </span>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1023px) {
            .site-cta-band {
              height: auto !important;
              padding: 48px 20px !important;
            }
            .cta-container-contact {
              flex-direction: column !important;
              gap: 28px !important;
              align-items: flex-start !important;
            }
          }
        `}</style>
      </section>
    );
  }

  if (variant === 'classes') {
    return (
      <section
        className="site-cta-band"
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg)',
          height: 'calc(186 * var(--u))',
          borderTop: '1px solid var(--hairline)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundImage:
            "linear-gradient(rgba(246, 241, 238, 0.88), rgba(246, 241, 238, 0.94)), url('/images/classes/classes-cta.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="site-container cta-container-classes"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1.3fr',
            alignItems: 'center',
            gap: 'calc(30 * var(--u))',
            paddingInline: 'calc(55 * var(--u))',
            width: '100%',
          }}
        >
          {/* Left: Script + Subtitle */}
          <div>
            <ScriptText
              rotation={-8}
              style={{
                fontSize: 'calc(52 * var(--u))',
                color: 'var(--ink)',
                display: 'block',
                marginBottom: 'calc(8 * var(--u))',
              }}
            >
              Invest in You.
            </ScriptText>
            <div
              style={{
                fontSize: 'calc(9.5 * var(--u))',
                letterSpacing: '0.2em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              BEAUTY EDUCATION CHANGES LIVES.
            </div>
          </div>

          {/* Center: Stacked Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(10 * var(--u))' }}>
            <Button
              variant="solid-black"
              href={getBookingUrl('classes')}
              isExternal
              style={{
                width: 'calc(216 * var(--u))',
                height: 'calc(38 * var(--u))',
              }}
            >
              BOOK A CLASS
            </Button>
            <Button
              variant="outline"
              href="/contact/"
              style={{
                width: 'calc(216 * var(--u))',
                height: 'calc(38 * var(--u))',
              }}
            >
              HAVE QUESTIONS? CONTACT US
            </Button>
          </div>

          {/* Right: Address + Amelia Island Script + Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'calc(6 * var(--u))' }}>
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                letterSpacing: '0.1em',
                color: 'var(--text)',
                textTransform: 'uppercase',
                lineHeight: 1.5,
              }}
            >
              📍 {SITE.address1} / {SITE.city.toUpperCase()}
            </div>
            <ScriptText
              rotation={-6}
              style={{
                fontSize: 'calc(26 * var(--u))',
                color: 'var(--ink)',
              }}
            >
              Amelia Island
            </ScriptText>
            <div
              style={{
                fontSize: 'calc(7.5 * var(--u))',
                letterSpacing: '0.25em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              {SITE.tagline}
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1023px) {
            .site-cta-band {
              height: auto !important;
              padding: 48px 20px !important;
            }
            .cta-container-classes {
              display: flex !important;
              flex-direction: column !important;
              gap: 28px !important;
              align-items: flex-start !important;
            }
          }
        `}</style>
      </section>
    );
  }

  // Variant: About (A6 default)
  return (
    <section
      className="site-cta-band"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg)',
        height: 'calc(183 * var(--u))',
        borderTop: '1px solid var(--hairline)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage:
          "linear-gradient(rgba(246, 241, 238, 0.88), rgba(246, 241, 238, 0.92)), url('/images/shared/dunes-cta.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="site-container cta-container-about"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.3fr',
          alignItems: 'center',
          gap: 'calc(30 * var(--u))',
          paddingInline: 'calc(55 * var(--u))',
          width: '100%',
        }}
      >
        {/* Left: Script */}
        <div>
          <ScriptText
            rotation={-8}
            style={{
              fontSize: 'calc(44 * var(--u))',
              color: 'var(--ink)',
              lineHeight: 1.15,
            }}
          >
            {"Let's Create\nSomething Beautiful,\nTogether."}
          </ScriptText>
        </div>

        {/* Center: Stacked Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(10 * var(--u))' }}>
          <Button
            variant="solid-black"
            href={getBookingUrl()}
            isExternal
            style={{
              width: 'calc(166 * var(--u))',
              height: 'calc(34 * var(--u))',
            }}
          >
            BOOK NOW
          </Button>
          <Button
            variant="outline"
            href="/contact/"
            style={{
              width: 'calc(166 * var(--u))',
              height: 'calc(34 * var(--u))',
            }}
          >
            CONTACT US
          </Button>
        </div>

        {/* Right: Address + Amelia Island Script + Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'calc(6 * var(--u))' }}>
          <div
            style={{
              fontSize: 'calc(9 * var(--u))',
              letterSpacing: '0.1em',
              color: 'var(--text)',
              textTransform: 'uppercase',
              lineHeight: 1.5,
            }}
          >
            📍 {SITE.address1} / {SITE.city.toUpperCase()}
          </div>
          <ScriptText
            rotation={-6}
            style={{
              fontSize: 'calc(26 * var(--u))',
              color: 'var(--ink)',
            }}
          >
            Amelia Island
          </ScriptText>
          <div
            style={{
              fontSize: 'calc(7.5 * var(--u))',
              letterSpacing: '0.25em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            {SITE.tagline}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .site-cta-band {
            height: auto !important;
            padding: 48px 20px !important;
          }
          .cta-container-about {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
