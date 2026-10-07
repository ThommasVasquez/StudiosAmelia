'use client';

import React, { useRef } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ScriptText from '@/components/ui/ScriptText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ContactBody() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.anim-contact-body', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="contact-body"
      style={{
        backgroundColor: 'var(--bg)',
        height: 'calc(500 * var(--u))',
        borderBottom: '1px solid var(--hairline)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        className="site-container contact-body-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'calc(290 * var(--u)) 1px 1.25fr calc(285 * var(--u))',
          gap: 'calc(20 * var(--u))',
          paddingInline: 'calc(42 * var(--u))',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Left Column: Contact Info */}
        <div className="anim-contact-body">
          <ContactInfo />
        </div>

        {/* Vertical Divider */}
        <div
          className="contact-divider"
          style={{
            width: '1px',
            height: 'calc(420 * var(--u))',
            backgroundColor: 'var(--hairline)',
          }}
        />

        {/* Center Column: Contact Form */}
        <div className="anim-contact-body">
          <ContactForm />
        </div>

        {/* Right Column: Bouclé armchair + Palms + Handwritten script */}
        <div
          className="anim-contact-body contact-lounge-image"
          style={{
            height: 'calc(450 * var(--u))',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage:
              "url('/images/contact/lounge-chair.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'calc(20 * var(--u))',
          }}
        >
          {/* Subtle overlay for text legibility */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(246, 241, 238, 0.45)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <ScriptText
              rotation={-8}
              style={{
                fontSize: 'calc(28 * var(--u))',
                lineHeight: 1.3,
                color: 'var(--ink)',
                textShadow: '0 0 10px rgba(255,255,255,0.6)',
              }}
            >
              {"Look Good\nFeel Confident\nBelong Here. ♡"}
            </ScriptText>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .contact-body {
            height: auto !important;
            padding: 48px 0 !important;
          }
          .contact-body-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .contact-divider {
            display: none !important;
          }
          .contact-lounge-image {
            height: 300px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
