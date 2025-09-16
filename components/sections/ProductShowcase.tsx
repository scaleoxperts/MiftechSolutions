"use client"
import { useScroll } from 'motion/react';
import { useRef } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: "/images/swimming-pool-air-source-heat-pump.jpg",
    title: "Swimming Pool Heat Pump",
    description: "Our specialized Swimming Pool Heat Pumps are built to maintain comfortable water temperatures while minimizing energy costs.",
    href: "/products/swimming-pool-heat-pump"
  },
  {
    image: "/images/industrial-heat-pump.jpg",
    title: "Commercial & Industrial Heat Pump",
    description: "Powerful and efficient solutions for hotels, hospitals, and large-scale industrial applications, ensuring reliable hot water with significant energy savings.",
    href: "/products/industrial-heat-pump"
  },
  {
    image: "/images/domestic.jpg",
    title: "Domestic & All-In-One Heat Pump",
    description: "Compact and eco-friendly systems designed for residential use, providing a consistent supply of hot water while reducing your carbon footprint.",
    href: "/products/domestic-heat-pump"
  }
];

export default function ProductShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', '90% end']
  });
  return (
    <section className="bg-[var(--linen)] py-20 lg:py-32 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="w-8 h-px bg-[var(--base-color)] mr-2"></span>
            <span className="text-gradient-base-color text-sm font-bold uppercase tracking-widest">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-dark-gray)]">Latest Heating Solutions</h2>
        </div>

        <div ref={container} className="relative">
          {products.map((product, index) => {
              const targetScale = 0.85 + (index * 0.05); // final scale per card
              const range = [
                (index * 0.5) / products.length,
                (index * 0.5 + 1) / products.length
              ];

            return (
              <div className='h-[800px] sticky top-0' key={index}>
                <ProductCard product={product} index={index} progress={scrollYProgress} range={range} targerScale={ targetScale }
                
            
            />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
