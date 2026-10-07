'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COPY } from '@/content/copy';
import { getBookingUrl } from '@/lib/booking';

export default function Header() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isClassesPage = pathname?.includes('/classes');
  const ctaText = isClassesPage ? COPY.header.ctaClasses : COPY.header.ctaDefault;
  const bookingLink = isClassesPage ? getBookingUrl('classes') : getBookingUrl();

  const navItems = COPY.header.nav;

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname?.startsWith(href.replace(/\/$/, ''))) return true;
    return false;
  };

  return (
    <>
      <header
        className="site-header"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: 'calc(62 * var(--u))',
          backgroundColor: 'var(--bg)',
          zIndex: 1000,
          borderBottom: hasScrolled ? '1px solid var(--hairline)' : '1px solid transparent',
          transition: 'border-color 200ms ease',
        }}
      >
        <div
          className="site-container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 'calc(55 * var(--u))',
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'calc(6 * var(--u))',
              textDecoration: 'none',
              color: 'var(--ink)',
            }}
          >
            <span style={{ fontSize: 'calc(14 * var(--u))', color: 'var(--ink)' }}>✦</span>
            <span
              className="font-serif"
              style={{
                fontSize: 'calc(18 * var(--u))',
                letterSpacing: '0.08em',
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              STUDIOS <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 'calc(17 * var(--u))', fontWeight: 400 }}>at</span> AMELIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'calc(24 * var(--u))',
            }}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="site-button btn-solid-black desktop-cta"
              style={{
                width: 'calc(120 * var(--u))',
                height: 'calc(32 * var(--u))',
                fontSize: 'calc(9.5 * var(--u))',
                letterSpacing: '0.18em',
              }}
            >
              {ctaText}
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                padding: '6px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: 'var(--ink)',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: 'var(--ink)',
                  opacity: mobileMenuOpen ? 0 : 1,
                  transition: 'opacity 0.2s',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: 'var(--ink)',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg)',
            zIndex: 999,
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderTop: '1px solid var(--hairline)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                color: isActive(item.href) ? 'var(--ink)' : 'var(--muted)',
                borderBottom: '1px solid var(--hairline)',
                paddingBottom: '12px',
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="site-button btn-solid-black"
            style={{ marginTop: '16px', height: '42px', fontSize: '12px' }}
          >
            {ctaText}
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1023px) {
          .site-header {
            height: 60px !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
