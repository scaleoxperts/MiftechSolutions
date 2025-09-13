"use client";
import { Gotu, Cormorant_Garamond, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

const stats = [
  { value: "10+", label: "Years of Experience", description: "We have installed Air Source Heat Pumps for many years." },
  { value: "100+", label: "Happy Clients", description: "We have satisfied numerous clients with our outstanding work." },
  { value: "4+", label: "Presence Across India", description: "Our presence spans the entire country." },
  { value: "10+", label: "MNC Partners", description: "We have partnered with leading Multi-National Companies." },
];

export default function Stats() {
  return (
    <section className="bg-[var(--white)] py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center sm:text-left p-6 bg-[var(--linen)] rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <p className={`text-2xl sm:text-3xl font-bold text-[#087dc0] mb-2 ${gotu.className}`}>
                {stat.value}
              </p>
              <h3 className={`text-lg font-semibold text-[var(--text-dark-gray)] mb-3 ${cormorant.className}`}>
                {stat.label}
              </h3>
              <p className={`text-gray-600 text-sm leading-relaxed ${lato.className}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
