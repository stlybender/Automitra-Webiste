'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your email capture service
    console.log('Email captured:', email);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border-4 border-black comic-shadow-lg p-8 max-w-md w-full animate-slide-up halftone-bg-light">
        <button
          onClick={onClose}
          className="float-right text-gray-900 hover:text-primary-500 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              Launch Your AI Calling Team
            </h3>
            <p className="text-gray-900 mb-6 font-bold">
              Get started with AutoMitra AI and transform your sales pipeline. Enter your email to schedule a demo.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 border-4 border-black mb-4 focus:border-primary-500 focus:outline-none transition-colors font-bold"
              />
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Get Started
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-lime-500 border-4 border-black flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-wide">Thank You!</h3>
            <p className="text-gray-900 font-bold">We&apos;ll be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

