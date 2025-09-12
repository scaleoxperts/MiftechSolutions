"use client"

import { useState, useEffect, SetStateAction } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function AboutIntro() {
  const images = [
    {
      src: "/images/demo-branding-agency-home-01.jpg",
      alt: "Heating Unit Detail",
      title: "Advanced Heat Pump Technology"
    },
    {
      src: "/images/demo-branding-agency-home-03.jpg", 
      alt: "Industrial Heating Setup",
      title: "Industrial Scale Solutions"
    },
    {
      src: "/images/demo-branding-agency-home-02.jpg",
      alt: "Modern Heat Pump",
      title: "Energy Efficient Systems"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      handleSlideChange((prev: number) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const handleSlideChange = (indexOrCallback: SetStateAction<number>) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(indexOrCallback);
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      handleSlideChange(index);
    }
  };

  const nextSlide = () => {
    handleSlideChange((prev: number) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    handleSlideChange((prev: number) => (prev - 1 + images.length) % images.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(prev => !prev);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--linen)] via-[var(--white)] to-[var(--linen)] opacity-60"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          
          {/* Enhanced Carousel Section */}
          <div className="relative order-2 xl:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:h-[600px] w-full max-w-2xl mx-auto xl:mx-0">
              
              {/* Main carousel container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl box-shadow-quadruple-large bg-[var(--white)]">
                
                {/* Image container */}
                <div 
                  className="flex transition-all duration-700 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="min-w-full h-full relative group">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      
                      {/* Image overlay with title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-gray)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-[var(--white)] text-xl font-semibold">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation arrows */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="ml-4 p-3 bg-[var(--white)]/90 backdrop-blur-sm hover:bg-[var(--white)] rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-[var(--text-dark-gray)] group-hover:text-[var(--base-color)] transition-colors" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="mr-4 p-3 bg-[var(--white)]/90 backdrop-blur-sm hover:bg-[var(--white)] rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-[var(--text-dark-gray)] group-hover:text-[var(--base-color)] transition-colors" />
                  </button>
                </div>

                {/* Control panel */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button
                    onClick={toggleAutoPlay}
                    className="p-2.5 bg-[var(--white)]/90 backdrop-blur-sm hover:bg-[var(--white)] rounded-full shadow-lg transition-all duration-200 hover:scale-105 group"
                    aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoPlay ? (
                      <Pause className="w-4 h-4 text-[var(--text-dark-gray)] group-hover:text-[var(--base-color)] transition-colors" />
                    ) : (
                      <Play className="w-4 h-4 text-[var(--text-dark-gray)] group-hover:text-[var(--base-color)] transition-colors" />
                    )}
                  </button>
                  
                  {/* Slide counter */}
                  <div className="px-3 py-1.5 bg-[var(--white)]/90 backdrop-blur-sm rounded-full shadow-lg">
                    <span className="text-sm font-medium text-[var(--text-dark-gray)]">
                      {currentIndex + 1} / {images.length}
                    </span>
                  </div>
                </div>

                {/* Enhanced dot indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-3 px-4 py-2 bg-[var(--white)]/90 backdrop-blur-sm rounded-full shadow-lg">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        className={`relative transition-all duration-300 ${
                          index === currentIndex 
                            ? 'w-8 h-3 bg-[var(--base-color)] rounded-full' 
                            : 'w-3 h-3 bg-[var(--extra-medium-gray)] hover:bg-[var(--base-color)] rounded-full hover:scale-110'
                        } disabled:cursor-not-allowed`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--extra-medium-gray)]/30">
                  <div 
                    className="h-full bg-[var(--base-color)] transition-all duration-700 ease-out"
                    style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--base-color)]/10 rounded-full blur-xl opacity-70 animation-rotation"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--charcoal-blue)]/10 rounded-full blur-xl opacity-70 animation-rotation" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="order-1 xl:order-2 space-y-8">
            
            {/* Section badge */}
            <div className="flex items-center">
              <div className="w-12 h-px bg-[var(--base-color)] mr-4"></div>
              <span className="relative px-4 py-2 text-sm font-bold uppercase tracking-wider text-gradient-base-color bg-[var(--linen)] rounded-full border border-[var(--extra-medium-gray)]">
                About MifTech Solution
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold text-[var(--text-dark-gray)] leading-tight">
                Transforming Energy into Savings with 
                <span className="block text-[var(--base-color)] mt-2">
                  Innovative Heat Pump Technology
                </span>
              </h2>
              
              <div className="w-16 h-1 bg-[var(--base-color)] rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-[var(--text-dark-gray)] leading-relaxed opacity-80">
                At MifTech Solution, we don't just make products; we create assets that deliver 
                <strong className="text-[var(--text-dark-gray)] opacity-100"> real-life measurable savings</strong> and 
                generate lasting positive impact on our clients' bottom-line growth.
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--base-color)] rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--text-dark-gray)]">Energy Efficient</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--charcoal-blue)] rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--text-dark-gray)]">Cost Effective</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--gradient-fuel-yellow-start)] rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--text-dark-gray)]">Eco Friendly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--gradient-blue-start)] rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--text-dark-gray)]">Long Lasting</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/about" 
                className="group relative px-8 py-4 text-sm font-semibold text-[var(--white)] bg-[var(--dark-gray)] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden btn-gradient-fuel-yellow-blue"
              >
                <span className="relative z-10">Explore Details</span>
              </a>
              
              <a 
                href="/products" 
                className="group px-8 py-4 text-sm font-semibold text-[var(--text-dark-gray)] bg-[var(--white)] border-2 border-[var(--extra-medium-gray)] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[var(--base-color)] hover:text-[var(--base-color)]"
              >
                More Products
                <ChevronRight className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}