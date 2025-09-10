import Image from 'next/image';
import ClientLogoCloud from '@/components/ui/ClientLogoCloud';
import Link from 'next/link';

const features = [
  "Water-side tube heat exchangers ensure optimal heat transfer",
  "Uses R410a refrigerant – eco-friendly and efficient",
  "Automatic 4-way valve defrosting to prevent ice buildup",
  "Corrosion-resistant copper tube with aluminum fins",
  "Quiet operation – as low as 43 dB(A)",
];

export default function SwimmingPoolHeatPumpPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-[var(--text-dark-gray)] max-w-4xl">Swimming Pool Air Source Heat Pump</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">Maintain comfortable water temperatures and extend your swimming season while minimizing energy costs.</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Image src="/images/swimming-pool-air-source-heat-pump.jpg" alt="Swimming Pool Heat Pump" layout="fill" objectFit="cover" />
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
