import React from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/layout/CtaBand';

export const metadata = {
  title: 'Photography | Studios at Amelia',
  description: 'Professional photography services at Studios at Amelia. Coming soon.',
};

export default function PhotographyPage() {
  return (
    <main>
      <section
        style={{
          minHeight: 'calc(450 * var(--u))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '60px 24px',
          backgroundColor: 'var(--bg)',
        }}
      >
        <Eyebrow style={{ marginBottom: '16px' }}>PHOTOGRAPHY AT STUDIOS AT AMELIA</Eyebrow>

        <h1
          className="font-serif"
          style={{
            fontSize: 'calc(44 * var(--u))',
            color: 'var(--ink)',
            marginBottom: '16px',
            fontWeight: 400,
          }}
        >
          Photography Services
        </h1>

        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--sand)',
            border: '1px solid var(--tan-line)',
            padding: '12px 24px',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            fontWeight: 600,
            marginBottom: '28px',
          }}
        >
          TODO(cliente): Diseño y contenido de la página Photography pendiente de entrega.
        </div>

        <p
          style={{
            maxWidth: '520px',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--muted)',
            marginBottom: '32px',
          }}
        >
          Professional photoshoots, branding sessions, and event photography are conducted in our Amelia Island studio. Explore our other services while this page is finalized.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="solid-black" href="/beauty/">
            EXPLORE BEAUTY
          </Button>
          <Button variant="solid-tan" href="/about/">
            ABOUT THE STUDIO
          </Button>
        </div>
      </section>

      <CtaBand variant="about" />
    </main>
  );
}
