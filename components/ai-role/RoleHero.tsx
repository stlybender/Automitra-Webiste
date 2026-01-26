'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface RoleHeroProps {
  headline: string;
  subHeadline: string;
  accentWord?: string;
}

export function RoleHero({ headline, subHeadline, accentWord }: RoleHeroProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cream-500 halftone-bg-light">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-accent-500 opacity-15 blur-3xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-magenta-500 opacity-15 rotate-45 blur-3xl"></div>
      </div>

      <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 uppercase tracking-tight leading-none">
          {headline}
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-900 mb-10 font-bold max-w-3xl mx-auto leading-tight">
          {subHeadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/demo">
            <Button variant="primary" size="lg">
              See a Live Call Demo
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Talk to Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Action word decoration */}
      {accentWord && (
        <div className="absolute bottom-8 right-8 transform rotate-12 z-20 hidden lg:block">
          <div className="text-5xl font-black text-white" style={{
            WebkitTextStroke: '3px black',
            paintOrder: 'stroke fill',
            filter: 'drop-shadow(4px 4px 0px black)'
          }}>
            {accentWord}
          </div>
        </div>
      )}
    </section>
  );
}
