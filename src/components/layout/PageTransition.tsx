'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (curtainRef.current) curtainRef.current.style.display = 'none';
        return;
      }

      if (curtainRef.current) {
        gsap.fromTo(
          curtainRef.current,
          { yPercent: 0 },
          {
            yPercent: -100,
            duration: 0.7,
            ease: 'power3.inOut',
            onComplete: () => {
              if (curtainRef.current) curtainRef.current.style.display = 'none';
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Curtain Overlay for Route Transitions */}
      <div
        ref={curtainRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--bg)',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
}
