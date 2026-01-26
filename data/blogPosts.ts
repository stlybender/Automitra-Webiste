export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  dateISO: string;
  dateDisplay: string;
  featuredImage: string;
  contentParagraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Why Hospitality Is the First Industry AI Voice Should Fix",
    slug: "why-hospitality-is-the-first-industry-ai-voice-should-fix",
    category: "AI & Modern Work",
    dateISO: "2026-01-24",
    dateDisplay: "24th January 2026",
    featuredImage: "/blog/hospitality-ai.jpg",
    contentParagraphs: [
      "Hospitality does not have a demand problem.",
      "It has a response problem.",
      "Every day, hotels miss calls, delay replies, and lose bookings not because rooms are unavailable, but because teams are overwhelmed. A guest calls to ask about availability. Another messages on WhatsApp for a late check-in. Someone emails asking about group rates. All at the same time.",
      "The intent is there.",
      "The system is not.",
      "Hospitality is one of the few industries where revenue is decided in minutes. If a call goes unanswered, the guest does not wait. They move on.",
      "This is why AI voice systems make sense here before anywhere else.",
      "Not to replace staff.",
      "But to absorb chaos.",
      "Front desks are designed for human interaction, not volume spikes. When check-ins, check-outs, internal coordination, and guest calls collide, something breaks. Usually response time.",
      "AI voice works best when:",
      "Questions are repetitive",
      "Timing matters",
      "Human warmth still needs to be preserved",
      "Hospitality checks all three.",
      "A well-designed AI receptionist does not feel robotic. It answers instantly. It checks availability. It confirms bookings. It follows up. And when a situation needs a human, it routes it correctly.",
      "The result is not fewer people.",
      "The result is fewer missed moments.",
      "Hotels that adopt AI early are not doing it for novelty. They are doing it for reliability. Guests remember speed. They remember clarity. They remember not being put on hold.",
      "AI voice becomes the silent system behind great service.",
      "Always present. Never tired.",
      "Hospitality does not need more tools.",
      "It needs fewer gaps.",
      "That is exactly where AI belongs.",
    ],
  },
  {
    title: "Great Guest Experience Is About Timing, Not Perfection",
    slug: "great-guest-experience-is-about-timing-not-perfection",
    category: "Growth & Operations",
    dateISO: "2026-01-23",
    dateDisplay: "23rd January 2026",
    featuredImage: "/blog/timing-perfection.jpg",
    contentParagraphs: [
      "Most hotels obsess over perfection.",
      "Perfect rooms.",
      "Perfect amenities.",
      "Perfect service scripts.",
      "But guests rarely remember perfection.",
      "They remember timing.",
      "Did someone answer when they called?",
      "Did someone reply before they booked elsewhere?",
      "Did someone check in when something felt off?",
      "In hospitality, delays are louder than mistakes.",
      "A guest calling at 11 PM does not expect luxury. They expect clarity. A simple answer. A calm response. Silence feels careless, even when it is not.",
      "This is where many teams struggle. Not because they do not care, but because care does not scale linearly.",
      "Staff schedules are fixed. Guest demand is not.",
      "AI systems change this equation quietly.",
      "They do not improve service by being better than humans.",
      "They improve service by being present when humans cannot be.",
      "A late-night inquiry.",
      "A missed call during peak check-in.",
      "A follow-up that never happened.",
      "These moments compound.",
      "When an AI system handles first contact, confirms basics, and keeps the conversation alive, human teams regain control of their time. They show up where it matters most. Face to face.",
      "The best guest experience is not flawless.",
      "It is responsive.",
      "Hotels that understand this design their operations differently. They let machines handle immediacy and let people handle empathy.",
      "That balance is the future of hospitality.",
      "Not louder service.",
      "Just faster care.",
    ],
  },
];
