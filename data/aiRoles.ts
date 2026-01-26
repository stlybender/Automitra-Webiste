export interface AIRole {
  slug: string;
  name: string;
  shortDescription: string;
  headline: string;
  subHeadline: string;
  icon: string;
  color: string;
  whatIDo: string[];
  howIHelp: {
    bullets: string[];
    closingLine: string;
  };
  whenIStepIn: {
    stepInBullets: string[];
    stepBackBullets: string[];
    closingLine: string;
  };
  worksWellWith: string[];
  ctaSection: {
    title: string;
    description: string;
  };
}

export const aiRoles: AIRole[] = [
  {
    slug: 'receptionist',
    name: 'AI Receptionist',
    shortDescription: 'Answers booking calls and guest enquiries 24/7',
    headline: 'Your AI Receptionist for Booking Calls and Guest Enquiries',
    subHeadline: 'I answer every call politely, capture booking intent, check availability, and make sure no guest ever hears a ringing phone again.',
    icon: '/characters/receptionist.svg',
    color: 'bg-primary-500',
    whatIDo: [
      'I act as your front desk when your team is busy, unavailable or after working hours. I answer inbound calls calmly, understand why the guest is calling, and respond the way a trained receptionist would.',
      'I help guests with booking enquiries, basic questions and next steps without rushing or sounding robotic.',
    ],
    howIHelp: {
      bullets: [
        'Answer booking enquiries instantly',
        'Handle missed calls and call back guests politely',
        'Capture check-in dates, room preferences and contact details',
        'Share booking information and confirmations on WhatsApp',
        'Hand over the call to the real team when needed',
      ],
      closingLine: 'Guests feel heard. Your team stays focused. Bookings do not slip away.',
    },
    whenIStepIn: {
      stepInBullets: [
        'Calls come in during check-ins or peak hours',
        'Your front desk team is occupied',
        'Enquiries arrive after working hours',
      ],
      stepBackBullets: [
        'A guest needs a human decision',
        'A call requires negotiation or special handling',
        'Your team chooses to take over the conversation',
      ],
      closingLine: 'I support your team. I do not replace them.',
    },
    worksWellWith: [
      'Hotels',
      'Hostels',
      'Boutique homestays',
      'Service apartments',
    ],
    ctaSection: {
      title: 'Let Your Front Desk Breathe Again',
      description: 'See how I handle real booking calls calmly and professionally without missing a single enquiry.',
    },
  },
  {
    slug: 'switchboard-operator',
    name: 'AI Switchboard Operator',
    shortDescription: 'Manages high call volumes and routes to the right department',
    headline: 'Your AI Switchboard Operator for High Call Volumes',
    subHeadline: 'I manage incoming calls, route guests to the right department, and resolve common questions without interrupting your front desk.',
    icon: '/characters/router.svg',
    color: 'bg-orange-500',
    whatIDo: [
      'I act as the first point of contact when call volumes are high. I understand what the guest needs and either resolve the request myself or connect them to the correct department.',
      'Guests do not get bounced around. Your team does not get overwhelmed.',
    ],
    howIHelp: {
      bullets: [
        'Answer multiple calls simultaneously',
        'Route calls to reception, housekeeping, or management',
        'Handle FAQs like Wi-Fi, amenities, check-in time, and directions',
        'Reduce front desk interruptions',
        'Ensure no call goes unanswered',
      ],
      closingLine: '',
    },
    whenIStepIn: {
      stepInBullets: [
        'Call traffic spikes',
        'Guests have common questions',
        'Departments need protection from constant interruptions',
      ],
      stepBackBullets: [
        'A guest asks for a specific staff member',
        'A sensitive issue needs human judgment',
      ],
      closingLine: '',
    },
    worksWellWith: [
      'Large hotels',
      'Multi-property groups',
      'Busy city properties',
      'Resorts with multiple departments',
    ],
    ctaSection: {
      title: 'Control Call Chaos Without Adding Staff',
      description: 'See how I manage high call volumes while keeping your guest experience smooth.',
    },
  },
  {
    slug: 'night-auditor',
    name: 'AI Night Auditor',
    shortDescription: 'Handles after-hours calls and urgent guest requests',
    headline: 'Your AI Night Auditor for After-Hours Support',
    subHeadline: 'I handle late-night calls, urgent guest requests and routine questions when your night staff is limited.',
    icon: '/characters/autodial.svg',
    color: 'bg-purple-500',
    whatIDo: [
      'I stay awake all night so your team does not have to stretch themselves thin. I respond to guest calls calmly, even at odd hours, and make sure help is always available.',
    ],
    howIHelp: {
      bullets: [
        'Answer late-night booking enquiries',
        'Handle room service and urgent requests',
        'Provide information about amenities and check-out',
        'Reduce pressure on night staff',
        'Ensure guests feel supported at any hour',
      ],
      closingLine: '',
    },
    whenIStepIn: {
      stepInBullets: [
        'Calls come in late at night',
        'Staffing is lean',
        'Immediate response is expected',
      ],
      stepBackBullets: [
        'An emergency needs human intervention',
        'Management involvement is required',
      ],
      closingLine: '',
    },
    worksWellWith: [
      'Hotels with night shifts',
      'Budget and mid-sized properties',
      'Properties with limited overnight staff',
    ],
    ctaSection: {
      title: 'Support Guests Even at 3 AM',
      description: 'See how I handle late-night calls with patience and clarity.',
    },
  },
  {
    slug: 'lead-generator',
    name: 'AI Lead Generator',
    shortDescription: 'Runs outbound campaigns to fill low-occupancy dates',
    headline: 'Your AI Lead Generator for Outbound Revenue',
    subHeadline: 'I call past guests and business leads, qualify interest, and book appointments to fill low-occupancy dates.',
    icon: '/characters/onboarding.svg',
    color: 'bg-lime-500',
    whatIDo: [
      'I run outbound voice campaigns at scale. I speak politely, listen carefully, and stop when the guest is not interested.',
      'I focus on revenue without sounding pushy.',
    ],
    howIHelp: {
      bullets: [
        'Call past guests and corporate leads',
        'Promote offers during low-occupancy periods',
        'Qualify interest automatically',
        'Book callbacks or appointments',
        'Share lead summaries with your sales team',
      ],
      closingLine: '',
    },
    whenIStepIn: {
      stepInBullets: [
        'Occupancy is low',
        'Your team lacks time for outbound calls',
        'You want consistent follow-ups',
      ],
      stepBackBullets: [
        'A lead requests a human conversation',
        'Consent is not given',
      ],
      closingLine: '',
    },
    worksWellWith: [
      'Hotels with corporate bookings',
      'Chains running promotions',
      'Properties targeting repeat guests',
    ],
    ctaSection: {
      title: 'Turn Idle Rooms Into Revenue',
      description: 'See how I generate leads without annoying your guests.',
    },
  },
  {
    slug: 'guest-relations-officer',
    name: 'AI Guest Relations Officer',
    shortDescription: 'Engages guests proactively via WhatsApp and voice',
    headline: 'Your AI Guest Relations Officer on WhatsApp',
    subHeadline: 'I engage guests before arrival, check in during their stay, and alert your staff before small issues become big complaints.',
    icon: '/characters/whatsapp.svg',
    color: 'bg-magenta-500',
    whatIDo: [
      'I communicate with guests proactively using WhatsApp and voice calls. I ask simple questions, listen carefully, and surface concerns early.',
    ],
    howIHelp: {
      bullets: [
        'Send pre-arrival messages and reminders',
        'Perform automated check-in calls',
        'Monitor guest satisfaction',
        'Detect dissatisfaction early',
        'Alert staff in real time',
      ],
      closingLine: '',
    },
    whenIStepIn: {
      stepInBullets: [
        'Guests need reassurance',
        'Feedback can prevent complaints',
        'Staff is busy with on-ground tasks',
      ],
      stepBackBullets: [
        'A guest wants to speak to a manager',
        'Emotional handling is required',
      ],
      closingLine: '',
    },
    worksWellWith: [
      'Premium hotels',
      'Experience-focused properties',
      'Brands focused on reviews and loyalty',
    ],
    ctaSection: {
      title: 'Protect Your Guest Experience Proactively',
      description: 'See how I turn feedback into five-star reviews.',
    },
  },
];

export function getOtherRoles(currentSlug: string): AIRole[] {
  return aiRoles.filter((role) => role.slug !== currentSlug);
}
