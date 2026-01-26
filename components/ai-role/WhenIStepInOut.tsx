'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface WhenIStepInOutProps {
  stepInBullets: string[];
  stepBackBullets: string[];
  closingLine?: string;
}

export function WhenIStepInOut({ stepInBullets, stepBackBullets, closingLine }: WhenIStepInOutProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(0,0,0,0.3) 15px, rgba(0,0,0,0.3) 30px)'
      }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase tracking-tight">
            When I Step In and When I Step Back?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
          {/* Step In */}
          <div className={`bg-lime-500 border-4 border-black comic-shadow-lg p-8 halftone-bg-light rounded-lg transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <span className="text-lime-500 font-black text-2xl">✓</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-wide leading-tight">
                I step in when:
              </h3>
            </div>
            <ul className="space-y-4">
              {stepInBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-black font-black text-2xl mr-3 leading-none">•</span>
                  <span className="text-black font-bold text-base sm:text-lg leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step Back */}
          <div className={`bg-orange-500 border-4 border-black comic-shadow-lg p-8 halftone-bg-light rounded-lg transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <span className="text-orange-500 font-black text-2xl">←</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-wide leading-tight">
                I step back when:
              </h3>
            </div>
            <ul className="space-y-4">
              {stepBackBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-black font-black text-2xl mr-3 leading-none">•</span>
                  <span className="text-black font-bold text-base sm:text-lg leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action words */}
          <div className="absolute top-4 right-8 transform rotate-12 z-20 hidden lg:block">
            <div className="text-4xl font-black text-white" style={{
              WebkitTextStroke: '3px black',
              paintOrder: 'stroke fill',
              filter: 'drop-shadow(4px 4px 0px black)'
            }}>
              GO!
            </div>
          </div>
          <div className="absolute bottom-4 left-8 transform -rotate-12 z-20 hidden lg:block">
            <div className="text-4xl font-black text-white" style={{
              WebkitTextStroke: '3px black',
              paintOrder: 'stroke fill',
              filter: 'drop-shadow(4px 4px 0px black)'
            }}>
              PAUSE!
            </div>
          </div>

          {/* Comic puff clouds */}
          <div className="absolute top-4 left-4 w-16 h-16 opacity-30 hidden lg:block">
            <svg viewBox="0 0 100 100" className="fill-white stroke-black" strokeWidth="3">
              <circle cx="30" cy="50" r="20"/>
              <circle cx="50" cy="45" r="25"/>
              <circle cx="70" cy="50" r="20"/>
            </svg>
          </div>
        </div>
        {closingLine && (
          <p className={`text-lg sm:text-xl text-gray-900 font-black text-center mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            {closingLine}
          </p>
        )}
      </div>
    </section>
  );
}
