"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gotu, Lato } from "next/font/google";



// Fonts
const gotu = Gotu({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function LifecyclePage() {
  const benefits = [
    {
      title: "Energy Efficient",
      points: [
        "Uses ambient air to generate heat",
        "Saves up to 60–70% energy compared to electric heaters or boilers",
      ],
    },
    {
      title: "Safety and Reliability",
      points: [
        "No direct electricity consumption for heating water",
        "Water and current are completely separated, ensuring a high safety quotient",
        "Eliminates risks of electric shocks, fire, or explosions that are common in electric or gas heaters",
      ],
    },
    {
      title: "High Efficiency & Energy Saving",
      points: [
        "Extracts abundant free heat energy from the air",
        "Electricity is used only to power the compressor, making it 4 times more efficient than traditional heaters",
        "Reduces electricity bills significantly",
      ],
    },
    {
      title: "Green Energy & Earth-Friendly",
      points: [
        "Utilizes three types of clean energy – Solar, Ambient, and Electric",
        "Produces no harmful gases",
        "Environmentally safe compared to oil, coal, or gas-based systems",
      ],
    },
    {
      title: "Low Maintenance",
      points: [
        "Simple design with fewer moving parts",
        "Ensures long service life and minimal maintenance cost",
      ],
    },
    {
      title: "Versatile Applications",
      points: [
        "Suitable for homes, hotels, hostels, hospitals, swimming pools, and industries",
      ],
    },
    {
      title: "Continuous Hot Water",
      points: ["Can operate 24/7, ensuring an uninterrupted supply of hot water"],
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--white)] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-[var(--dark-gray)] mb-6 ${gotu.className}`}
        >
          Air Source Heat Pump Life Cycle
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg text-[var(--dark-gray)] max-w-3xl mx-auto leading-relaxed ${lato.className}`}
        >
          Discover how air source heat pumps operate efficiently to deliver
          year-round heating and hot water, even in extreme climates.
        </motion.p>
      </section>

      {/* What is a Heat Pump */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-3xl font-bold  mb-4 ${gotu.className} text-[#087dc0]`}
          >
            What is an Air Source Heat Pump?
          </h2>
          <p
            className={`text-[var(--dark-gray)] text-lg leading-relaxed mb-8 ${lato.className}`}
          >
            An Air Source Heat Pump is a highly efficient system that provides
            year-round performance by transferring heat. It extracts energy from
            the air—even in temperatures as low as -20°C—to reliably heat your
            water in any climate.
          </p>

          <div className="my-8 flex justify-center">
            <Image
              src="/images/air-source-life-cycle-1.png"
              alt="Air Source Heat Pump Diagram"
              width={900}
              height={500}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-4/5 lg:w-3/5"
            />
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[var(--linen)]/40 rounded-2xl mx-4 lg:mx-0 px-6 lg:px-12 shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-3xl font-bold text-[#087dc0] mb-4 ${gotu.className}`}
          >
            How Does It Work?
          </h2>
          <p
            className={`text-[var(--dark-gray)] text-lg leading-relaxed ${lato.className}`}
          >
            Heat Pumps operate on the principle of{" "}
            <strong>heat transfer</strong> — instead of generating heat by
            burning fuel or consuming large amounts of electricity, they
            transport heat from one place to another. This heat is freely
            available in the surrounding air.
          </p>
        </motion.div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-3xl font-bold text-[#087dc0] mb-4 ${gotu.className}`}
          >
            Energy Efficiency
          </h2>
          <p
            className={`text-[var(--dark-gray)] text-lg leading-relaxed mb-8 ${lato.className}`}
          >
            For every 1 unit of electrical energy consumed, the Heat Pump
            transfers about 3 units of free energy from the air to the heat
            sink. This means you pay for just 1 unit of input but receive nearly
            4 units of output energy—delivering an impressive{" "}
            <span className="font-semibold text-[var(--base-color)]">
              Coefficient of Performance (CoP) of 4.2
            </span>
            .
          </p>

          <div className="my-8 flex justify-center">
            <Image
              src="/images/air-source-life-cycle-2.png"
              alt="Heat Pump Energy Efficiency"
              width={900}
              height={500}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-4/5 lg:w-3/5"
            />
          </div>
        </motion.div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-[var(--linen)]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold text-center text-[#087dc0] mb-12 ${gotu.className}`}
            >
              Key Benefits of Air Source Heat Pumps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <h3
                    className={`text-xl font-bold text-[var(--dark-gray)] mb-4 ${gotu.className}`}
                  >
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">
                          ✔
                        </span>
                        <span className={`text-gray-700 ${lato.className}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


    </main>
  );
}
