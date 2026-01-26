'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-cream-500 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Talk to Us
          </h1>
          <p className="text-xl text-gray-900 font-bold max-w-2xl mx-auto">
            Have questions about AutoMitra? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you soon.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-lime-500 border-4 border-black comic-shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tight">Message Sent!</h2>
            <p className="text-black font-bold mb-6">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
            <Button variant="primary" onClick={() => setStatus('idle')}>
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border-4 border-black comic-shadow-lg p-8 halftone-bg-light">
            {/* Honeypot field - hidden from users */}
            <div style={{ position: 'absolute', left: '-9999px' }}>
              <label htmlFor="honeypot">Don&apos;t fill this out if you&apos;re human:</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-900 font-black uppercase tracking-wide mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:border-primary-500 focus:outline-none transition-colors font-bold"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-900 font-black uppercase tracking-wide mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:border-primary-500 focus:outline-none transition-colors font-bold"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-900 font-black uppercase tracking-wide mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-4 border-black focus:border-primary-500 focus:outline-none transition-colors font-bold"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-gray-900 font-black uppercase tracking-wide mb-2">
                  Company/Property
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-4 border-black focus:border-primary-500 focus:outline-none transition-colors font-bold"
                  placeholder="Your hotel or business name"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-900 font-black uppercase tracking-wide mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-4 border-black focus:border-primary-500 focus:outline-none transition-colors font-bold resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div className="bg-red-500 border-4 border-black p-4">
                  <p className="text-white font-black uppercase tracking-wide text-center">
                    {errorMessage}
                  </p>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
