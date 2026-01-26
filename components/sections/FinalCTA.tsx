'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function FinalCTA() {

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            See AutoMitra Handle
          </h2>
          <div className="inline-block bg-primary-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg -rotate-1 mb-12 rounded-lg">
            <span className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              A Real Booking Call
            </span>
          </div>
          
          <p className="text-xl text-gray-900 mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
            Experience how AutoMitra answers enquiries, handles missed calls, and follows up — just like a trained front-desk assistant would.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Book a Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
