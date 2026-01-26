'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface WorksWellWithProps {
  items: string[];
}

export function WorksWellWith({ items }: WorksWellWithProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase tracking-tight">
            Works Well With
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-primary-500 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 p-6 text-center halftone-bg-light rounded-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ 
                transitionDelay: `${idx * 100}ms`,
                transform: idx % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
              }}
            >
              <span className="text-black font-black uppercase tracking-wide text-base sm:text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
