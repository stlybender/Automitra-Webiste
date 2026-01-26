'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiTeamLinks = [
    { name: 'AI Team Hub', href: '/ai-team' },
    { name: 'Receptionist', href: '/ai-team/receptionist' },
    { name: 'Switchboard Operator', href: '/ai-team/switchboard-operator' },
    { name: 'Night Auditor', href: '/ai-team/night-auditor' },
    { name: 'Lead Generator', href: '/ai-team/lead-generator' },
    { name: 'Guest Relations Officer', href: '/ai-team/guest-relations-officer' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]' : 'bg-cream-500 border-b-2 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src="/am-logo.webp"
                    alt="AutoMitra Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-3xl font-black text-black uppercase tracking-tight">
                  AutoMitra AI
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {/* AI Team Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm flex items-center pb-2">
                  AI Team
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 pt-0">
                    <div className="bg-white border-4 border-black comic-shadow-lg z-50 overflow-hidden">
                      {aiTeamLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="block px-6 py-4 text-black hover:bg-accent-500 hover:translate-x-1 transition-all duration-200 font-black uppercase tracking-wide text-sm border-b-4 border-black last:border-b-0"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/demo" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                Demo
              </Link>
              <Link href="/pricing" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                Pricing
              </Link>
              <a href="#platform" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                Platform
              </a>
              <a href="#faq" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                FAQ
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://platform.automitra.ai" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm">
                  Launch your AI team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

