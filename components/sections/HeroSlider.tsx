"use client";
import { motion, Transition, Variants } from 'motion/react';
import { Cormorant_Garamond, Gotu, Lato } from 'next/font/google';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const gotu = Gotu({ weight: '400', subsets: ["latin"] });
const cormorant_garamond = Cormorant_Garamond({ weight: '600', subsets: ["latin"], style: "italic" });
const lato = Lato({ subsets: ["latin"], weight: "400" })

const slides = [
  { bg: '/images/demo-branding-agency-slider-01.jpg' },
  { bg: '/images/demo-branding-agency-slider-02.jpg' },
  { bg: '/images/demo-branding-agency-slider-03.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as Transition['ease'] }
  }
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
  tap: { scale: 0.95 }
};

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent z-10" />

      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex h-full items-center justify-center lg:justify-start">
          <div className="w-full max-w-xl lg:max-w-2xl text-center lg:text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3 md:space-y-4"
            >
              <motion.span
                className={`inline-block text-lg sm:text-base md:text-lg ${lato.className} font-semibold text-[#4169E1] uppercase tracking-wide`}
                variants={itemVariants}
              >
                Leading Energy Innovations
              </motion.span>

              <motion.h1
                className={`${gotu.className} text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-dark-gray)] mb-4 leading-tight`}
                variants={itemVariants}
              >
                Empowering <br />
                <span className={`${cormorant_garamond.className} text-[#087dc0] bg-clip-text font-semibold `}>
                  Efficient Heating
                </span><br />
                &
                Smart Energy
                <br /> Solutions
              </motion.h1>

              <motion.p
                className="text-black  lg:text-gray-600 text-base md:text-lg lg:text-xl  leading-relaxed max-w-lg mx-auto lg:mx-0 mb-2"
                variants={itemVariants}
              > 
                ISO certified leader in sustainable heating, cooling, and renewable energy solutions for industries and households.
              </motion.p>

              <motion.div
                className="flex flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start pt-1 flex-wrap"
                variants={itemVariants}
              >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/about"
                    className="inline-block px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#FFD700] to-[#4169E1] rounded-full shadow-md transition text-center whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </motion.div>

                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="inline-block px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold text-[#4169E1] bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-[#4169E1]/30 transition text-center whitespace-nowrap"
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute top-0 right-0 h-full w-full lg:w-1/2 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/70 !w-2 !h-2',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#FFD700]'
          }}
          className="h-full w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bg})` }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-[#4169E1]/5 to-transparent" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}