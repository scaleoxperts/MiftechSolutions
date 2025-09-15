"use client";

import ClientLogoCloud from "@/components/ui/ClientLogoCloud";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Gotu, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });

const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function DomesticHeatPumpPage() {
  const variants = [
    {
      title: "1. All-in-One Domestic Water Heater",
      image: "/images/All-in-One-Domestic-Water-Heater.png",
      points: [
        "Compact structure with integrated water tank",
        "Hot water outlet temperature up to 55°C",
        "Multi-functional intelligent controller",
        "Eco-friendly refrigerant with low GWP",
        "Ideal for homes, apartments, and hotels"
      ]
    },
    {
      title: "2. Domestic Heat Pump for Spas & Jacuzzis",
      image: "/images/Domestic-Heat-Pump-for-Spas-and-Jacuzzis.png",
      points: [
        "Specially designed for spa and Jacuzzi applications",
        "Hot water outlet temperature up to 55°C",
        "Cost-effective non-titanium heat exchanger",
        "Quiet and reliable operation",
        "Energy-saving solution for wellness facilities"
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
                Domestic Heat Pump
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold text-[var(--text-dark-gray)] mb-6 ${gotu.className}`}>
              Domestic – AeroTherm Air Source Heat Pump
            </h1>

            <p className={`text-lg text-gray-700 leading-relaxed ${lato.className}`}>
              Energy-efficient and sustainable hot water solutions engineered for residential and light commercial use.
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
              MifTech Solution offers advanced Domestic Heat Pump systems in India, designed for year-round hot water generation. Built for efficiency, reliability, and sustainability, these systems ensure comfort while reducing energy bills significantly.
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

          {/* Split System */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${gotu.className}`}>3. Split Domestic Heat Pump System</h3>
            <ul className={`space-y-2 text-gray-700 ${lato.className}`}>
              <li>• Separate Heat Pump Unit and Storage tank</li>
              <li>• Hot water outlet temperature up to 55°C</li>
              <li>• Storage capacity: 150L – 1000L</li>
              <li>• Flexible installation for limited spaces</li>
              <li>• Consistent hot water supply in all weather conditions</li>
            </ul>
          </motion.div>
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
              Key Features Across the Range
            </h2>
            <ul className={`grid md:grid-cols-2 gap-4 text-gray-700 ${lato.className}`}>
              <li>✅ Safe, reliable, and eco-friendly</li>
              <li>✅ Low noise and vibration operation</li>
              <li>✅ Wide operating temperature range</li>
              <li>✅ Intelligent user-friendly controls</li>
              <li>✅ High efficiency – saves up to 80% power bills</li>
              <li>✅ Easy installation for retrofit & new projects</li>
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
              <li>• Heating Capacity: 2 – 7 kW (Domestic range)</li>
              <li>• Hot Water Output Temp: Up to 55°C</li>
              <li>• Operating Temp Range: –7°C to +43°C</li>
              <li>• COP: 3.5 – 4.8 (at A7/W35)</li>
              <li>• Water Tank Compatibility: 100L – 1000L</li>
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
                src="/images/Techspecs-domestic.png"
                alt="Domestic Heat Pump Technical Specifications"
                fill
                className="object-contain"
              />
            </div>
            <ul className={`space-y-2 text-gray-700 ${lato.className}`}>
              <li>• Power Supply: 220V – 240V / 50Hz</li>
              <li>• Refrigerant: R134a / R290 (eco options)</li>
              <li>• Compressor: Rotary DC Inverter</li>
              <li>• Water Connections: ¾” BSP</li>
              <li>• Noise Level: ≤ 48 dB(A)</li>
              <li>• Dimensions: ~500 × 500 × 900 mm</li>
              <li>• Weight: 45 – 75 kg</li>
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
              <li>• Domestic hot water for apartments & homes</li>
              <li>• Villas & residential complexes</li>
              <li>• Hotels & guest houses</li>
              <li>• Small commercial facilities</li>
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
            Ready to Install a Domestic Heat Pump?
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
