'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const agents = [
  {
    name: 'AutoDial Sales Closer',
    description: 'Runs high-volume outbound campaigns, qualifies prospects, and hands over only sales-ready leads to your reps.',
    image: '/characters/autodial.svg',
    color: 'bg-primary-500',
  },
  {
    name: 'Smart Receptionist',
    description: 'Answers every inbound call in seconds, captures intent, books meetings, and routes urgent calls to the right person.',
    image: '/characters/receptionist.svg',
    color: 'bg-lime-500',
  },
  {
    name: 'WhatsApp Follow-Up Buddy',
    description: 'Continues the conversation on WhatsApp - answering questions, sharing details, and nudging prospects until they respond.',
    image: '/characters/whatsapp.svg',
    color: 'bg-magenta-500',
  },
  {
    name: 'Lead Router',
    description: 'Pulls leads from forms, CRMs, and landing pages, then assigns them to the right AI flow or human owner automatically.',
    image: '/characters/router.svg',
    color: 'bg-orange-500',
  },
  {
    name: 'Knowledge-Base Expert',
    description: 'Uses your FAQs, SOPs, and docs to answer detailed product and support questions without going off-script.',
    image: '/characters/knowledge.svg',
    color: 'bg-purple-500',
  },
  {
    name: 'Onboarding Concierge',
    description: 'Guides new clients through setup, captures requirements, and keeps them updated on campaign status.',
    image: '/characters/onboarding.svg',
    color: 'bg-accent-500',
  },
];

export function Agents() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-500">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Stop chasing.
          </h2>
          <div className="inline-block bg-primary-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg -rotate-1">
            <span className="text-5xl sm:text-6xl font-black uppercase tracking-tight">
              Meet AutoMitra AI.
            </span>
          </div>
          <p className="text-xl text-gray-900 mt-8 max-w-3xl mx-auto font-bold">
            Specialized AI agents that handle calls, WhatsApp, and lead workflows for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`${agent.color} rounded-lg p-6 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col halftone-bg-light`}>
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
                <p className="text-black font-bold leading-relaxed text-center flex-grow">
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

