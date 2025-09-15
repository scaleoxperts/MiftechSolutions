"use client";

import Image from 'next/image';
import ClientLogoCloud from '@/components/ui/ClientLogoCloud';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Gotu, Lato } from 'next/font/google';

const gotu = Gotu({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '700' });

const features = [
  "Dual Function: Works as a chiller in summer & heater in winter",
  "High Efficiency: Produces up to 5x the energy it consumes",
  "Weather-Resistant: Operates in ambient temperatures up to 45°C",
  "Cost-Effective: Reduces operating costs by 60%–80% compared to gas/oil/electric",
  "Eco-Friendly: Uses green refrigerants with low carbon footprint",
  "Durable Design: Titanium heat exchanger for long life in chlorinated/salt water pools",
  "Smart Control: Automatic switching between heating and cooling",
];

export default function SwimmingPoolHeatPumpPage() {
  return (
    <main className="overflow-hidden">

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-6xl font-bold text-[var(--text-dark-gray)] max-w-4xl mx-auto ${gotu.className}`}
          >
            Swimming Pool – AeroTherm Air Source Heat Pump
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mt-4 text-lg text-gray-700 max-w-2xl mx-auto ${lato.className}`}
          >
            Brand: MifTech Solution | Applications: Swimming Pools, Spas, Resorts, Sports Complexes
          </motion.p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-[var(--linen)]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-gray-700 space-y-4"
          >
            <h2 className={`text-3xl font-bold ${gotu.className} text-[var(--text-dark-gray)]`}>Product Overview</h2>
            <p className={`${lato.className}`}>
              MifTech Solution’s Swimming Pool Water Heater is engineered for precise water temperature control in both swimming pools and spas, ensuring comfort during hot summers and cold winters. Built with tropicalized designs, the system withstands extreme Indian weather conditions and operates efficiently at ambient temperatures up to 45°C, without compressor tripping or failure.
            </p>
            <p className={`${lato.className}`}>
              Unlike conventional boilers and electric heaters, the MifTech heat pump can automatically switch between heating and cooling modes, maintaining your pool at the perfect temperature year-round.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image & Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/Swimming-Pool.png" 
              alt="Swimming Pool Heat Pump" 
              fill 
              className="object-cover" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-6 text-[var(--text-dark-gray)] ${gotu.className}`}>Key Features</h2>
            <ul className="space-y-4 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[var(--dark-gray)] text-[var(--white)] rounded-full flex items-center justify-center mr-4 mt-1">
                    ✓
                  </div>
                  <span className={`${lato.className}`}>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 text-lg font-semibold text-[var(--white)] bg-[#087dc0] rounded-full hover:bg-opacity-80 transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-[var(--linen)]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-gray-700 space-y-4"
          >
            <h2 className={`text-3xl font-bold ${gotu.className} text-[var(--text-dark-gray)]`}>Applications</h2>
            <ul className="list-disc pl-6 space-y-2 ${lato.className}">
              <li>Residential & commercial swimming pools</li>
              <li>Luxury villas & resorts</li>
              <li>Hotels & wellness centers</li>
              <li>Spas & Jacuzzis</li>
              <li>Water parks & sports facilities</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl font-bold mb-6 ${gotu.className}`}>
            Ready to Install a Swimming Pool Heat Pump?
          </h2>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 text-lg font-semibold text-[var(--white)] bg-[#087dc0] rounded-full hover:bg-opacity-80 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      <ClientLogoCloud />
    </main>
  );
}
