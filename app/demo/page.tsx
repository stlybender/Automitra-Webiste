'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const caseStudies = [
  {
    headline: 'Inbound Booking Calls Finally Stopped Going Unanswered',
    testimonial: 'AutoMitra started handling calls during peak check-in hours when our front desk was overwhelmed. Guests now get responses instantly, and we see fewer dropped enquiries.',
    name: 'Operations Head',
    propertyType: 'Mid-sized City Hotel',
  },
  {
    headline: 'After-Hours Enquiries No Longer Wait Until Morning',
    testimonial: 'We used to miss late-night calls completely. AutoMitra now answers politely, shares details on WhatsApp, and flags serious enquiries for our team the next day.',
    name: 'Property Manager',
    propertyType: 'Boutique Homestay Group',
  },
  {
    headline: 'Our Front Desk Finally Has Breathing Room',
    testimonial: 'Instead of juggling phones and guests at the counter, our staff can now focus on in-person service. AutoMitra handles the calls quietly in the background.',
    name: 'General Manager',
    propertyType: 'Hospitality Chain',
  },
  {
    headline: 'Guest Communication Feels More Consistent Now',
    testimonial: 'WhatsApp confirmations and follow-ups are no longer manual. Guests get clear information instantly, and our response quality feels more uniform.',
    name: 'Revenue Manager',
    propertyType: 'Resort Property',
  },
];

