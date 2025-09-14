"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Cormorant_Garamond, Gotu, Lato } from "next/font/google"
import { SetStateAction, useCallback, useEffect, useState } from "react"
import Image from 'next/image';


const gotu = Gotu({ subsets: ["latin"], weight: "400" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" })
const lato = Lato({ subsets: ["latin"], weight: "700" })

export default function AboutIntro() {
  const images = [
    { src: "/images/demo-branding-agency-home-01.jpg", alt: "Heating Unit Detail", title: "Advanced Heat Pump Technology" },
    { src: "/images/demo-branding-agency-home-03.jpg", alt: "Industrial Heating Setup", title: "Industrial Scale Solutions" },
    { src: "/images/demo-branding-agency-home-02.jpg", alt: "Modern Heat Pump", title: "Energy Efficient Systems" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)


  const handleSlideChange = useCallback(
    (indexOrCallback: SetStateAction<number>) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex(indexOrCallback)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning]
  )

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => handleSlideChange(prev => (prev + 1) % images.length), 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay, images.length, handleSlideChange])


  const goToSlide = (index: number) => { if (index !== currentIndex) handleSlideChange(index) }

  return (
    <section className={`relative py-12 sm:py-16 lg:py-20 overflow-hidden ${gotu.className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-70" />
      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] max-h-[480px] rounded-2xl shadow-xl overflow-hidden bg-white">
              <div className="flex transition-transform duration-700 ease-out h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                  <div key={index} className="min-w-full h-full relative group">

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className={`text-white text-xl sm:text-2xl ${cormorant.className} font-semibold`}>
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => handleSlideChange(prev => (prev - 1 + images.length) % images.length)} disabled={isTransitioning} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-md hover:scale-110 transition disabled:opacity-50">
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>

              <button onClick={() => handleSlideChange(prev => (prev + 1) % images.length)} disabled={isTransitioning} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-md hover:scale-110 transition disabled:opacity-50">
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-white/90 px-3 py-1.5 rounded-full shadow-md">
                {images.map((_, index) => (
                  <button key={index} onClick={() => goToSlide(index)} disabled={isTransitioning} className={`transition-all duration-300 ${index === currentIndex ? "w-8 h-3 bg-[#087dc0] rounded-full" : "w-3 h-3 bg-gray-300 rounded-full hover:bg-[#087dc0]"}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-px bg-[#087dc0] mr-4" />
              <span className={`px-4 py-2 text-sm font-bold uppercase rounded-full text-[#087dc0] bg-gray-100 border border-gray-300 ${cormorant.className}`}>
                About MifTech
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-4xl ${gotu.className} font-bold text-gray-900 leading-snug`}>
              Transforming Energy into <span className={`block ${cormorant.className} text-[#087dc0]`}>Smart Heat Pump Solutions</span>
            </h2>

            <p className={`text-lg text-gray-700 ${lato.className} leading-relaxed opacity-90`}>
              We build energy-efficient heat pumps that save costs, reduce emissions, and deliver real impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { text: "Energy Efficient", color: "bg-[#087dc0]" },
                { text: "Cost Effective", color: "bg-blue-600" },
                { text: "Eco Friendly", color: "bg-green-500" },
                { text: "Long Lasting", color: "bg-yellow-400" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${f.color}`} />
                  <span className="text-sm font-medium text-gray-800">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/about" className="px-8 py-3 text-sm font-semibold text-white bg-[#087dc0] rounded-full shadow-lg hover:scale-105 transition">
                Explore Details
              </a>
              <a href="/products" className="px-8 py-3 text-sm font-semibold text-gray-900 bg-white border-2 border-gray-300 rounded-full shadow-lg hover:scale-105 hover:border-[#087dc0] hover:text-[#087dc0] transition">
                More Products
                <ChevronRight className="inline w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
