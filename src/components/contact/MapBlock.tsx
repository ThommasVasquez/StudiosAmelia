import React from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { COPY } from '@/content/copy';
import { SITE } from '@/lib/site';

export default function MapBlock() {
  const mapData = COPY.contact.mapFaq;

  return (
    <div
      className="contact-map-block"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 'calc(50 * var(--u))',
        paddingRight: 'calc(24 * var(--u))',
      }}
    >
      <Eyebrow style={{ marginBottom: 'calc(8 * var(--u))' }}>
        {mapData.mapEyebrow}
      </Eyebrow>

      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: 'calc(13 * var(--u))',
          color: 'var(--muted)',
          marginBottom: 'calc(14 * var(--u))',
        }}
      >
        {mapData.mapSubtitle}
      </div>

      {/* Styled Map Graphic with Pin & Label */}
      <a
        href={SITE.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="map-graphic"
        style={{
          width: 'calc(428 * var(--u))',
          height: 'calc(239 * var(--u))',
          border: '1px solid var(--tan-line)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 'calc(16 * var(--u))',
          display: 'block',
          backgroundImage: "url('/images/contact/map.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </a>

      {/* Get Directions Button */}
      <div>
        <Button
          variant="outline"
          href={SITE.mapsUrl}
          isExternal
          style={{
            width: 'calc(290 * var(--u))',
            height: 'calc(40 * var(--u))',
          }}
        >
          {mapData.getDirections}
        </Button>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .map-graphic {
            width: 100% !important;
            height: 240px !important;
          }
        }
      `}</style>
    </div>
  );
}
