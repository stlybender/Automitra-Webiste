const testimonials = [
  {
    headline: 'Inbound calls are finally getting the attention they deserve.',
    author: 'Hospitality Operator',
  },
];

export function SocialProof() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Quietly Doing
          </h2>
          <div className="inline-block bg-accent-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg rotate-1 rounded-lg">
            <span className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
              The Work
            </span>
          </div>
          <p className="text-xl text-gray-900 mt-10 max-w-3xl mx-auto font-bold">
            Currently onboarding early hospitality partners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 text-center border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl">
              <div className="mb-8">
                <div className="w-20 h-20 bg-primary-500 border-4 border-black mx-auto flex items-center justify-center rounded-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <p className="text-xl font-black text-gray-900 mb-5 uppercase tracking-wide leading-relaxed">
                {testimonial.headline}
              </p>
              <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="bg-primary-500 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 px-8 py-6 halftone-bg-light rounded-lg">
            <div className="text-5xl font-black text-black">1000s</div>
            <div className="text-sm font-black text-black mt-3 uppercase tracking-wide">Calls Handled</div>
          </div>
          <div className="bg-magenta-500 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 px-8 py-6 halftone-bg-light rounded-lg">
            <div className="text-5xl font-black text-white">High</div>
            <div className="text-sm font-black text-white mt-3 uppercase tracking-wide">Response Rates</div>
          </div>
          <div className="bg-lime-500 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 px-8 py-6 halftone-bg-light rounded-lg">
            <div className="text-5xl font-black text-black">Fast</div>
            <div className="text-sm font-black text-black mt-3 uppercase tracking-wide">Enquiry Handling</div>
          </div>
          <div className="bg-orange-500 border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 px-8 py-6 halftone-bg-light rounded-lg">
            <div className="text-5xl font-black text-black">Less</div>
            <div className="text-sm font-black text-black mt-3 uppercase tracking-wide">Staff Pressure</div>
          </div>
        </div>
      </div>
    </section>
  );
}

