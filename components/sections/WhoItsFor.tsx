'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const idealFor = [
  { name: 'Hotels', icon: '🏨', color: 'bg-primary-500' },
  { name: 'Hostels', icon: '🛏️', color: 'bg-orange-500' },
  { name: 'Boutique Homestays', icon: '🏡', color: 'bg-magenta-500' },
];

const useCases = [
  { name: 'Booking Enquiries', icon: '📅' },
  { name: 'Missed Call Callbacks', icon: '📞' },
  { name: 'After-Hours Calls', icon: '🌙' },
  { name: 'WhatsApp Confirmations & Follow-ups', icon: '💬' },
];

export function WhoItsFor() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Perfect for
          </h2>
          <div className="inline-block bg-accent-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg rotate-1">
            <span className="text-5xl sm:text-6xl font-black uppercase tracking-tight">
              Hospitality Businesses
            </span>
          </div>
        </div>

        <div className="mb-16">
          <h3 className={`text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            AutoMitra is ideal for:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {idealFor.map((item, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`${item.color} p-8 text-center border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-lg halftone-bg-light`}>
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full border-4 border-black flex items-center justify-center text-4xl">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black text-black uppercase tracking-wide">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Common Use Cases:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
              >
                <div className="bg-cream-500 p-6 text-center border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-lg">
                  <div className="text-3xl mb-3">{useCase.icon}</div>
                  <p className="font-black text-black uppercase tracking-wide text-sm">
                    {useCase.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
