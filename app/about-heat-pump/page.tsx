"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Gotu, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function AboutHeatPumpPage() {
  return (
    <main className="overflow-hidden">

      {/* Hero / Header */}
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className={`text-4xl md:text-5xl font-bold text-[var(--text-dark-gray)] mb-4 ${gotu.className}`}>
              About Heat Pumps
            </h1>
            <p className={`text-lg text-gray-700 leading-relaxed ${lato.className}`}>
              Learn more about heat pumps, their efficiency, and operational benefits. Explore the resources below to dive deeper into their life cycle and specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-20 bg-[var(--linen)]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/about-heat-pump/air-source-life-cycle"
              className="block p-6 rounded-2xl border border-gray-200 shadow-lg bg-[var(--white)] hover:shadow-2xl hover:border-[#087dc0] transition-all"
            >
              <h2 className={`text-2xl font-bold mb-2 text-[#087dc0] ${gotu.className}`}>
                Air Source Heat Pump Life Cycle
              </h2>
              <p className={`text-gray-700 ${lato.className}`}>
                Understand the complete working and operational cycle of air source heat pumps.
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/about-heat-pump/technical-specifications"
              className="block p-6 rounded-2xl border border-gray-200 shadow-lg bg-[var(--white)] hover:shadow-2xl hover:border-[#087dc0] transition-all"
            >
              <h2 className={`text-2xl font-bold mb-2 text-[#087dc0] ${gotu.className}`}>
                Technical Specifications
              </h2>
              <p className={`text-gray-700 ${lato.className}`}>
                Explore detailed technical specifications, efficiency data, and performance benchmarks.
              </p>
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
