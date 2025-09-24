"use client";

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
            {"We're"} here to answer{" "}
            <span
              className={`${cormorant.className} italic text-[#087dc0]`}
            >
              any questions
            </span>{" "}
            you may have.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`mt-6 text-lg text-gray-700 leading-relaxed ${lato.className}`}
          >
            Reach out to us to discuss how our Heat Pump solutions can save
            energy and improve efficiency for your business or home.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Map Section */}
      {/* Contact Info + Map Section */}
      <section className="py-20 bg-[var(--linen)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Contact Info Card */}
            <div className="p-10 bg-[var(--white)] rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <h2 className={`text-3xl font-bold text-[var(--text-dark-gray)] mb-4 ${gotu.className}`}>
                  Our Office
                </h2>
                <p className={`text-gray-600 mb-6 ${lato.className}`}>
                  Hyderabad, Telangana, India
                </p>

                <div className="w-12 h-px bg-[var(--extra-medium-gray)] mb-6"></div>

                <p className={`mb-4 ${lato.className}`}>
                  <span className="font-semibold">Address:</span> <br />
                  MC/AP-35, 18-13-8, Bandlaguda Rd, Moghuls Colony, Chandrayangutta, Hyderabad, Telangana 500005
                </p>
                <p className={`mb-2 ${lato.className}`}>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@miftechsolution.com"
                    className="hover:text-[#087dc0] transition-colors"
                  >
                    info@miftechsolution.com
                  </a>
                </p>
                <p className={`${lato.className}`}>
                  <span className="font-semibold">Tel:</span>{" "}
                  <a
                    href="tel:+918886709911"
                    className="hover:text-[#087dc0] transition-colors"
                  >
                    +91 8886709911
                  </a>
                </p>
              </div>
            </div>

            {/* Map Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.5766199365157!2d78.46109!3d17.3117273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd3da93f5f7b%3A0x9730c76e6c4fbe88!2sMIFTECH%20SOLUTION!5e0!3m2!1sen!2sin!4v1695099430439!5m2!1sen!2sin"
                className="w-full h-[400px] md:h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Optional overlay for aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
