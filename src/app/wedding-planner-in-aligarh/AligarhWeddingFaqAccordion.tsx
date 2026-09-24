'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export type FaqItem = {
  question: string;
  answer: string;
};

export default function AligarhWeddingFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100/60 text-left font-bold text-gray-900 hover:text-[#ff5722] transition-colors"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-[#ff5722]' : 'text-gray-400'
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen
                  ? 'max-h-[500px] opacity-100 border-t border-gray-200 p-6'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
