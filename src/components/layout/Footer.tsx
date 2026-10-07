'use client';

import React from 'react';
import { SITE } from '@/lib/site';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer
      className={`site-footer ${className}`}
      style={{
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--hairline)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Upper Brand Info Bar */}
      <div
        className="footer-main-bar"
        style={{
          width: '100%',
          minHeight: 'calc(84 * var(--u))',
          display: 'flex',
          alignItems: 'center',
          paddingBlock: 'calc(18 * var(--u))',
        }}
      >
        <div
          className="site-container footer-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.4fr 1.6fr 1px 1.4fr',
            alignItems: 'center',
            gap: 'calc(24 * var(--u))',
            paddingInline: 'calc(45 * var(--u))',
            width: '100%',
          }}
        >
          {/* Brand Logo text */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              className="font-serif"
              style={{
                fontSize: 'calc(20 * var(--u))',
                letterSpacing: '0.04em',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1,
              }}
            >
              STUDIOS AT AMELIA
            </span>
          </div>

          {/* Pin + Address */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(10 * var(--u))' }}>
            <span style={{ color: 'var(--ink)', fontSize: 'calc(13 * var(--u))' }}>📍</span>
            <div
              style={{
                fontSize: 'calc(9 * var(--u))',
                lineHeight: 1.4,
                color: 'var(--muted)',
                letterSpacing: '0.02em',
              }}
            >
              <div>{SITE.address1}</div>
              <div>{SITE.city}</div>
            </div>
          </div>

          {/* Clock + Hours */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(10 * var(--u))' }}>
            <span style={{ color: 'var(--ink)', fontSize: 'calc(13 * var(--u))' }}>🕒</span>
            <div
              style={{
                fontSize: 'calc(8.5 * var(--u))',
                lineHeight: 1.35,
                color: 'var(--muted)',
              }}
            >
              <div><strong>Tuesday – Saturday</strong> / 10:00 AM – 6:00 PM</div>
              <div><strong>Sunday – Monday</strong> (By Appointment Only)</div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            className="footer-divider"
            style={{
              width: '1px',
              height: 'calc(44 * var(--u))',
              backgroundColor: 'var(--hairline)',
            }}
          />

          {/* Socials & Tagline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 'calc(6 * var(--u))',
            }}
          >
            {/* Social Icons 14px */}
            <div style={{ display: 'flex', gap: 'calc(12 * var(--u))', color: 'var(--ink)' }}>
              <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ transition: 'opacity 0.2s', color: 'inherit' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ transition: 'opacity 0.2s', color: 'inherit' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ transition: 'opacity 0.2s', color: 'inherit' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href={SITE.socials.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" style={{ transition: 'opacity 0.2s', color: 'inherit' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
              <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ transition: 'opacity 0.2s', color: 'inherit' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9" />
                </svg>
              </a>
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: 'calc(7.5 * var(--u))',
                letterSpacing: '0.25em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              BEAUTY CREATES A BRIGHTER YOU.
            </div>
          </div>
        </div>
      </div>

      {/* Developer Signature Bar */}
      <div
        className="developer-signature-bar"
        style={{
          backgroundColor: '#28427C',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          padding: 'calc(11 * var(--u)) 0',
          width: '100%',
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingInline: 'calc(20 * var(--u))',
          }}
        >
          <a
            href="https://energysoftmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dev-signature-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'calc(14 * var(--u))',
              textDecoration: 'none',
              color: '#FFFFFF',
              transition: 'opacity 200ms ease, transform 200ms ease',
            }}
          >
            <img
              src="/images/shared/energysoft-logo.png"
              alt="ENERGYSOFT MEDIA"
              style={{
                height: 'calc(26 * var(--u))',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                lineHeight: 1.35,
                fontFamily: 'var(--font-dm-sans, -apple-system, BlinkMacSystemFont, sans-serif)',
              }}
            >
              <span
                style={{
                  fontSize: 'calc(10 * var(--u))',
                  color: 'rgba(255, 255, 255, 0.95)',
                  letterSpacing: '0.01em',
                }}
              >
                Desarrollado con todo el poder de{' '}
                <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>ENERGYSOFTmedia®</strong>
              </span>
              <span
                style={{
                  fontSize: 'calc(9 * var(--u))',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 400,
                }}
              >
                | Software con Energía! ⚡
              </span>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        .dev-signature-link:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        @media (max-width: 1023px) {
          .footer-content {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
            align-items: flex-start !important;
            padding: 32px 20px !important;
          }
          .footer-divider {
            display: none !important;
          }
          .developer-signature-bar {
            padding: 14px 16px !important;
          }
          .dev-signature-link {
            flex-direction: row !important;
            gap: 12px !important;
            align-items: center !important;
            text-align: left !important;
          }
          .dev-signature-link img {
            height: 26px !important;
          }
          .dev-signature-link div span:first-child {
            font-size: 11px !important;
          }
          .dev-signature-link div span:last-child {
            font-size: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
}
