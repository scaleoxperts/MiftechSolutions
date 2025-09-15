"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Gotu, Cormorant_Garamond, Lato } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

const products = [
  { 
    title: "Swimming Pool Heat Pump", 
    description: "Harnesses renewable energy from the air to heat your pool efficiently—delivering significant cost savings while supporting a sustainable lifestyle. Available in flexible models to fit diverse needs.", 
    img1: "/images/demo-branding-agency-services-01.jpg", 
    img2: "/images/demo-branding-agency-services-02.jpg",
    href: "/products/swimming-pool-heat-pump"
  },
  { 
    title: "Commercial Air Source Heat Pump", 
    description: "Powerful, reliable hot water solutions for hotels, hospitals, and nursing homes—offering outstanding economic and environmental benefits while reducing operational costs.", 
    img1: "/images/demo-branding-agency-services-03.jpg", 
    img2: "/images/demo-branding-agency-services-04.jpg",
    href: "/products/commercial-heat-pump"
  },
  { 
    title: "Domestic Heat Pump", 
    description: "An eco-friendly replacement for traditional heaters and boilers, saving over 70% on energy by using renewable sources—making sustainable living effortless for households.", 
    img1: "/images/demo-branding-agency-services-05.jpg", 
    img2: "/images/demo-branding-agency-services-06.jpg",
    href: "/products/domestic-heat-pump"
  },
];

export default function ProductsPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className={`text-4xl md:text-6xl font-bold text-[var(--text-dark-gray)] ${gotu.className}`}>
              Our  <span className={`${cormorant.className} italic text-[#087dc0]`}>Products</span> & Services
            </h1>
            <p className={`mt-4 text-lg text-gray-700 ${lato.className}`}>
              We don’t just build products; we build{" "}
              <span className="underline">sustainable energy solutions</span> 
              that deliver measurable savings and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 bg-[var(--linen)]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24 last:mb-0"
            >
              {/* Text Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h2 className={`text-3xl font-bold text-[var(--text-dark-gray)] mb-4 ${gotu.className}`}>
                    {product.title}
                  </h2>
                  <p className={`text-gray-700 mb-6 ${lato.className}`}>
                    {product.description}
                  </p>
                  <Link 
                    href={product.href} 
                    className="inline-block mt-2 px-5 py-2 text-sm font-semibold text-[var(--white)] bg-[#087dc0] rounded-lg shadow hover:bg-opacity-80 transition-all"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Image Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 rounded-lg overflow-hidden shadow-2xl">
                  <Image 
                    src={product.img1} 
                    alt={product.title} 
                    width={800} 
                    height={500} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image 
                    src={product.img2} 
                    alt={`${product.title} detail`} 
                    width={400} 
                    height={500} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
