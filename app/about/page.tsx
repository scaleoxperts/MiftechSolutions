import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
                <span className="w-8 h-px bg-[var(--base-color)] mr-2"></span>
                <span className="text-gradient-base-color text-sm font-bold uppercase tracking-widest">About MifTech Solution</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[var(--text-dark-gray)] mb-6">Transforming Energy into Savings with Innovative Heat Pump Technology</h1>
            <p className="text-lg text-gray-600">
                At MifTech Solution, we don’t just make products; we create assets that achieve real-life, measurable savings. Our focus is on making a lasting impact that generates positive bottom-line growth for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[var(--linen)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-dark-gray)] mb-6">Elevate Your Energy Efficiency with Proven Technology</h2>
                <p className="text-gray-700 mb-4">
                  As energy efficiency and cost specialists with over 10+ years of team experience, we recognize the essential role we play in helping our customers succeed. Our commitment goes far beyond the successful delivery of a contract.
                </p>
                <p className="text-gray-700">
                  Our focus is on keeping your business running at 100% efficiency wherever you rely on controlled heating. We see ourselves as a vital integrant to your success and take this responsibility seriously. Heat Pump runs on electric power, yet is more economical than solar heating systems, offering reliable performance year-round.
                </p>
              </div>
              <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src="/images/demo-branding-agency-home-04.jpg" layout="fill" objectFit="cover" alt="MifTech efficient technology" />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}