"use client";
import { useState } from 'react';

const faqData = [
  {
    question: "What makes MifTech's Heat Pump technology more efficient?",
    answer: "Our Heat Pump technology uses electric power to transfer heat, making it more efficient than traditional systems like solar heaters. It consumes less energy even during monsoons and winters, offering significant savings all year round."
  },
  {
    question: "How can MifTech's heating system benefit my business or household?",
    answer: "Our energy-efficient central water heating systems are designed to reduce operational costs and energy consumption, leading to measurable savings. This helps your business or household achieve significant long-term financial and environmental benefits."
  },
  {
    question: "Are MifTech's products verified by any third-party certifications?",
    answer: "Yes, all our products are certified by third-party organizations to ensure their performance ratings meet industry standards. This guarantees that our systems deliver as promised and align with your investment recovery projections."
  }
];

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-[var(--extra-medium-gray)]">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5">
      <span className="text-lg font-semibold text-[var(--text-dark-gray)]">{question}</span>
      <span className="text-2xl text-[var(--dark-gray)] transform transition-transform duration-300">{isOpen ? '-' : '+'}</span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <p className="text-gray-600 pb-5 pr-10">{answer}</p>
    </div>
  </div>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center mb-4">
              <span className="w-8 h-px bg-[var(--base-color)] mr-2"></span>
              <span className="text-gradient-base-color text-sm font-bold uppercase tracking-widest">Q&A</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-dark-gray)]">Elevate Your Energy Efficiency with Proven Heat Pump Technology</h2>
          </div>
          <div>
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}