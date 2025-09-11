import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    image: "/images/swimming-pool-air-source-heat-pump.jpg",
    title: "Swimming Pool Heat Pump",
    description: "Our specialized Swimming Pool Heat Pumps are built to maintain comfortable water temperatures while minimizing energy costs.",
    href: "/swimming-pool-heat-pump"
  },
  {
    image: "/images/industrial-heat-pump.jpg",
    title: "Commercial & Industrial Heat Pump",
    description: "Powerful and efficient solutions for hotels, hospitals, and large-scale industrial applications, ensuring reliable hot water with significant energy savings.",
    href: "/industrial-heat-pump"
  },
  {
    image: "/images/domestic.jpg",
    title: "Domestic & All-In-One Heat Pump",
    description: "Compact and eco-friendly systems designed for residential use, providing a consistent supply of hot water while reducing your carbon footprint.",
    href: "/domestic-heat-pump"
  }
];

export default function ProductShowcase() {
  return (
    <section className="bg-[var(--linen)] py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="w-8 h-px bg-[var(--base-color)] mr-2"></span>
            <span className="text-gradient-base-color text-sm font-bold uppercase tracking-widest">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-dark-gray)]">Latest Heating Solutions</h2>
        </div>

        {/* Desktop: Horizontal sticky cards */}
        <div className="hidden lg:block">
          <div className="relative" style={{ height: `${products.length * 100}vh` }}>
            {products.map((product, index) => (
              <div
                key={index}
                className="sticky top-0 h-screen w-full flex items-center justify-center"
                style={{
                  zIndex: index + 1,
                }}
              >
                <div className="group bg-[var(--white)] rounded-lg overflow-hidden w-full h-full transform hover:scale-[1.02] transition-all duration-500">
                  <Link href={product.href}>
                    <div className="flex flex-row h-full">
                      {/* Image Section */}
                      <div className="relative w-1/2">
                        <Image
                          src={product.image}
                          alt={product.title}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 group-hover:to-black/40 transition-all duration-500"></div>

                        {/* Product Badge */}
                        <div className="absolute top-8 left-8 z-10">
                          <span className="inline-block px-4 py-2 bg-[var(--base-color)] text-white text-sm font-bold uppercase tracking-widest rounded-full shadow-lg">
                            Product {index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-1/2 p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                        <h3 className="text-5xl font-bold font-playfair text-[var(--text-dark-gray)] mb-8 group-hover:text-[var(--base-color)] transition-colors duration-300 leading-tight">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 mb-12 text-xl leading-relaxed">
                          {product.description}
                        </p>
                        <div className="flex items-center">
                          <span className="font-semibold text-xl text-[var(--base-color)] group-hover:underline mr-3">
                            Explore Project
                          </span>
                          <svg
                            className="w-6 h-6 text-[var(--base-color)] transform group-hover:translate-x-3 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-[var(--white)] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <Link href={product.href}>
                <div className="relative h-48">
                  <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-playfair text-[var(--text-dark-gray)] mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <span className="font-semibold text-sm text-[var(--base-color)] group-hover:underline">Explore Project &rarr;</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile: Single column */}
        <div className="md:hidden space-y-6">
          {products.map((product, index) => (
            <div key={index} className="group bg-[var(--white)] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <Link href={product.href}>
                <div className="relative h-48">
                  <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-playfair text-[var(--text-dark-gray)] mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <span className="font-semibold text-sm text-[var(--base-color)] group-hover:underline">Explore Project &rarr;</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}