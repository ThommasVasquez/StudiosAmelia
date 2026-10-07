import React from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Accordion from '@/components/ui/Accordion';
import ScriptText from '@/components/ui/ScriptText';
import { COPY } from '@/content/copy';

export default function QuickAnswers() {
  const faqData = COPY.contact.mapFaq;

  return (
    <div
      className="contact-quick-answers"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 'calc(24 * var(--u))',
        paddingRight: 'calc(45 * var(--u))',
      }}
    >
      <Eyebrow style={{ marginBottom: 'calc(8 * var(--u))' }}>
        {faqData.faqEyebrow}
      </Eyebrow>

      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: 'calc(13 * var(--u))',
          color: 'var(--muted)',
          marginBottom: 'calc(16 * var(--u))',
        }}
      >
        {faqData.faqSubtitle}
      </div>

      {/* Accordion FAQ */}
      <div style={{ marginBottom: 'calc(20 * var(--u))' }}>
        <Accordion items={faqData.faqs} />
      </div>

      {/* Bottom accent: short line, script and contact note */}
      <div style={{ marginTop: 'calc(4 * var(--u))' }}>
        <div
          style={{
            width: 'calc(57 * var(--u))',
            height: '1px',
            backgroundColor: 'var(--ink)',
            marginBottom: 'calc(10 * var(--u))',
          }}
        />

        <div style={{ marginBottom: 'calc(4 * var(--u))' }}>
          <ScriptText
            rotation={-6}
            style={{
              fontSize: 'calc(22 * var(--u))',
              color: 'var(--ink)',
            }}
          >
            {faqData.faqFooterScript}
          </ScriptText>
        </div>

        <div
          style={{
            fontSize: 'calc(11 * var(--u))',
            color: 'var(--muted)',
            lineHeight: 1.4,
          }}
        >
          {faqData.faqFooterText}
        </div>
      </div>
    </div>
  );
}
