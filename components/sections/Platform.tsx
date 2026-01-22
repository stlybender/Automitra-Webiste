'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CTAModal } from '@/components/ui/CTAModal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              More Than Just
            </h2>
            <div className="inline-block bg-orange-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg -rotate-1">
              <span className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
                Call Answering
              </span>
            </div>
            <p className="text-xl text-gray-900 mt-8 max-w-3xl mx-auto font-bold">
              Behind the scenes, AutoMitra includes capabilities that allow it to scale across industries — while keeping hospitality as the starting point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {modules.map((module, idx) => (
              <div key={idx} className={`${module.color} p-8 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-lg halftone-bg-light`}>
                <div className="w-20 h-20 mb-6 bg-white border-4 border-black flex items-center justify-center text-4xl">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-wide">
                  {module.title}
                </h3>
                <p className="text-black font-bold leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
                Book a Demo
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

