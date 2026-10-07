'use client';

import React, { useState } from 'react';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`site-accordion-group ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="site-accordion-item">
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="site-accordion-trigger"
              aria-expanded={isOpen}
            >
              <span className="site-accordion-title">{item.question}</span>
              <span
                className="site-accordion-icon"
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                +
              </span>
            </button>
            <div
              className="site-accordion-content"
              style={{
                maxHeight: isOpen ? '260px' : '0px',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, opacity 0.35s ease',
              }}
            >
              <div className="site-accordion-body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
