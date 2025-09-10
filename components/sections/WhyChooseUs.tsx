import Image from 'next/image';

const points = [
    {
        title: "Globally Proven System",
        description: "We provide energy-efficient central water heating systems based on globally-proven Heat Pump Technology, offering both environmental and economical benefits.",
    },
    {
        title: "Energy Efficiency Experts",
        description: "With over 10+ years of experience, our team specializes in energy efficiency and cost-saving solutions, ensuring your business runs at 100% efficiency.",
    },
    {
        title: "Economical & Reliable",
        description: "Our Heat Pumps are more economical than solar heating systems with backups, providing reliable heating year-round, even during monsoons and winters.",
    },
    {
        title: "Verified Performance",
        description: "Third-party certifications verify the performance ratings of our products, giving you confidence that they conform to design specifications and deliver on savings projections.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                         <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-dark-gray)] mb-8">Efficient Heating, Sustainable Savings: The MifTech Advantage</h2>
                         <div className="space-y-6">
                            {points.map((point, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-bold text-[var(--text-dark-gray)] mb-2">{point.title}</h3>
                                    <p className="text-gray-600">{point.description}</p>
                                </div>
                            ))}
                         </div>
                    </div>
                    <div className="order-1 lg:order-2 relative w-full h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                        <Image src="/images/demo-branding-agency-about-06.jpg" layout="fill" objectFit="cover" alt="MifTech team collaboration" />
                    </div>
                </div>
            </div>
        </section>
    );
}
