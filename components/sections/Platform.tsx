'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const modules = [
  {
    title: 'AI Calling Engine',
    description: 'For inbound and outbound calls with human-like conversations.',
    icon: '📞',
    color: 'bg-primary-500',
  },
  {
    title: 'WhatsApp Assistant',
    description: 'For follow-ups and FAQs on the channel your guests actually use.',
    icon: '💬',
    color: 'bg-magenta-500',
  },
  {
    title: 'Knowledge Base Integration',
    description: 'Uses your SOPs so every conversation stays on-brand.',
    icon: '📚',
    color: 'bg-lime-500',
  },
  {
    title: 'Campaign & Conversation Visibility',
    description: 'See every call and conversation with full transparency.',
    icon: '📊',
    color: 'bg-orange-500',
  },
  {
    title: 'Human Override & Escalation',
    description: 'Seamless handover controls when human touch is needed.',
    icon: '👤',
    color: 'bg-purple-500',
  },
];

export function Platform() {

  return (
    <>
      <section id="platform" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              More Than Just
            </h2>
            <div className="inline-block bg-orange-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg -rotate-1 rounded-lg">
              <span className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Call Answering
              </span>
            </div>
            <p className="text-xl text-gray-900 mt-10 max-w-3xl mx-auto font-bold">
              Behind the scenes, AutoMitra includes capabilities that allow it to scale across industries — while keeping hospitality as the starting point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {modules.map((module, idx) => (
              <div key={idx} className={`${module.color} p-8 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 rounded-xl halftone-bg-light`}>
                <div className="w-20 h-20 mb-6 bg-white border-4 border-black flex items-center justify-center text-4xl rounded-lg">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-black text-black mb-5 uppercase tracking-wide">
                  {module.title}
                </h3>
                <p className="text-black font-bold leading-relaxed text-lg">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

