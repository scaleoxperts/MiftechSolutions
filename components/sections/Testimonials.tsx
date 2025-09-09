"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    quote: "MifTech's Heat Pump technology has drastically reduced our energy bills. Their commitment to efficiency is unmatched!",
    author: "@Akash Shaw"
  },
  {
    quote: "The best decision we made for our business was choosing MifTech Solution. Their energy-saving systems are a game-changer!",
    author: "@Praduman Singh"
  },
  {
    quote: "Reliable and efficient! MifTech Solution's technology exceeded our expectations and helped us achieve significant savings.",
    author: "@Vivekanand Tiwari"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--linen)] relative overflow-hidden" style={{ backgroundImage: "url('/images/demo-branding-agency-bg-01.png')"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-[var(--text-dark-gray)] leading-tight">We are trusted by our customers ❤️</h2>
          </div>
          <div className="md:col-span-8 md:col-start-6">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={true}
              className="w-full"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4">
                    <h3 className="text-2xl lg:text-3xl font-medium font-playfair text-[var(--text-dark-gray)] mb-4 leading-relaxed">{testimonial.quote}</h3>
                    <p className="text-gradient-base-color font-bold uppercase tracking-widest">{testimonial.author}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}