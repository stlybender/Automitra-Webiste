'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CTAModal } from '@/components/ui/CTAModal';

const modules = [
  {
    title: 'Lead Generation Portal',
    description: 'Upload lists, capture leads from forms and ads, and launch targeted call campaigns per industry.',
    icon: '🎯',
    color: 'bg-primary-500',
  },
  {
    title: 'AI Calling Engine',
    description: 'Run thousands of outbound and inbound calls with human-like conversations and clear dispositions.',
    icon: '📞',
    color: 'bg-magenta-500',
  },
  {
    title: 'WhatsApp AI Agent',
    description: 'Handle FAQs, quotes, and follow-ups on the channel your customers actually use.',
    icon: '💬',
    color: 'bg-lime-500',
  },
  {
    title: 'Knowledge-Base Brain',
    description: 'Plug in your FAQs, scripts, and SOPs so every conversation stays on-brand.',
    icon: '🧠',
    color: 'bg-orange-500',
  },
  {
    title: 'Client & Campaign Dashboard',
    description: 'Track performance by client, campaign, and channel with real-time analytics.',
    icon: '📊',
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
              Explore the platform
            </h2>
            <div className="inline-block bg-orange-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg -rotate-1">
              <span className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
                behind AutoMitra AI
              </span>
            </div>
            <p className="text-xl text-gray-900 mt-8 max-w-3xl mx-auto font-bold">
              One system for lead generation, AI calling, WhatsApp engagement, and multi-client management.
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
                Watch 3-min walkthrough
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
                Book sandbox demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

