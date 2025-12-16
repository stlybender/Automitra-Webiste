import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    question: 'Do I need to know about AI to use AutoMitra?',
    answer: 'No. Describe your business, target audience, and what you want each agent to do. AutoMitra AI builds the flows for you and lets you review before going live.',
  },
  {
    question: 'Can AutoMitra AI integrate with our existing tools?',
    answer: 'Yes. AutoMitra AI can connect with your CRM, lead forms, and communication tools via APIs and webhooks. You keep your current stack; AutoMitra plugs into it.',
  },
  {
    question: 'Does it work across multiple clients or brands?',
    answer: 'Yes. Agencies and multi-brand companies can manage multiple workspaces, each with its own numbers, WhatsApp flows, and dashboards.',
  },
  {
    question: 'How quickly can we go live?',
    answer: 'Most teams launch their first AI calling campaign in a few hours after sharing scripts, FAQs, and lead sources.',
  },
  {
    question: 'Is there support and onboarding?',
    answer: 'Yes. You get guided onboarding, best-practice call flows, and ongoing support as you scale campaigns.',
  },
  {
    question: 'Do the agents get better over time?',
    answer: 'Yes. AutoMitra AI learns from outcomes and your feedback, improving qualification, phrasing, and routing with every campaign.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Questions?
          </h2>
          <p className="text-xl text-gray-900 mt-4 font-bold">
            Everything you need to know about AutoMitra AI
          </p>
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}

