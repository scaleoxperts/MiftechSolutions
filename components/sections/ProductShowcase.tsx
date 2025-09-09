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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-[var(--white)] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <Link href={product.href}>
                <div className="relative h-64">
                  <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold font-playfair text-[var(--text-dark-gray)] mb-3">{product.title}</h3>
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