"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Gotu, Lato } from "next/font/google";

// Fonts
const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function TechnicalSpecificationsPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--white)] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-[var(--dark-gray)] mb-6 ${gotu.className}`}
        >
          Technical Specifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg text-[var(--dark-gray)] max-w-3xl mx-auto leading-relaxed ${lato.className}`}
        >
          Explore the detailed technical specifications, efficiency data, and performance benchmarks for Air Source Heat Pumps.
        </motion.p>
      </section>

      {/* Technical Specs Image */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-[var(--linen)]/40 p-6 rounded-2xl shadow-lg w-full md:w-4/5 lg:w-2/3">
            <Image
              src="/images/heatpump-technical-specs.png"
              alt="Technical Specifications of Heat Pump"
              width={1072}
              height={1517}
              className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Download Button */}
      <section className="py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/images/heatpump-technical-specs.png"
            target="_blank"
            download
            className="inline-block px-8 py-3 bg-[var(--base-color)] text-[var(--white)] rounded-full shadow-md hover:bg-[var(--dark-gray)] transition-all duration-300 text-lg font-semibold"
          >
            Download Specifications
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
