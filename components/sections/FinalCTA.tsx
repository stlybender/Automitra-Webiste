'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CTAModal } from '@/components/ui/CTAModal';

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            See AutoMitra Handle
          </h2>
          <div className="inline-block bg-primary-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg -rotate-1 mb-8">
            <span className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
              A Real Booking Call
            </span>
          </div>
          
          <p className="text-xl text-gray-900 mb-12 max-w-2xl mx-auto font-bold">
            Experience how AutoMitra answers enquiries, handles missed calls, and follows up — just like a trained front-desk assistant would.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
              Book a Demo
            </Button>
            <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
              Talk to Us
            </Button>
          </div>
        </div>
      </section>

      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
