"use client"

import { useState, useEffect, SetStateAction } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Gotu, Cormorant_Garamond, Lato } from 'next/font/google';

const gotu = Gotu({ subsets: ['latin'], weight: '400' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '700' });

const testimonials = [
  { quote: "MifTech's Heat Pump technology has drastically reduced our energy bills. Their commitment to efficiency is unmatched!", author: "@Akash Shaw" },
  { quote: "The best decision we made for our business was choosing MifTech Solution. Their energy-saving systems are a game-changer!", author: "@Praduman Singh" },
  { quote: "Reliable and efficient! MifTech Solution's technology exceeded our expectations and helped us achieve significant savings.", author: "@Vivekanand Tiwari" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => handleSlideChange(prev => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleSlideChange = (indexOrCallback: SetStateAction<number>) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(indexOrCallback);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => { if (index !== currentIndex) handleSlideChange(index); };
  const nextSlide = () => handleSlideChange(prev => (prev + 1) % testimonials.length);
  const prevSlide = () => handleSlideChange(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`py-20 lg:py-32 relative overflow-hidden ${gotu.className}`} style={{ backgroundImage: "url('/images/demo-branding-agency-bg-01.png')", backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f3ec]/80 via-white/60 to-[#f7f3ec]/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="md:col-span-4 lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="w-8 h-px bg-[#087dc0] mr-2"></span>
                <span className={`text-sm font-bold uppercase tracking-widest text-[#087dc0] ${lato.className}`}>Testimonials</span>
              </div>

              <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight ${gotu.className}`}>
                Our Clients Love Our Solutions <span className={`inline-block ml-2 ${cormorant.className} text-[#087dc0]`}>❤️</span>
              </h2>

              <div className="hidden md:flex items-center gap-4 pt-4">
                <button onClick={prevSlide} disabled={isTransitioning} className="p-3 bg-white hover:bg-[#f7f3ec] rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 border border-gray-300">
                  <ChevronLeft className="w-5 h-5 text-gray-800 hover:text-[#087dc0] transition-colors" />
                </button>
                <button onClick={nextSlide} disabled={isTransitioning} className="p-3 bg-white hover:bg-[#f7f3ec] rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 border border-gray-300">
                  <ChevronRight className="w-5 h-5 text-gray-800 hover:text-[#087dc0] transition-colors" />
                </button>
                <div className="flex items-center gap-2 ml-4">
                  {testimonials.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} disabled={isTransitioning} className={`transition-all duration-300 ${index === currentIndex ? 'w-8 h-3 bg-[#087dc0] rounded-full' : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-[#087dc0] hover:scale-110'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 md:col-start-6 lg:col-span-7 lg:col-start-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200">
                <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {testimonials.map((t, index) => (
                    <div key={index} className="min-w-full p-8 lg:p-12 relative">
                      <div className="absolute top-6 right-6 opacity-10">
                        <Quote className="w-16 h-16 text-[#087dc0]" />
                      </div>
                      <blockquote className={`relative z-10 mb-8 ${lato.className}`}>
                        <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-gray-800 leading-relaxed">&quot;{t.quote}&quot;</p>
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <cite className={`text-[#087dc0] font-bold uppercase tracking-widest not-italic ${cormorant.className}`}>{t.author}</cite>
                        <div className="text-sm text-gray-500 font-medium">{currentIndex + 1} of {testimonials.length}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:hidden flex items-center justify-center gap-4 mt-6">
                <button onClick={prevSlide} disabled={isTransitioning} className="p-3 bg-white hover:bg-[#f7f3ec] rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 border border-gray-300">
                  <ChevronLeft className="w-5 h-5 text-gray-800 hover:text-[#087dc0] transition-colors" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} disabled={isTransitioning} className={`transition-all duration-300 ${index === currentIndex ? 'w-8 h-3 bg-[#087dc0] rounded-full' : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-[#087dc0] hover:scale-110'}`} />
                  ))}
                </div>
                <button onClick={nextSlide} disabled={isTransitioning} className="p-3 bg-white hover:bg-[#f7f3ec] rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 border border-gray-300">
                  <ChevronRight className="w-5 h-5 text-gray-800 hover:text-[#087dc0] transition-colors" />
                </button>
              </div>

              <div className="mt-4 w-full h-1 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-[#087dc0] transition-all duration-500 ease-out rounded-full" style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}