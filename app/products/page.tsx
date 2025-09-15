"use client";

import Image from "next/image";
import Link from "next/link";
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
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-6xl font-bold text-[var(--text-dark-gray)] ${gotu.className}`}>
              Our <span className={`${cormorant.className} italic text-[var(--base-color)]`}>Products</span> & Services
            </h1>
            <p className={`mt-4 text-lg text-gray-700 ${lato.className}`}>
              We don’t just build products; we build <span className="underline">sustainable energy solutions</span> 
              that deliver measurable savings and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 bg-[var(--linen)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <div key={index} className="mb-24 last:mb-0">
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
                    className="inline-block mt-2 px-5 py-2 text-sm font-semibold text-white bg-[var(--base-color)] rounded-lg shadow hover:bg-[#066ba5] transition"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Image Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={product.img1} 
                    alt={product.title} 
                    width={800} 
                    height={500} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={product.img2} 
                    alt={`${product.title} detail`} 
                    width={400} 
                    height={500} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
