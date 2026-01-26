'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { aiRoles } from '@/data/aiRoles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AITeamPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <main className="min-h-screen bg-cream-500 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={heroRef} className="text-center mb-20 relative pt-8 pb-16 px-4">
          {/* Geometric background shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-10 w-96 h-96 bg-primary-500 rounded-full opacity-15 blur-3xl"></div>
            <div className="absolute top-20 right-10 w-80 h-80 bg-accent-500 opacity-15 blur-3xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-magenta-500 opacity-15 rotate-45 blur-3xl"></div>
          </div>

          <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none"></div>
          <div className={`relative z-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 mb-8 uppercase tracking-tight leading-tight py-4">
              Meet the{' '}
              <span className="inline-block bg-accent-500 text-black px-6 sm:px-8 py-3 sm:py-4 -rotate-2 border-4 border-black comic-shadow-box mx-2">
                AI Team
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-900 font-bold max-w-3xl mx-auto leading-tight mt-6">
              Role-based AI employees designed specifically for hospitality — answering calls, managing enquiries, and supporting your team 24/7.
            </p>
          </div>

          {/* Action word decoration */}
          <div className="absolute -bottom-4 right-4 sm:right-8 transform rotate-12 z-20 hidden lg:block">
            <div className="text-4xl xl:text-5xl font-black text-white" style={{
              WebkitTextStroke: '3px black',
              paintOrder: 'stroke fill',
              filter: 'drop-shadow(4px 4px 0px black)'
            }}>
              MEET THEM!
            </div>
          </div>

          {/* Comic puff clouds */}
          <div className="absolute top-4 left-4 w-16 h-16 opacity-40 hidden lg:block">
            <svg viewBox="0 0 100 100" className="fill-white stroke-black" strokeWidth="3">
              <circle cx="30" cy="50" r="20"/>
              <circle cx="50" cy="45" r="25"/>
              <circle cx="70" cy="50" r="20"/>
            </svg>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {aiRoles.map((role, idx) => (
            <Link key={role.slug} href={`/ai-team/${role.slug}`}>
              <div 
                className={`${role.color} rounded-xl p-8 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-700 hover:-translate-y-2 hover:scale-105 h-full flex flex-col halftone-bg-light cursor-pointer group ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-28 h-28 mx-auto mb-6 bg-white rounded-full border-4 border-black p-4 group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={role.icon} 
                    alt={role.name}
                    width={96}
                    height={96}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-black mb-5 text-center uppercase tracking-wide leading-tight">
                  {role.name}
                </h2>
                <p className="text-black font-bold leading-relaxed text-center flex-grow text-base sm:text-lg mb-6">
                  {role.shortDescription}
                </p>
                <div className="mt-auto text-center">
                  <span className="inline-block bg-black text-white px-6 py-3 font-black uppercase tracking-wide text-sm group-hover:bg-gray-900 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
