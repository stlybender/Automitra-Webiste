'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AIRole } from '@/data/aiRoles';

interface OtherRolesProps {
  roles: AIRole[];
}

export function OtherRoles({ roles }: OtherRolesProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase tracking-tight">
            Meet the Rest of the AI Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, idx) => (
            <Link key={role.slug} href={`/ai-team/${role.slug}`}>
              <div 
                className={`${role.color} rounded-xl p-8 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 h-full flex flex-col halftone-bg-light cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-5 bg-white rounded-full border-4 border-black p-3 group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={role.icon} 
                    alt={role.name}
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-black mb-4 text-center uppercase tracking-wide leading-tight">
                  {role.name}
                </h3>
                <p className="text-black font-bold leading-relaxed text-center text-sm sm:text-base flex-grow">
                  {role.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
