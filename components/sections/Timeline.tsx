const timeSlots = [
  {
    time: '7:00 AM',
    title: 'LEADS FROM LAST NIGHT ARE ALREADY CALLED',
    description: "While you're grabbing coffee, AutoDial has already called leads that came in overnight, asked qualifying questions, and queued callbacks for your sales team.",
    color: 'bg-lime-500',
    actionWord: 'POW!',
  },
  {
    time: '11:00 AM',
    title: 'YOUR INBOUND CALLS NEVER RING OUT',
    description: "The Smart Receptionist is answering calls on the first ring, capturing intent, and booking meetings into your team's calendar.",
    color: 'bg-primary-500',
    actionWord: 'RING!',
  },
  {
    time: '2:00 PM',
    title: 'FOLLOW-UPS RUN ON AUTOPILOT',
    description: 'WhatsApp Follow-Up Buddy is checking in on demos, sending reminders, and sharing answers from your knowledge base - all without a rep typing a word.',
    color: 'bg-accent-500',
    actionWord: 'ZOOM!',
  },
  {
    time: '5:00 PM',
    title: 'YOU SEE THE FULL FUNNEL',
    description: 'Your dashboard shows every call, conversation, and outcome by campaign, industry, and client - so you know exactly where revenue is coming from.',
    color: 'bg-orange-500',
    actionWord: 'BOOM!',
  },
  {
    time: '11:00 PM',
    title: 'AUTOMITRA AI IS STILL WORKING',
    description: "While you switch off, AutoMitra AI continues answering queries, capturing leads, and feeding tomorrow's pipeline.",
    color: 'bg-magenta-500',
    actionWord: 'ZAP!',
  },
];

export function Timeline() {
  return (
    <section id="day" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            A day with AutoMitra AI
          </h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto font-bold">
            From first light to last call, your AI team never stops working.
          </p>
        </div>

        {/* Comic book style grid */}
        <div className="bg-white border-8 border-black comic-shadow-lg p-6 md:p-8">
          <div className="space-y-6">
            
            {timeSlots.map((slot, idx) => (
              <div key={idx}>
                {/* Comic panel */}
                <div className={`${slot.color} border-4 border-black comic-shadow relative overflow-hidden`}>
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
                      <div className="bg-white border-4 border-black h-64 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-24 h-24 mx-auto mb-3 border-4 border-dashed border-gray-400 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                      <div className="bg-white border-4 border-black px-6 py-3 inline-block comic-shadow-sm mb-4 w-fit">
                        <span className="font-black text-2xl uppercase tracking-wide">{slot.time}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-black mb-3 uppercase tracking-tight leading-tight">
                        {slot.title}
                      </h3>
                      
                      <p className="text-black font-bold leading-relaxed">
                        {slot.description}
                      </p>
                    </div>
                  </div>

                  {/* Action word */}
                  <div className={`absolute ${idx % 2 === 0 ? 'top-4 right-8' : 'bottom-4 left-8'} transform ${idx % 2 === 0 ? 'rotate-12' : '-rotate-12'} z-20`}>
                    <div className="text-4xl md:text-6xl font-black text-white" style={{
                      WebkitTextStroke: '3px black',
                      paintOrder: 'stroke fill',
                      filter: 'drop-shadow(4px 4px 0px black)'
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
        <div className="mt-12 text-center">
          <div className="inline-block bg-black text-accent-500 px-12 py-6 border-4 border-accent-500 comic-shadow-lg transform -rotate-1">
            <p className="text-2xl md:text-3xl font-black uppercase tracking-wide">24/7 • NON-STOP • ALWAYS ON</p>
          </div>
        </div>
      </div>
    </section>
  );
}

