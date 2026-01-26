import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-cream-500 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content Section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Pricing That Fits Your Property, Not a Template
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed mb-8">
            Every hospitality business operates differently. AutoMitra pricing is tailored based on call volume, use cases, and how you want automation to support your team.
          </p>

          {/* Supporting paragraph */}
          <div className="bg-white p-6 md:p-10 border-4 border-black comic-shadow-lg mb-12">
            <p className="text-lg md:text-xl text-gray-900 font-bold leading-relaxed">
              We work closely with hotels, hostels, and homestays that care deeply about guest experience and responsible automation.
              If you are evaluating AutoMitra, we would like to understand your setup before suggesting a plan.
            </p>
          </div>

          {/* CTA Line */}
          <p className="text-xl text-gray-900 font-bold mb-6">
            Talk to the team to understand your custom pricing.
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Talk to Us
              </Button>
            </Link>
          </div>

          {/* Line below CTA */}
          <p className="text-base text-gray-700 font-bold mb-16">
            Currently onboarding select hospitality partners.
          </p>

          {/* Footer transition line */}
          <div className="mt-20 pt-12 border-t-4 border-gray-300">
            <p className="text-lg md:text-xl text-gray-900 font-bold italic">
              AutoMitra AI is designed for teams that value trust, responsiveness, and long-term guest relationships.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
