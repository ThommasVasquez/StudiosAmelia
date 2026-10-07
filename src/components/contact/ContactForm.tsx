'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { COPY } from '@/content/copy';
import { getBookingUrl } from '@/lib/booking';

export default function ContactForm() {
  const formCopy = COPY.contact.form;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Beauty',
    message: '',
    _honey: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
      } else {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'Beauty',
          message: '',
          _honey: '',
        });
      }
    } catch {
      setStatus('error');
      setErrorMessage('Could not send message. Please call or email directly.');
    }
  };

  return (
    <div
      className="contact-form-block"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingInline: 'calc(24 * var(--u))',
      }}
    >
      <div
        style={{
          fontSize: 'calc(13 * var(--u))',
          letterSpacing: '0.28em',
          fontWeight: 600,
          color: 'var(--ink)',
          textTransform: 'uppercase',
          marginBottom: 'calc(4 * var(--u))',
        }}
      >
        {formCopy.title}
      </div>

      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: 'calc(11.5 * var(--u))',
          color: 'var(--muted)',
          marginBottom: 'calc(16 * var(--u))',
        }}
      >
        {formCopy.subtitle}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'calc(10 * var(--u))' }}>
        {/* Honeypot field for anti-spam */}
        <input
          type="text"
          name="_honey"
          value={formData._honey}
          onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Full Name */}
        <input
          type="text"
          required
          placeholder={formCopy.fields.name}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-input"
          style={{
            height: 'calc(34 * var(--u))',
            width: '100%',
            backgroundColor: '#FBF8F6',
            border: '1px solid var(--tan-line)',
            padding: '0 calc(12 * var(--u))',
            fontSize: 'calc(10.5 * var(--u))',
            color: 'var(--text)',
            outline: 'none',
          }}
        />

        {/* Email */}
        <input
          type="email"
          required
          placeholder={formCopy.fields.email}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="form-input"
          style={{
            height: 'calc(34 * var(--u))',
            width: '100%',
            backgroundColor: '#FBF8F6',
            border: '1px solid var(--tan-line)',
            padding: '0 calc(12 * var(--u))',
            fontSize: 'calc(10.5 * var(--u))',
            color: 'var(--text)',
            outline: 'none',
          }}
        />

        {/* Phone */}
        <input
          type="tel"
          required
          placeholder={formCopy.fields.phone}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="form-input"
          style={{
            height: 'calc(34 * var(--u))',
            width: '100%',
            backgroundColor: '#FBF8F6',
            border: '1px solid var(--tan-line)',
            padding: '0 calc(12 * var(--u))',
            fontSize: 'calc(10.5 * var(--u))',
            color: 'var(--text)',
            outline: 'none',
          }}
        />

        {/* Interest Select */}
        <div style={{ position: 'relative' }}>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="form-input"
            style={{
              height: 'calc(34 * var(--u))',
              width: '100%',
              backgroundColor: '#FBF8F6',
              border: '1px solid var(--tan-line)',
              padding: '0 calc(28 * var(--u)) 0 calc(12 * var(--u))',
              fontSize: 'calc(10.5 * var(--u))',
              color: 'var(--text)',
              outline: 'none',
              appearance: 'none',
              cursor: 'pointer',
            }}
          >
            {formCopy.interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span
            style={{
              position: 'absolute',
              right: 'calc(12 * var(--u))',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              fontSize: 'calc(9 * var(--u))',
              color: 'var(--muted)',
            }}
          >
            ▼
          </span>
        </div>

        {/* Message */}
        <textarea
          required
          rows={3}
          placeholder={formCopy.fields.message}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="form-input"
          style={{
            height: 'calc(83 * var(--u))',
            width: '100%',
            backgroundColor: '#FBF8F6',
            border: '1px solid var(--tan-line)',
            padding: 'calc(8 * var(--u)) calc(12 * var(--u))',
            fontSize: 'calc(10.5 * var(--u))',
            color: 'var(--text)',
            outline: 'none',
            resize: 'none',
          }}
        />

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="site-button btn-solid-black"
            style={{
              width: 'calc(240 * var(--u))',
              height: 'calc(36 * var(--u))',
              marginTop: 'calc(4 * var(--u))',
            }}
          >
            {status === 'loading' ? 'SENDING...' : formCopy.submit}
          </button>
        </div>

        {/* Status Feedback */}
        {status === 'success' && (
          <div style={{ fontSize: 'calc(11 * var(--u))', color: '#1B5E20', marginTop: '6px' }}>
            ✓ Thank you! Your message has been sent.
          </div>
        )}
        {status === 'error' && (
          <div style={{ fontSize: 'calc(11 * var(--u))', color: '#B71C1C', marginTop: '6px' }}>
            {errorMessage}
          </div>
        )}

        {/* Direct Booking Links Section */}
        <div style={{ marginTop: 'calc(14 * var(--u))' }}>
          <div
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'calc(11.5 * var(--u))',
              color: 'var(--muted)',
              marginBottom: 'calc(8 * var(--u))',
            }}
          >
            {formCopy.directBookingText}
          </div>

          <div
            className="direct-booking-row"
            style={{
              display: 'flex',
              gap: 'calc(8 * var(--u))',
            }}
          >
            {formCopy.directButtons.map((btn, idx) => (
              <a
                key={idx}
                href={getBookingUrl(btn.service)}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button btn-solid-tan"
                style={{
                  height: 'calc(36 * var(--u))',
                  fontSize: 'calc(9 * var(--u))',
                  padding: '0 calc(10 * var(--u))',
                  flex: 1,
                  textAlign: 'center',
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
