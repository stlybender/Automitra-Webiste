'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CTAModal } from '@/components/ui/CTAModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white border-b-4 border-black comic-shadow' : 'bg-cream-500'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-14 h-14 relative overflow-hidden flex items-center justify-center">
                  <Image
                    src="/automitra-logo.png"
                    alt="AutoMitra Logo"
                    width={80}
                    height={80}
                    className="object-contain scale-150"
                    priority
                  />
                </div>
                <span className="text-3xl font-black text-black uppercase tracking-tight">
                  AutoMitra AI
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#team" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                AI Team
              </a>
              <a href="#day" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                Day in Life
              </a>
              <a href="#platform" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                Platform
              </a>
              <a href="#faq" className="text-black hover:text-primary-500 transition-colors font-black uppercase tracking-wide text-sm">
                FAQ
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="primary" size="sm" onClick={() => setIsModalOpen(true)}>
                Launch AI Team
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

