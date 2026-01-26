const timeSlots = [
  {
    time: 'Step 1',
    title: 'GUESTS CALL YOUR PROPERTY',
    description: 'Inbound enquiries come in as usual — no change in your existing setup.',
    color: 'bg-lime-500',
    actionWord: 'RING!',
  },
  {
    time: 'Step 2',
    title: 'AUTOMITRA ANSWERS OR CALLS BACK POLITELY',
    description: 'If your staff is unavailable, AutoMitra responds calmly, captures intent, and reassures the caller.',
    color: 'bg-primary-500',
    actionWord: 'HELLO!',
  },
  {
    time: 'Step 3',
    title: 'DETAILS ARE SHARED ON WHATSAPP',
    description: 'Booking information, location, and next steps are sent automatically. If needed, the call is handed over to your team.',
    color: 'bg-accent-500',
    actionWord: 'SENT!',
  },
];

export function Timeline() {
  return (
    <section id="day" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-500 halftone-bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            How AutoMitra Helps
          </h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto font-bold">
            AutoMitra works quietly in the background — supporting your staff, not replacing them.
          </p>
        </div>

        {/* Comic book style grid */}
        <div className="bg-white border-8 border-black comic-shadow-lg p-6 md:p-8 rounded-lg">
          <div className="space-y-8">
            
            {timeSlots.map((slot, idx) => (
              <div key={idx}>
                {/* Comic panel */}
                <div className={`${slot.color} border-4 border-black comic-shadow relative overflow-hidden rounded-lg`}>
                  {/* Speed lines background for odd panels */}
                  {idx % 2 === 0 && (
                    <div className="absolute inset-0 opacity-20" style={{
                      background: 'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 2deg, rgba(0,0,0,0.3) 2deg, rgba(0,0,0,0.3) 4deg)'
                    }}></div>
                  )}
                  
                  {/* Diagonal stripes for even panels */}
                  {idx % 2 === 1 && (
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(0,0,0,0.3) 15px, rgba(0,0,0,0.3) 30px)'
                    }}></div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 relative z-10">
                    {/* Character placeholder - alternating sides */}
                    <div className={idx % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                      <div className="bg-white border-4 border-black h-64 flex items-center justify-center rounded-lg">
                        <div className="text-center p-4">
                          <div className="w-28 h-28 mx-auto mb-4 border-4 border-dashed border-gray-400 rounded-full flex items-center justify-center">
                            <svg className="w-14 h-14 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Character Placeholder</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col justify-center ${idx % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                      {/* Time badge */}
                      <div className="bg-white border-4 border-black px-6 py-3 inline-block comic-shadow-sm mb-5 w-fit rounded-lg">
                        <span className="font-black text-2xl uppercase tracking-wide">{slot.time}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase tracking-tight leading-tight">
                        {slot.title}
                      </h3>
                      
                      <p className="text-black font-bold leading-relaxed text-lg">
                        {slot.description}
                      </p>
                    </div>
                  </div>

                  {/* Action word */}
                  <div className={`absolute ${idx % 2 === 0 ? 'top-4 right-4 sm:right-8' : 'bottom-4 left-4 sm:left-8'} transform ${idx % 2 === 0 ? 'rotate-12' : '-rotate-12'} z-20`}>
                    <div className="text-2xl sm:text-4xl md:text-6xl font-black text-white" style={{
                      WebkitTextStroke: '2px black',
                      paintOrder: 'stroke fill',
                      filter: 'drop-shadow(3px 3px 0px black)'
                    }}>
                      {slot.actionWord}
                    </div>
                  </div>

                  {/* Comic puff clouds */}
                  <div className={`absolute ${idx % 2 === 0 ? 'bottom-4 left-4' : 'top-4 right-4'} w-16 h-16 opacity-50`}>
                    <svg viewBox="0 0 100 100" className="fill-white stroke-black" strokeWidth="3">
                      <circle cx="30" cy="50" r="20"/>
                      <circle cx="50" cy="45" r="25"/>
                      <circle cx="70" cy="50" r="20"/>
                    </svg>
                  </div>
                </div>

                {/* Arrow connector between panels */}
                {idx < timeSlots.length - 1 && (
                  <div className="flex justify-center py-4">
                    <svg className="w-8 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* End banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black text-accent-500 px-6 sm:px-12 py-4 sm:py-6 border-4 border-accent-500 comic-shadow-box -rotate-1 rounded-lg">
            <p className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-wide">CALM • PROFESSIONAL • AUTOMATIC</p>
          </div>
        </div>
      </div>
    </section>
  );
}

