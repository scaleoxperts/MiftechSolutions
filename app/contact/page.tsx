import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[var(--white)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-[var(--text-dark-gray)] max-w-3xl">We&apos;re here to answer any questions you may have.</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold font-playfair text-[var(--text-dark-gray)] mb-2">India Office</h2>
                    <p className="text-gray-600 mb-4">Hyderabad, Telangana, India</p>
                    <div className="w-1/4 h-px bg-[var(--extra-medium-gray)] my-4"></div>
                    <p><span className="font-semibold">E:</span> <a href="mailto:info@miftechsolution.com" className="hover:text-[var(--base-color)]">info@miftechsolution.com</a></p>
                    <p><span className="font-semibold">T:</span> <a href="tel:+918886709911" className="hover:text-[var(--base-color)]">+91 8886709911</a></p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--linen)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Image src="/images/demo-branding-agency-contact-01.jpg" alt="Contact MifTech" layout="fill" objectFit="cover"/>
                </div>
                <div>
                    <div className="flex items-center mb-4">
                        <span className="w-8 h-px bg-[var(--base-color)] mr-2"></span>
                        <span className="text-gradient-base-color text-sm font-bold uppercase tracking-widest">Get in touch with us</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-dark-gray)] mb-6">We&apos;d love to hear from you!</h2>
                    <p className="text-gray-600">Please reach out with any questions or for a consultation on how we can help you achieve your energy-saving goals.</p>
                </div>
            </div>
          </div>
      </section>
    </>
  );
}
