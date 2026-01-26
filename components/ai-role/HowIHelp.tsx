'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HowIHelpProps {
  bullets: string[];
  closingLine?: string;
}

export function HowIHelp({ bullets, closingLine }: HowIHelpProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            How I Help Your Property?
          </h2>
          <div className="inline-block bg-accent-500 text-black px-6 py-2 border-4 border-black comic-shadow-box -rotate-1 rounded-lg mt-4">
            <span className="text-xl font-black uppercase tracking-wide">
              Real Impact
            </span>
          </div>
        </div>
        <div className={`bg-white border-4 border-black comic-shadow-lg p-10 halftone-bg-light rounded-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          <ul className="space-y-5 mb-6">
            {bullets.map((bullet, idx) => (
              <li 
                key={idx} 
                className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <span className="text-accent-500 font-black text-3xl mr-4 leading-none">•</span>
                <span className="text-lg sm:text-xl text-gray-900 font-bold leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
          {closingLine && (
            <p className="text-lg sm:text-xl text-gray-900 font-black mt-8 pt-8 border-t-4 border-black">
              {closingLine}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
