import React, { useState, useEffect, useRef } from 'react';

export default function Carousel({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const MIN_SWIPE = 50;

  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) >= MIN_SWIPE) {
      delta > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (slides.length === 0) return null;

  return (
    <div
      className="relative w-full px-3 sm:px-4 md:px-6 lg:px-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative mx-auto w-full max-w-[1600px] scale-[0.96] transform-gpu overflow-hidden rounded-2xl shadow-2xl sm:scale-[0.95]">
        {/* Slide Stack - height driven by the image itself */}
        <div className="relative w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${index === currentSlide ? 'relative' : 'absolute inset-0 pointer-events-none'} transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {slide.backgroundImage ? (
                <img
                  src={slide.backgroundImage}
                  alt={slide.title || `Slide ${index + 1}`}
                  className="block w-full h-auto"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                />
              ) : (
                <div
                  className="w-full aspect-video"
                  style={{ background: slide.fallbackGradient }}
                />
              )}
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="flex absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 focus:outline-none shadow-lg items-center justify-center"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="flex absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 focus:outline-none shadow-lg items-center justify-center"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none shadow-lg ${
                    index === currentSlide
                      ? 'w-8 sm:w-12 h-2 sm:h-3 bg-white'
                      : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
