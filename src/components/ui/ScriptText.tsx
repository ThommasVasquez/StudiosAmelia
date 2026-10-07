import React from 'react';

interface ScriptTextProps {
  children: React.ReactNode;
  rotation?: number; // e.g. -8
  className?: string;
  style?: React.CSSProperties;
}

export default function ScriptText({
  children,
  rotation = -8,
  className = '',
  style,
}: ScriptTextProps) {
  return (
    <span
      className={`font-script inline-block select-none ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'left center',
        lineHeight: 1.15,
        display: 'inline-block',
        whiteSpace: 'pre-line',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
