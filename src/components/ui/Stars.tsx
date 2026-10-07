import React from 'react';

interface StarsProps {
  count?: number;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Stars({
  count = 5,
  size = 14,
  className = '',
  style,
}: StarsProps) {
  return (
    <div
      className={`site-stars inline-flex items-center gap-[3px] ${className}`}
      style={{ color: 'var(--star)', ...style }}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="star-icon"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
