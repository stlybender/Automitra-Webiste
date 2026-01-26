'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const painPoints = [
  {
    title: 'Booking enquiries are lost',
    description: 'Guests usually call when your team is busy — during check-ins, lunch hours, or after working hours.',
    icon: '📞',
    color: 'bg-orange-500',
  },
  {
    title: 'Guests move to the next property',
    description: 'When calls go unanswered, guests don\'t wait. They quickly move on to another option.',
    icon: '🏨',
    color: 'bg-accent-500',
  },
  {
    title: 'WhatsApp messages remain unread',
    description: 'Messages pile up while your team handles other tasks. Revenue quietly slips away.',
    icon: '💬',
    color: 'bg-primary-500',
  },
];

export function PainPoints() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Missed Calls = Lost Bookings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={`${point.color} p-8 text-center h-full border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 rounded-xl halftone-bg-light`}>
                <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full border-4 border-black flex items-center justify-center text-4xl">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-black text-black mb-5 uppercase tracking-wide">
                  {point.title}
                </h3>
                <p className="text-black font-bold leading-relaxed text-lg">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '450ms' }}>
          <div className="inline-block bg-magenta-500 text-white px-4 sm:px-8 py-4 sm:py-6 border-4 border-black comic-shadow-box rotate-1 max-w-3xl rounded-lg">
            <p className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wide leading-relaxed">
              Most properties don&apos;t lose business because of bad service — they lose it because no one was available to answer the call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

