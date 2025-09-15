import ClientLogoCloud from '@/components/ui/ClientLogoCloud';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  "Available in 3.5kW to 90kW models",
  "High COP (up to 4.2) for maximum energy efficiency",
  "Suitable for factories, large commercial spaces, and industrial processes",
  "Advanced rotary & scroll compressors for silent and stable operation",
  "Intelligent control panel with temperature/time setting & LED display",
  "Compatible with ambient temperatures of 20°C and heating water up to 55–60°C",
];

export default function IndustrialHeatPumpPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-[var(--text-dark-gray)] max-w-4xl">Industrial Heat Pump</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">Robust and high-capacity heating solutions engineered for the rigorous demands of industrial applications.</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Image src="/images/industrial-heat-pump.jpg" alt="Industrial Heat Pump" layout="fill" objectFit="cover" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-playfair text-[var(--text-dark-gray)] mb-6">Key Features</h2>
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-[var(--linen)] text-[var(--dark-gray)] rounded-full flex items-center justify-center mr-4 mt-1">
                                    ✓
                                </div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                     <div className="mt-8">
                        <Link href="/contact" className="inline-block px-8 py-3 text-sm font-semibold text-[var(--white)] bg-[var(--dark-gray)] rounded-full hover:bg-opacity-80 transition-all">
                          Contact Us Now
                        </Link>
                      </div>
                </div>
            </div>
        </div>
      </section>

      <ClientLogoCloud />
    </>
  );
}
