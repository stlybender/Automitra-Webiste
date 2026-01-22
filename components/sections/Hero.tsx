'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CTAModal } from '@/components/ui/CTAModal';
import Image from 'next/image';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream-500">
        {/* Bold geometric background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full opacity-20"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-accent-500 opacity-20" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-magenta-500 opacity-20 rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 text-balance leading-tight uppercase tracking-tight">
              <span className="text-black">
                Never Miss a
              </span>
              <br />
              <span className="inline-block bg-accent-500 text-black px-6 py-2 -rotate-2 border-4 border-black comic-shadow-lg mt-4">
                Booking Call Again
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-900 mb-8 leading-relaxed max-w-3xl mx-auto font-bold">
              AutoMitra is a human-like voice assistant for hotels, hostels, and homestays that answers enquiries, calls back missed calls, and follows up on WhatsApp — calmly, professionally, and automatically.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
                See a Live Call Demo
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
                Talk to Us
              </Button>
            </div>
          </div>

          {/* Pop art character cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {[
              { name: 'Voice Assistant', role: 'Answers Enquiries', image: '/characters/autodial.svg', color: 'bg-primary-500' },
              { name: 'Call Back Agent', role: 'Missed Call Recovery', image: '/characters/receptionist.svg', color: 'bg-orange-500' },
              { name: 'WhatsApp Helper', role: 'Follow-Up & Booking', image: '/characters/whatsapp.svg', color: 'bg-magenta-500' },
            ].map((agent, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className={`${agent.color} rounded-lg p-8 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 halftone-bg-light`}>
                  <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full border-4 border-black p-4">
                    <Image 
                      src={agent.image} 
                      alt={agent.name}
                      width={128}
                      height={128}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-black text-white px-4 py-3 -mx-4 -mb-4 border-t-4 border-black">
                    <h3 className="font-black text-xl text-center uppercase tracking-wide">{agent.name}</h3>
                    <p className="text-sm text-center font-bold mt-1 text-accent-500 uppercase tracking-wide">{agent.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

