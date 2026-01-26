'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const agents = [
  {
    name: 'Calm, Polite Conversations',
    description: 'AutoMitra speaks naturally and politely, making every guest feel welcomed and valued.',
    image: '/characters/autodial.svg',
    color: 'bg-primary-500',
  },
  {
    name: 'One Question at a Time',
    description: 'Never rushed. AutoMitra takes its time, asking one question at a time for clarity.',
    image: '/characters/receptionist.svg',
    color: 'bg-lime-500',
  },
  {
    name: 'Respects Silence & Hesitation',
    description: 'Understands when callers need a moment to think and responds with patience.',
    image: '/characters/whatsapp.svg',
    color: 'bg-magenta-500',
  },
  {
    name: 'Knows When to Hand Over',
    description: 'Recognizes complex situations and seamlessly transfers to a human when needed.',
    image: '/characters/router.svg',
    color: 'bg-orange-500',
  },
  {
    name: 'No Pressure, No Salesy Tone',
    description: 'Guests should feel like they spoke to a trained front-desk assistant — not a bot.',
    image: '/characters/knowledge.svg',
    color: 'bg-purple-500',
  },
  {
    name: 'Comfort & Trust First',
    description: 'While most systems focus on speed, AutoMitra focuses on building comfort and trust.',
    image: '/characters/onboarding.svg',
    color: 'bg-accent-500',
  },
];

export function Agents() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Most systems focus on speed.
          </h2>
          <div className="inline-block bg-primary-500 text-black px-4 sm:px-8 py-2 sm:py-4 border-4 border-black comic-shadow-box -rotate-1 rounded-lg">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              AutoMitra focuses on trust.
            </span>
          </div>
          <p className="text-xl text-gray-900 mt-10 max-w-3xl mx-auto font-black">
            Designed to Feel Human. Calm, Patient & Respectful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`${agent.color} rounded-xl p-6 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 h-full flex flex-col halftone-bg-light`}>
                <div className="w-28 h-28 mb-6 mx-auto bg-white rounded-full border-4 border-black p-4">
                  <Image 
                    src={agent.image} 
                    alt={agent.name}
                    width={112}
                    height={112}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 text-center uppercase tracking-wide">
                  {agent.name}
                </h3>
                <p className="text-black font-bold leading-relaxed text-center flex-grow text-lg">
                  {agent.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

