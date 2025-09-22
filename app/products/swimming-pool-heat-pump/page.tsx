"use client";

import Image from 'next/image';
import ClientLogoCloud from '@/components/ui/ClientLogoCloud';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Gotu, Lato } from 'next/font/google';

const gotu = Gotu({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '700' });

const features = [
  "✅ Dual Function: Works as a chiller in summer & heater in winter",
  "✅ High Efficiency: Produces up to 5x the energy it consumes",
  "✅ Weather-Resistant: Operates in ambient temperatures up to 45°C",
  "✅ Cost-Effective: Reduces operating costs by 60%–80% compared to gas/oil/electric",
  "✅ Eco-Friendly: Uses green refrigerants with a low carbon footprint",
  "✅ Durable Design: Titanium heat exchanger for long life in chlorinated/salt water pools",
  "✅ Smart Control: Automatic switching between heating and cooling",
];

const performanceData = [
  "Heating & Cooling Capacity: 10 kW – 300 kW (model dependent)",
  "Operating Temperature Range: –7°C to +45°C",
  "Water Outlet Temperature Range: 15°C – 40°C",
  "Coefficient of Performance (COP): Up to 5.0",
  "Energy Savings: 60%–80% vs. electric/gas/oil heaters",
  "Applications: Pools (indoor/outdoor), spas, water parks, sports complexes",
];

const techSpecs = [
  "Power Supply: 220V – 240V (Single Phase) or 380V – 415V (Three Phase)",
  "Refrigerant: R410A / R417A/ R407C (eco-friendly options available)",
  "Compressor Type: Scroll / Rotary (inverter-driven for efficiency)",
  "Heat Exchanger: Titanium – corrosion-resistant & durable",
  "Noise Level: ≤ 55 dB(A)",
  "Control System: Microprocessor / Smart controller with temperature presets",
  "Installation: Suitable for both new pools and retrofit projects",
];

const applications = [
  "Residential & commercial swimming pools",
  "Luxury villas & resorts",
  "Hotels & wellness centres",
  "Spas & Jacuzzis",
  "Water parks & sports facilities",
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
            Brand: MifTech Solution | Application: Swimming Pools | Spas | Resorts | Sports Complexes
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
            <h2 className={`text-3xl font-bold text-[#087dc0] ${gotu.className}`}>Product Overview</h2>
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
            className="space-y-8"
          >
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/swim1.jpg"
                alt="Swimming Pool Heat Pump"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/swim2.jpg"
                alt="Swimming Pool Heat Pump in use"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-6 text-[#087dc0] ${gotu.className}`}>Key Features</h2>
            <ul className="space-y-4 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
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

      {/* Performance Data */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-gray-700 space-y-4"
          >
            <h2 className={`text-3xl font-bold text-[#087dc0] ${gotu.className}`}>Performance Data</h2>
            <ul className={`list-disc pl-6 space-y-2 ${lato.className}`}>
              {performanceData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-[var(--linen)]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-gray-700 space-y-4"
          >
            <h2 className={`text-3xl font-bold text-[#087dc0] ${gotu.className}`}>Technical Specifications</h2>
            <ul className={`list-disc pl-6 space-y-2 ${lato.className}`}>
              {techSpecs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-gray-700 space-y-4"
          >
            <h2 className={`text-3xl font-bold text-[#087dc0] ${gotu.className}`}>Applications</h2>
            <ul className={`list-disc pl-6 space-y-2 ${lato.className}`}>
              {applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
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
          <h2 className={`text-3xl font-bold mb-6 text-[#087dc0] ${gotu.className}`}>
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
