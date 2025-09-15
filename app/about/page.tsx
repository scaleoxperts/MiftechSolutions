"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Gotu, Cormorant_Garamond, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

      <section className="pt-32 pb-20 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="w-8 h-px bg-[#087dc0] mr-2"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#087dc0]">About MifTech Solution</span>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold text-[var(--text-dark-gray)] mb-6 ${gotu.className}`}>
              Transforming Energy into Savings with <span className={`${cormorant.className} italic text-[#087dc0]`}>Innovative Heat Pump Technology</span>
            </h1>

            <p className={`text-lg text-gray-700 leading-relaxed ${lato.className}`}>
              At MifTech Solution, we don’t just make products; we build <span className={`underline mx-1`}>ASSETS</span> that deliver real, measurable savings. Our goal is to create lasting impact and drive positive growth for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[var(--linen)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className={`text-3xl md:text-4xl font-bold text-[var(--text-dark-gray)] ${gotu.className}`}>
                Elevate Your Energy Efficiency with <span className={`${cormorant.className} italic text-[#087dc0]`}>Proven Technology</span>
              </h2>
              <p className={`text-gray-700 ${lato.className}`}>
                We believe in reducing energy costs, minimizing carbon footprint, and maximizing efficiency through innovation and customer-focused solutions. Guided by our core values—Innovation, Integrity, and Sustainability—we strive to build lasting partnerships that create real impact.
              </p>
              <p className={`text-gray-700 ${lato.className}`}>
                With 15+ years of expertise as energy-efficiency and cost specialists, we understand the critical role we play in our customers’ success. Our commitment goes beyond simply delivering a contract—we ensure our clients’ operations run at 100% efficiency, wherever controlled heating is essential.
              </p>
              <p className={`text-gray-700 ${lato.className}`}>
                With globally recognized certifications (ISO, CE & RoHS), MifTech Solution ensures quality, safety, and environmental responsibility in every project—leading the global transition toward sustainable living and smarter energy solutions.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/demo-branding-agency-home-04.jpg"
                alt="MifTech efficient technology"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-[var(--text-dark-gray)] ${gotu.className}`}>
              Our <span className={`${cormorant.className} italic text-[#087dc0]`}>Core Values</span>
            </h2>
            <p className={`mt-4 text-gray-700 max-w-2xl mx-auto ${lato.className}`}>
              We are committed to delivering energy-efficient solutions that drive measurable savings and long-term impact.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              { title: "Energy Efficient", desc: "Our solutions optimize power consumption for sustainable savings." },
              { title: "Cost Effective", desc: "Reduce operational costs without compromising performance." },
              { title: "Eco Friendly", desc: "Designed to minimize environmental impact." },
              { title: "Long Lasting", desc: "High-quality systems built for durability and reliability." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 bg-[var(--linen)]"
              >
                <h3 className={`text-xl font-bold mb-2 text-[var(--text-dark-gray)] ${gotu.className}`}>{item.title}</h3>
                <p className={`text-gray-700 ${lato.className}`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-xl md:text-6xl font-bold text-[var(--text-dark-gray)] ${gotu.className}`}>
              Our <span className={`${cormorant.className} italic text-[#087dc0]`}>Vision</span>
            </h2>
            <p className={`mt-4 text-gray-700 max-w-2xl mx-auto ${lato.className}`}>
              To be a global leader in sustainable,  <span className={`${cormorant.className} italic`}>ISO, CE </span> & <span className={`${cormorant.className} italic`}>RoHS</span> certified energy solutions, empowering industries and communities with innovative, eco-friendly technologies that reduce energy costs, minimize carbon footprint, and create a cleaner, greener future.
            </p>
          </motion.div>

          
        </div>
      </section>
    </main>
  );
}
