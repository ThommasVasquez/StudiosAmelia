import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'solid-black' | 'solid-tan' | 'outline' | 'outline-dark';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'solid-black',
  href,
  isExternal = false,
  className = '',
  children,
  style,
  ...props
}: ButtonProps) {
  const baseClasses = `site-button btn-${variant} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          style={style}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} style={style} {...props}>
      {children}
    </button>
  );
}
