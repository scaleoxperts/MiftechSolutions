const stats = [
    { value: "10+", label: "Years of experience", description: "We have installed Air Source Heat Pumps for many years." },
    { value: "100+", label: "Valuable happy clients", description: "We have satisfied many clients with our outstanding work." },
    { value: "4+", label: "Presence in all of India", description: "Our presence is all over India." },
    { value: "10+", label: "Partners from MNCs", description: "We have partnered with Multi-National Companies." },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-[var(--white)] py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="text-lg font-semibold text-[var(--text-dark-gray)] mb-2">{stat.label}</p>
                <p className="text-gray-500 text-sm mb-6">{stat.description}</p>
                <div className="w-full h-px bg-[var(--extra-medium-gray)] mb-6"></div>
                <p className="text-5xl lg:text-6xl font-bold font-playfair text-[var(--text-dark-gray)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }