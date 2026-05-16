'use client';

import { useId, useState } from 'react';

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
  /** Index of panel open on first render; null = all closed */
  defaultOpenIndex?: number | null;
};

export default function FaqAccordion({ items, defaultOpenIndex = 0 }: Props) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className={`bg-white rounded-lg shadow-sm border transition-colors ${
              isOpen ? 'border-[#ff5722]/40 shadow-md' : 'border-gray-100'
            }`}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-gray-900 hover:text-[#ff5722] transition-colors"
              >
                <span>{item.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm leading-none transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-[#ff5722] text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
