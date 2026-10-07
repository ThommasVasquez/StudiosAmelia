import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Eyebrow({ children, className = '', style }: EyebrowProps) {
  return (
    <span className={`site-eyebrow ${className}`} style={style}>
      {children}
    </span>
  );
}
