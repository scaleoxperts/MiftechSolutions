"use client";
import { useState } from "react";
import { Gotu, Cormorant_Garamond, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

const faqData = [
  {
    question: "Why is MifTech's Heat Pump technology more efficient?",
    answer: "It transfers heat using electricity, consuming far less energy than traditional heaters—even in winter or monsoon. Enjoy year-round energy savings effortlessly."
  },
  {
    question: "How can MifTech benefit my business or home?",
    answer: "Our central water heating systems cut operational costs and energy use, helping you achieve measurable financial and environmental benefits long-term."
  },
  {
    question: "Are MifTech products certified?",
    answer: "Yes. All products are third-party certified to meet industry standards, ensuring performance matches your expectations and investment goals."
  }
];

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-[var(--extra-medium-gray)]">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left py-5 hover:text-[#087dc0] transition-colors"
    >
      <span className={`text-lg ${gotu.className} font-semibold text-[var(--text-dark-gray)]`}>
        {question}
      </span>
      <span className={`text-2xl text-[#087dc0] transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
        +
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
      <p className={`text-gray-700 pr-10 pb-5 ${lato.className}`}>
        {answer}
      </p>
    </div>
  </div>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-[var(--linen)]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div>
            <div className="flex items-center mb-4">
              <span className="w-8 h-px bg-[#087dc0] mr-2"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#087dc0]">Q&A</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-[var(--text-dark-gray)] leading-tight ${gotu.className}`}>
              Elevate Your <span className={`${cormorant.className} italic text-[#087dc0]`}>Energy Efficiency</span>  
              with Proven Heat Pump Technology
            </h2>
          </div>

          <div className="space-y-4">
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
