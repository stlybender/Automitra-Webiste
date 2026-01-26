'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const safeguards = [
  { text: 'Clear opt-out mechanisms', icon: '✋' },
  { text: 'Consent-aware callbacks', icon: '✓' },
  { text: 'Region-specific calling rules', icon: '🌍' },
  { text: 'Human-in-the-loop escalation', icon: '👤' },
  { text: 'No aggressive or intrusive behavior', icon: '🤝' },
];

export function ResponsibleAI() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Built for Responsible
          </h2>
          <div className="inline-block bg-lime-500 text-black px-8 py-4 border-4 border-black comic-shadow-box rotate-1 rounded-lg">
            <span className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
              AI Adoption
            </span>
          </div>
          <p className="text-xl text-gray-900 mt-10 max-w-2xl mx-auto font-bold">
            AutoMitra is designed with safeguards at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 max-w-5xl mx-auto">
          {safeguards.map((safeguard, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="bg-white p-6 text-center border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 rounded-xl h-full">
                <div className="text-4xl mb-4">{safeguard.icon}</div>
                <p className="font-black text-black uppercase tracking-wide text-xs leading-relaxed">
                  {safeguard.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
          <div className="inline-block bg-black text-accent-500 px-12 py-6 border-4 border-accent-500 comic-shadow-box -rotate-1 rounded-lg">
            <p className="text-xl md:text-2xl font-black uppercase tracking-wide">
              Automation should help — not interrupt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
