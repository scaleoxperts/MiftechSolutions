import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal-blue)] text-[var(--white)] py-12" style={{ backgroundImage: 'url(/images/demo-branding-agency-pattern.svg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <h3 className="font-playfair text-3xl font-medium mb-8">Let&apos;s make the world eco friendly!</h3>
            <div className="flex space-x-12">
              <div>
                <span className="text-sm uppercase tracking-wider block">Call our office</span>
                <a href="tel:+918886709911" className="hover:text-[var(--base-color)] transition-colors">+918886709911</a>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wider block">Send a message</span>
                <a href="mailto:info@miftechsolution.com" className="hover:text-[var(--base-color)] transition-colors">info@miftechsolution.com</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-sm uppercase tracking-wider mb-2">Company</h4>
            <ul>
              <li><Link href="/" className="hover:text-[var(--base-color)] transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--base-color)] transition-colors text-sm">About</Link></li>
              <li><Link href="/products" className="hover:text-[var(--base-color)] transition-colors text-sm">Products</Link></li>
              <li><Link href="/our_works" className="hover:text-[var(--base-color)] transition-colors text-sm">Our Works</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--base-color)] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm uppercase tracking-wider mb-2">Follow Us</h4>
            <ul>
              <li><a href="https://youtube.com/@miftechsolution?si=uJLMuCPIBgxpzSND" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--base-color)] transition-colors text-sm">YouTube</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex justify-start md:justify-end items-start space-x-4">
              <Image src="/images/iso.png" alt="ISO Certified" width={60} height={60} />
              <Image src="/images/SBA.png" alt="SBA" width={60} height={60} />
              <Image src="/images/eco.png" alt="Eco Friendly" width={60} height={60} />
          </div>
        </div>
        <div>
          <p className="text-xs">&copy; {new Date().getFullYear()} MifTech Solution. Website Design & developed by <a href="https://thebharattech.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--base-color)]">The Bharat Tech</a></p>
        </div>
      </div>
    </footer>
  );
}