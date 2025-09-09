"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const slides = [
  { bg: '/images/demo-branding-agency-slider-01.jpg' },
  { bg: '/images/demo-branding-agency-slider-02.jpg' },
  { bg: '/images/demo-branding-agency-slider-03.jpg' },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] pt-20">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center">
          <div className="w-full lg:w-1/2">
            <div className="pl-0 lg:pl-16 relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-[var(--text-dark-gray)] mb-6 leading-tight">
                More Than Just Heating – We Build Sustainable Energy Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8 w-full sm:w-3/4">
                Powering Efficiency, Fueling Savings: Advanced Heating Solutions for Every Need
              </p>
              <Link href="/about" className="inline-block px-8 py-4 text-sm font-semibold text-[var(--white)] btn-gradient-fuel-yellow-blue rounded-full shadow-lg">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 -z-10">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}