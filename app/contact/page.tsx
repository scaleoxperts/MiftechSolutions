"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Gotu, Cormorant_Garamond, Lato } from "next/font/google";

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
           {" Reach out to us to discuss how our Heat Pump solutions can save energy and improve efficiency for your business or home."}
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

      {/* Image + Form / Contact CTA Section */}
      <section className="py-20 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/demo-branding-agency-contact-01.jpg"
                alt="Contact MifTech"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center mb-4">
                <span className="w-8 h-px bg-[#087dc0] mr-2"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#087dc0]">Get in touch</span>
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold text-[var(--text-dark-gray)] ${gotu.className}`}>
                We&apos;d love to <span className={`${cormorant.className} italic text-[#087dc0]`}>hear from you</span>!
              </h2>
              <p className={`text-gray-700 leading-relaxed ${lato.className}`}>
                Send us a message or schedule a consultation to learn how we can help you achieve your energy-saving goals with innovative Heat Pump technology.
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:info@miftechsolution.com"
                className="inline-block px-8 py-4 text-white font-bold rounded-full bg-[#087dc0] shadow-lg hover:shadow-xl transition"
              >
                Contact Us
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
