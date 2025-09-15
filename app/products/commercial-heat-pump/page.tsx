"use client";

import ClientLogoCloud from "@/components/ui/ClientLogoCloud";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Gotu, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });
// const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function CommercialHeatPumpPage() {

  const variants = [
    {
      title: "1. Commercial Heat Pump – Hotel & Resorts",
      image: "/images/Commercial-1.png",
      points: [
        "Large-scale hot water solutions for continuous operation",
        "Hot water outlet up to 75°C",
        "Advanced inverter technology for energy efficiency",
        "Eco-friendly refrigerants with low GWP",
        "Reliable performance in demanding environments"
      ]
    },
    {
      title: "2. Commercial Heat Pump – Industrial & Healthcare",
      image: "/images/Commercial-2.png",
      points: [
        "High-capacity system for hospitals, clinics, and industries",
        "Water flow rate: 6 – 30 m³/h depending on model",
        "Flexible modular design for multiple units",
        "Intelligent controller with BMS compatibility",
        "Durable construction for 24/7 operation"
      ]
    }
  ];

  return (
    <main className="overflow-hidden">

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="w-8 h-px bg-[#087dc0] mr-2"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#087dc0]">
                Commercial Heat Pump
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold text-[var(--text-dark-gray)] mb-6 ${gotu.className}`}>
              Commercial – AeroTherm Air Source Heat Pump
            </h1>

            <p className={`text-lg text-gray-700 leading-relaxed ${lato.className}`}>
              Brand: MifTech Solution | Application: Hotels, Hospitals, Resorts, Industries, Commercial Buildings.
            </p>
          </motion.div>
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
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-[var(--text-dark-gray)] mb-4 ${gotu.className}`}>
              Product Overview
            </h2>
            <p className={`text-gray-700 leading-relaxed max-w-3xl ${lato.className}`}>
              MifTech Solution’s Commercial Air Source Heat Pumps are engineered to deliver large-scale, energy-efficient heating and hot water solutions. Designed for continuous operation in demanding environments, they ensure reliable hot water production for hotels, hospitals, schools, swimming pools, and industrial applications.
            </p>
            <p className={`mt-4 text-gray-700 leading-relaxed max-w-3xl ${lato.className}`}>
              These systems operate efficiently even at an ambient temperature of –20°C, achieving outlet water temperatures of up to 75°C. With advanced inverter technology, eco-friendly refrigerants, and intelligent controls, MifTech commercial heat pumps provide sustainable performance with significant savings on operational costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Variants */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {variants.map((variant, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image src={variant.image} alt={variant.title} fill className="object-cover" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${gotu.className}`}>{variant.title}</h3>
                <ul className={`space-y-2 text-gray-700 ${lato.className}`}>
                  {variant.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[var(--linen)]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-[var(--text-dark-gray)] mb-6 ${gotu.className}`}>
              Key Features
            </h2>
            <ul className={`grid md:grid-cols-2 gap-4 text-gray-700 ${lato.className}`}>
              <li>✅ High-capacity system for large commercial demands</li>
              <li>✅ Works efficiently even in sub-zero temperatures</li>
              <li>✅ High energy efficiency, reducing power bills up to 70%</li>
              <li>✅ Eco-friendly refrigerants with low environmental impact</li>
              <li>✅ Flexible modular design (multiple units can be combined)</li>
              <li>✅ Durable construction for 24/7 commercial operation</li>
              <li>✅ Compatible with solar and hybrid heating systems</li>
              <li>✅ Remote monitoring & intelligent control options</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Performance & Technical Specs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${gotu.className}`}>Performance Data</h2>
            <ul className={`space-y-2 text-gray-700 ${lato.className}`}>
              <li>• Heating Capacity: 12kW – 500 kW (model range)</li>
              <li>• Hot Water Outlet Temperature: Up to 75°C</li>
              <li>• Operating Ambient Temperature: –20°C to +45°C</li>
              <li>• COP: 4.0 – 5.5 (at A7/W35)</li>
              <li>• Water Flow Rate: 6 – 30 m³/h (model dependent)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${gotu.className}`}>Technical Specifications</h2>
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl mb-6">
              <Image
                src="/images/techspeccom.png"
                alt="Commercial Heat Pump Technical Specifications"
                fill
                className="object-contain"
              />
            </div>
            <ul className={`space-y-2 text-gray-700 ${lato.className}`}>
              <li>• Power Supply: 380–415V / 50Hz (Three Phase)</li>
              <li>• Compressor: Scroll / Screw type, inverter-driven</li>
              <li>• Refrigerant: R134a / R32 / R410A (low GWP options)</li>
              <li>• Heat Exchanger: Titanium / Stainless steel plate type</li>
              <li>• Noise Level: 50 – 65 dB(A)</li>
              <li>• Control System: Microprocessor-based with BMS compatibility</li>
              <li>• Safety Features: High/low pressure protection, anti-freeze, overload protection, auto-defrost</li>
            </ul>
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
          >
            <h2 className={`text-3xl font-bold mb-6 ${gotu.className}`}>Applications</h2>
            <ul className={`grid md:grid-cols-2 gap-4 text-gray-700 ${lato.className}`}>
              <li>• Hotels & Resorts – Hot water for rooms, kitchens, laundries, spas</li>
              <li>• Hospitals & Clinics – Sterilization, bathing, laundry, kitchens</li>
              <li>• Swimming Pools – Efficient heating for pools & Jacuzzis</li>
              <li>• Industrial Use – Process heating & hot water applications</li>
              <li>• Commercial Buildings – Centralized heating & cooling solutions</li>
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
            Ready to Install a Commercial Heat Pump?
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
