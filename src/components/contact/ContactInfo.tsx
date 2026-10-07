import React from 'react';
import IconCircle, { IconType } from '@/components/ui/IconCircle';
import { COPY } from '@/content/copy';

export default function ContactInfo() {
  const items = COPY.contact.info.items;

  const getIconName = (type: string): IconType => {
    switch (type) {
      case 'phone':
        return 'phone';
      case 'email':
        return 'email';
      case 'address':
        return 'pin';
      case 'hours':
        return 'clock';
      default:
        return 'pin';
    }
  };

  return (
    <div
      className="contact-info-block"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 'calc(26 * var(--u))',
        paddingRight: 'calc(20 * var(--u))',
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="anim-contact-info-row"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'calc(16 * var(--u))',
          }}
        >
          <IconCircle icon={getIconName(item.type)} size={46} />
          <div>
            <div
              style={{
                fontSize: 'calc(9.5 * var(--u))',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                marginBottom: 'calc(4 * var(--u))',
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize:
                  item.type === 'phone'
                    ? 'calc(17 * var(--u))'
                    : item.type === 'email'
                    ? 'calc(14 * var(--u))'
                    : 'calc(12 * var(--u))',
                fontWeight: item.type === 'phone' ? 500 : 400,
                color: 'var(--ink)',
                lineHeight: 1.35,
                whiteSpace: 'pre-line',
              }}
            >
              {item.type === 'phone' ? (
                <a href={`tel:${item.value.replace(/[^0-9]/g, '')}`}>{item.value}</a>
              ) : item.type === 'email' ? (
                <a href={`mailto:${item.value}`}>{item.value}</a>
              ) : (
                item.value
              )}
            </div>
            {item.note && (
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontSize: 'calc(11.5 * var(--u))',
                  color: 'var(--muted)',
                  marginTop: 'calc(3 * var(--u))',
                }}
              >
                {item.note}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
