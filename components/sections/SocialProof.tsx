const testimonials = [
  {
    headline: 'Our speed-to-lead dropped from hours to minutes.',
    author: 'SaaS Startup Founder',
  },
  {
    headline: 'We now reach leads we used to ignore.',
    author: 'Digital Marketing Agency',
  },
  {
    headline: 'Inbound calls are finally getting the attention they deserve.',
    author: 'Real Estate Team',
  },
  {
    headline: 'Our reps talk only to qualified prospects.',
    author: 'B2B Sales Director',
  },
];

export function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Your top caller.
          </h2>
          <div className="inline-block bg-accent-500 text-black px-8 py-4 border-4 border-black comic-shadow-lg rotate-1">
            <span className="text-5xl sm:text-6xl font-black uppercase tracking-tight">
              Every single day.
            </span>
          </div>
          <p className="text-xl text-gray-900 mt-8 max-w-3xl mx-auto font-bold">
            AutoMitra AI never forgets a follow-up, never misses a call, and never gets tired.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 text-center border-4 border-black comic-shadow hover:comic-shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-lg">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-500 border-4 border-black mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <p className="text-xl font-black text-gray-900 mb-4 uppercase tracking-wide">
                {testimonial.headline}
              </p>
              <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-center">
          <div className="bg-primary-500 border-4 border-black comic-shadow px-8 py-6 halftone-bg-light">
            <div className="text-4xl font-black text-black">10K+</div>
            <div className="text-sm font-black text-black mt-2 uppercase tracking-wide">Calls Handled</div>
          </div>
          <div className="bg-magenta-500 border-4 border-black comic-shadow px-8 py-6 halftone-bg-light">
            <div className="text-4xl font-black text-white">95%</div>
            <div className="text-sm font-black text-white mt-2 uppercase tracking-wide">Response Rate</div>
          </div>
          <div className="bg-lime-500 border-4 border-black comic-shadow px-8 py-6 halftone-bg-light">
            <div className="text-4xl font-black text-black">3x</div>
            <div className="text-sm font-black text-black mt-2 uppercase tracking-wide">Pipeline Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}

