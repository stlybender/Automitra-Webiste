'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface WhatIDoProps {
  paragraphs: string[];
}

export function WhatIDo({ paragraphs }: WhatIDoProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Speed lines background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        background: 'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 2deg, rgba(0,0,0,0.3) 2deg, rgba(0,0,0,0.3) 4deg)'
      }}></div>

      <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase tracking-tight inline-block">
            What I Do?
          </h2>
        </div>
        <div className="space-y-6">
          {paragraphs.map((paragraph, idx) => (
            <p 
              key={idx} 
              className={`text-lg sm:text-xl text-gray-900 font-bold leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
