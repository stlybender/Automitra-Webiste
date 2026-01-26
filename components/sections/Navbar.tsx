'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
              {/* Mobile menu button */}
              <button
                className="md:hidden text-black p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              <a 
                href="https://platform.automitra.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <Button variant="primary" size="sm">
                  Launch your AI team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white border-l-4 border-black z-50 md:hidden overflow-y-auto">
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-black p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <Image
                    src="/am-logo.webp"
                    alt="AutoMitra Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-black text-black uppercase tracking-tight">
                  AutoMitra AI
                </span>
              </Link>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {/* AI Team Section */}
                <div className="border-b-2 border-gray-200 pb-2 mb-2">
                  <p className="text-xs font-black text-gray-500 uppercase tracking-wide mb-2 px-4">AI Team</p>
                  {aiTeamLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block px-4 py-3 text-black hover:bg-accent-500 transition-colors font-black uppercase tracking-wide text-sm border-l-4 border-transparent hover:border-black"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Main Links */}
                <Link
                  href="/demo"
                  className="block px-4 py-3 text-black hover:bg-accent-500 transition-colors font-black uppercase tracking-wide text-sm border-l-4 border-transparent hover:border-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demo
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-3 text-black hover:bg-accent-500 transition-colors font-black uppercase tracking-wide text-sm border-l-4 border-transparent hover:border-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <a
                  href="#platform"
                  className="block px-4 py-3 text-black hover:bg-accent-500 transition-colors font-black uppercase tracking-wide text-sm border-l-4 border-transparent hover:border-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Platform
                </a>
                <a
                  href="#faq"
                  className="block px-4 py-3 text-black hover:bg-accent-500 transition-colors font-black uppercase tracking-wide text-sm border-l-4 border-transparent hover:border-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
              </nav>

              {/* CTA Button */}
              <div className="mt-8 px-4">
                <a 
                  href="https://platform.automitra.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="primary" size="md" className="w-full">
                    Launch your AI team
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