export default function DemoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <main className="min-h-screen bg-cream-500">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden halftone-bg-light">
        {/* Geometric background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-accent-500 opacity-15 blur-3xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-magenta-500 opacity-15 rotate-45 blur-3xl"></div>
        </div>

        <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight leading-tight">
            See How AutoMitra Handles{' '}
            <span className="inline-block bg-accent-500 text-black px-3 sm:px-6 py-2 sm:py-3 -rotate-2 border-4 border-black comic-shadow-box">
              Real Guest Calls
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-900 mb-4 font-bold max-w-3xl mx-auto">
            Explore how AutoMitra answers booking enquiries, manages missed calls and follows up on WhatsApp calmly and professionally just like a trained front-desk assistant.
          </p>
          <p className="text-lg text-gray-900 mb-8 font-bold max-w-2xl mx-auto">
            Built for hotels, hostels, and homestays that cannot afford to miss enquiries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Button variant="primary" size="lg" onClick={() => {
              const caseStudiesSection = document.querySelector('#case-studies');
              caseStudiesSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              See a Live Call Demo
            </Button>
          </div>
          <p className="text-base text-gray-700 font-bold italic">
            No setup required. Real hospitality scenarios only.
          </p>
        </div>

        {/* Action word decoration */}
        <div className="absolute bottom-8 right-8 transform rotate-12 z-20 hidden lg:block">
          <div className="text-5xl font-black text-white" style={{
            WebkitTextStroke: '3px black',
            paintOrder: 'stroke fill',
            filter: 'drop-shadow(4px 4px 0px black)'
          }}>
            WATCH!
          </div>
        </div>

        {/* Comic puff clouds */}
        <div className="absolute top-4 left-4 w-20 h-20 opacity-40 hidden lg:block">
          <svg viewBox="0 0 100 100" className="fill-white stroke-black" strokeWidth="3">
            <circle cx="30" cy="50" r="20"/>
            <circle cx="50" cy="45" r="25"/>
            <circle cx="70" cy="50" r="20"/>
          </svg>
        </div>
      </section>

      {/* Case Studies Carousel Section */}
      <section ref={carouselRef} id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-b-4 border-black relative overflow-hidden">
        {/* Speed lines background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          background: 'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 2deg, rgba(0,0,0,0.3) 2deg, rgba(0,0,0,0.3) 4deg)'
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              How Hospitality Teams Use AutoMitra
            </h2>
            <div className="inline-block bg-accent-500 text-black px-3 sm:px-6 py-1.5 sm:py-2 border-4 border-black comic-shadow-box -rotate-1 rounded-lg mt-2">
              <span className="text-base sm:text-lg font-black uppercase tracking-wide">
                Real Stories
              </span>
            </div>
            <p className="text-lg text-gray-900 font-bold mt-4">
              Real outcomes from properties handling frequent guest enquiries.
            </p>
          </div>

          {/* Carousel */}
          <div className={`relative transition-all duration-700 ${carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-primary-500 border-4 border-black comic-shadow-lg p-8 md:p-12 halftone-bg-light min-h-[400px] flex flex-col justify-between rounded-lg relative overflow-hidden">
              {/* Diagonal stripes for visual interest */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(0,0,0,0.3) 15px, rgba(0,0,0,0.3) 30px)'
              }}></div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
                  {caseStudies[currentSlide].headline}
                </h3>
                <blockquote className="text-lg text-black font-bold leading-relaxed mb-8 italic">
                  &ldquo;{caseStudies[currentSlide].testimonial}&rdquo;
                </blockquote>
              </div>
              <div className="border-t-4 border-black pt-6 relative z-10">
                <p className="text-black font-black text-lg uppercase tracking-wide">
                  {caseStudies[currentSlide].name}
                </p>
                <p className="text-black font-bold">
                  {caseStudies[currentSlide].propertyType}
                </p>
              </div>

              {/* Action word */}
              <div className="absolute top-4 right-4 transform rotate-12 z-20 hidden md:block">
                <div className="text-3xl font-black text-white" style={{
                  WebkitTextStroke: '2px black',
                  paintOrder: 'stroke fill',
                  filter: 'drop-shadow(3px 3px 0px black)'
                }}>
                  WOW!
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-0 sm:-translate-x-4 md:-translate-x-12 bg-accent-500 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:scale-110 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-0 sm:translate-x-4 md:translate-x-12 bg-accent-500 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:scale-110 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 border-2 border-black transition-all duration-300 ${
                    idx === currentSlide ? 'bg-accent-500' : 'bg-white'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loom Video Placeholder Section */}
      <section ref={videoRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ${videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            A Walkthrough From the Team
          </h2>
          <p className="text-lg text-gray-900 mb-8 font-bold max-w-2xl mx-auto">
            In this video, we will walk you through how AutoMitra works, why it was built, and how hospitality teams are using it today.
          </p>
          
          {/* Video Placeholder */}
          <div className={`bg-white border-4 border-black comic-shadow-lg p-12 md:p-20 halftone-bg-light rounded-lg relative overflow-hidden transition-all duration-700 ${videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            {/* Comic puff clouds */}
            <div className="absolute top-4 left-4 w-16 h-16 opacity-30">
              <svg viewBox="0 0 100 100" className="fill-white stroke-black" strokeWidth="3">
                <circle cx="30" cy="50" r="20"/>
                <circle cx="50" cy="45" r="25"/>
                <circle cx="70" cy="50" r="20"/>
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 w-16 h-16 opacity-30">
              <svg viewBox="0 0 100 100" className="fill-white stroke-black" strokeWidth="3">
                <circle cx="30" cy="50" r="20"/>
                <circle cx="50" cy="45" r="25"/>
                <circle cx="70" cy="50" r="20"/>
              </svg>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 relative z-10">
              <div className="w-20 h-20 bg-accent-500 border-4 border-black flex items-center justify-center comic-shadow rounded">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-wide">
                Video coming soon
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-black relative overflow-hidden">
        {/* Geometric background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-500 opacity-10 blur-3xl"></div>
        </div>

        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Want to See If AutoMitra Fits Your Property
          </h2>
          <div className="inline-block bg-accent-500 text-black px-4 sm:px-8 py-2 sm:py-4 border-4 border-black comic-shadow-box -rotate-1 rounded-lg mb-8">
            <p className="text-lg sm:text-xl font-bold">
              Let&apos;s talk about your specific needs
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
