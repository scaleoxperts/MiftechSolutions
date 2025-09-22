"use client";

import ContactUs from "@/components/sections/ContactUs";
import { motion } from "motion/react";
import { Cormorant_Garamond, Gotu, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-6xl max-w-3xl font-bold text-[var(--text-dark-gray)] ${gotu.className}`}
          >
            {"We're"} here to answer <span className={`${cormorant.className} italic text-[#087dc0]`}>any questions</span> you may have.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`mt-6 text-lg text-gray-700 leading-relaxed ${lato.className}`}
          >
            Reach out to us to discuss how our Heat Pump solutions can save energy and improve efficiency for your business or home.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-[var(--linen)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <div className="p-6 bg-[var(--white)] rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <h2 className={`text-2xl font-bold text-[var(--text-dark-gray)] mb-2 ${gotu.className}`}>India Office</h2>
              <p className={`text-gray-600 mb-4 ${lato.className}`}>Hyderabad, Telangana, India</p>
              <div className="w-1/4 h-px bg-[var(--extra-medium-gray)] my-4"></div>
              <p className={`mb-2 ${lato.className}`}><span className="font-semibold">E:</span> <a href="mailto:info@miftechsolution.com" className="hover:text-[#087dc0]">info@miftechsolution.com</a></p>
              <p className={`${lato.className}`}><span className="font-semibold">T:</span> <a href="tel:+918886709911" className="hover:text-[#087dc0]">+91 8886709911</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--white)]">
        <ContactUs currentRoute={"/contact"}  />
      </section>
    </main>
  );
}
