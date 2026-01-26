'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface RoleCTAProps {
  title: string;
  description: string;
}

export function RoleCTA({ title, description }: RoleCTAProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-500 opacity-10 blur-3xl"></div>
      </div>

      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
          {title}
        </h2>
        <div className="inline-block bg-accent-500 text-black px-8 py-4 border-4 border-black comic-shadow-box -rotate-1 rounded-lg mb-8">
          <p className="text-xl sm:text-2xl font-bold max-w-2xl leading-tight">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
  );
}
