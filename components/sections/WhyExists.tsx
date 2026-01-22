'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const principles = [
  { text: 'By behaving like a trained human assistant', icon: '🎓' },
  { text: 'By respecting consent and boundaries', icon: '🤝' },
  { text: 'By stepping back when automation isn\'t appropriate', icon: '👤' },
];

export function WhyExists() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-500">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Why AutoMitra
          </h2>
          <div className="inline-block bg-orange-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg -rotate-1">
            <span className="text-5xl sm:text-6xl font-black uppercase tracking-tight">
              Was Built
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-white p-8 md:p-12 border-4 border-black comic-shadow-lg mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed mb-6">
              Small and mid-sized businesses lose revenue every day due to missed calls — not because of lack of demand, but lack of availability.
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed">
              Existing bots often feel robotic and harm customer trust.
            </p>
          </div>

          <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <div className="inline-block bg-primary-500 text-black px-6 py-3 border-4 border-black comic-shadow">
              <h3 className="text-xl font-black uppercase tracking-wide">
                AutoMitra was built to solve this gap responsibly:
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="bg-white p-6 text-center border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-lg h-full">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <p className="font-black text-black uppercase tracking-wide text-sm">
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
            <div className="inline-block bg-magenta-500 text-white px-8 py-6 border-4 border-black comic-shadow-lg rotate-1 max-w-2xl">
              <p className="text-xl md:text-2xl font-black uppercase tracking-wide">
                Our goal is simple: help businesses stay responsive without compromising trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
