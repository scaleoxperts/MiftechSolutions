import Image from 'next/image';

const logos = [
  { src: "/images/logo-logitech.svg", alt: "Logitech" },
  { src: "/images/logo-amazon.svg", alt: "Amazon" },
  { src: "/images/logo-walmart.svg", alt: "Walmart" },
  { src: "/images/logo-monday.svg", alt: "Monday.com" },
];

export default function ClientLogoCloud() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image src={logo.src} alt={logo.alt} width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
