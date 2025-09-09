import Image from 'next/image';
import Link from 'next/link';

export default function AboutIntro() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[400px] sm:h-[500px] lg:h-auto">
            <div className="relative w-full h-full">
               <div className="absolute top-0 left-0 w-2/5 sm:w-1/3">
                 <Image src="/images/demo-branding-agency-home-01.jpg" alt="Heating Unit Detail" width={300} height={400} className="object-cover rounded-lg shadow-lg" />
               </div>
               <div className="absolute top-1/4 right-0 w-1/2 sm:w-2/3">
                 <Image src="/images/demo-branding-agency-home-03.jpg" alt="Industrial Heating Setup" width={500} height={350} className="object-cover rounded-lg box-shadow-quadruple-large" />
               </div>
               <div className="absolute bottom-[-50px] left-1/4 w-1/2 sm:w-1/2 z-10">
                  <Image src="/images/demo-branding-agency-home-02.jpg" alt="Modern Heat Pump" width={400} height={280} className="object-cover rounded-lg box-shadow-quadruple-large w-full" />
               </div>
            </div>
          </div>
          <div className="lg:mt-16">
            <div className="flex items-center mb-4">
              <span className="w-8 h-px bg-[var(--base-color)] mr-2"></span>
              <span className="text-gradient-base-color text-sm font-bold uppercase tracking-widest">About MifTech Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-dark-gray)] mb-6">Transforming Energy into Savings with Innovative Heat Pump Technology</h2>
            <p className="text-gray-600 mb-8">
              At MifTech Solution, we don’t make product; we make asset that achieve real-life measurable savings, which make a lasting impact in generating positive bottom-line growth for our clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="inline-block px-8 py-3 text-sm font-semibold text-[var(--white)] bg-[var(--dark-gray)] rounded-full hover:bg-opacity-80 transition-all">
                Explore Details
              </Link>
              <Link href="/products" className="inline-block px-8 py-3 text-sm font-semibold text-[var(--dark-gray)] border border-[var(--extra-medium-gray)] rounded-full hover:bg-[var(--linen)] transition-all">
                More Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}