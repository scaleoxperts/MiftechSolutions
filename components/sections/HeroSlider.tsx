"use client";
import { motion, Transition, Variants } from 'motion/react';
import { Cormorant_Garamond, Gotu } from 'next/font/google';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const gotu = Gotu({
  weight: '400', subsets: ["latin"]
});
const cormorant_garamond = Cormorant_Garamond({
  weight: '600', subsets: ["latin"], style:"italic"
});

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
    <section className="relative h-screen min-h-[800px] pt-10  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent z-10" />

      <div className="container h-full px-4 relative z-20">
        <div className="flex h-full items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              className="pl-0 lg:pl-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-block text-sm font-semibold text-[#4169E1] mb-4 uppercase tracking-wide"
                variants={itemVariants}
              >
                Leading Sustainable Energy Innovations
              </motion.span>

              <motion.h1
                className={`${gotu.className} text-4xl md:text-6xl font-bold text-[var(--text-dark-gray)] mb-6 leading-snug`}
                variants={itemVariants}
              >
                Empowering <br />
                <span className={`${cormorant_garamond.className} text-[#087dc0] bg-clip-text font-semibold `}>
                  Efficient Heating
                </span><br />
                & Smart Energy Solutions
              </motion.h1>

              <motion.p
                className="text-gray-600 mb-8 mr-4 text-base md:text-lg leading-relaxed"
                variants={itemVariants}
              > 
                MifTech Solution is an ISO, CE & RoHS certified leader in sustainable, energy-efficient technologies. We provide eco-friendly heating, cooling, and renewable solutions that help industries and households save costs and protect the planet.               </motion.p>

              <motion.div
                className="flex gap-4"
                variants={itemVariants}
              >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/about"
                    className="px-8 py-3 text-sm font-semibold text-[var(--white)] bg-gradient-to-r from-[#FFD700] to-[#4169E1] rounded-full shadow-md transition"
                  >
                    Learn More
                  </Link>
                </motion.div>

                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="px-8  py-3 text-sm font-semibold text-[#4169E1] bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-[#4169E1]/30 transition "
                  >
                    Get A Free Quote
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
