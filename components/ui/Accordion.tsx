'use client';

import { ReactNode, useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white border-4 border-black comic-shadow overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent-500 transition-colors"
          >
            <span className="font-black text-lg text-gray-900 uppercase tracking-wide">{item.question}</span>
            <svg
              className={`w-6 h-6 text-gray-900 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={4}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 text-gray-900 leading-relaxed font-bold border-t-4 border-black pt-5 bg-accent-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

