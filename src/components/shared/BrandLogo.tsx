'use client';

import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

export default function BrandLogo({
  variant = 'dark',
  height = 'calc(38 * var(--u))',
  className = '',
  style = {},
  alt = 'Studios at Amelia — Beauty | Photo | Events',
}: BrandLogoProps) {
  const src =
    variant === 'light'
      ? '/images/shared/brand-logo-light.png'
      : '/images/shared/brand-logo-dark.png';

  return (
    <img
      src={src}
      alt={alt}
      className={`brand-logo-img ${className}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        maxHeight: '100%',
        width: 'auto',
        maxWidth: '100%',
        display: 'block',
        objectFit: 'contain',
        ...style,
      }}
    />
  );
}
