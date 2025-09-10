import Image from 'next/image';
import Link from 'next/link';

const products = [
    { 
        title: "Swimming Pool Heat Pump", 
        description: "Utilizes renewable energy from ambient air to heat your pool efficiently, reducing your energy bills significantly. Flexible models available.", 
        img1: "/images/demo-branding-agency-services-01.jpg", 
        img2: "/images/demo-branding-agency-services-02.jpg",
        href: "/swimming-pool-heat-pump"
    },
    { 
        title: "Commercial Air Source Heat Pump", 
        description: "Powerful and reliable solutions for commercial hot water systems in hotels, hospitals, and nursing homes, offering great economic and environmental benefits.", 
        img1: "/images/demo-branding-agency-services-03.jpg", 
        img2: "/images/demo-branding-agency-services-04.jpg",
        href: "/commercial-heat-pump"
    },
    { 
        title: "Domestic Heat Pump", 
        description: "The most environmental solution for domestic hot water, replacing traditional heaters and boilers to save over 70% on energy from renewable sources.", 
        img1: "/images/demo-branding-agency-services-05.jpg", 
        img2: "/images/demo-branding-agency-services-06.jpg",
        href: "/domestic-heat-pump"
    },
];

export default function ProductsPage() {
    return (
        <>
            <section className="pt-32 pb-16 bg-[var(--white)]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold font-playfair text-[var(--text-dark-gray)]">Our Products & Services</h1>
                        <p className="mt-4 text-lg text-gray-600">We don't just build products; we build sustainable energy solutions that deliver measurable savings and drive growth.</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {products.map((product, index) => (
                        <div key={index} className="mb-24 last:mb-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold font-playfair text-[var(--text-dark-gray)] mb-4">{product.title}</h2>
                                    <p className="text-gray-600 mb-6">{product.description}</p>
                                    <Link href={product.href} className="font-semibold text-sm text-[var(--base-color)] hover:underline">
                                        Learn More &rarr;
                                    </Link>
                                </div>
                                <div className="hidden lg:block"></div>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 rounded-lg overflow-hidden">
                                    <Image src={product.img1} alt={product.title} width={800} height={500} className="w-full h-full object-cover"/>
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <Image src={product.img2} alt={`${product.title} detail`} width={400} height={500} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
