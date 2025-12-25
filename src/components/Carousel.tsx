import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: { src: string; alt: string }[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Calculate visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const goToPrevious = () => {
    const maxIndex = Math.max(0, images.length - visibleCards);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, images.length - visibleCards);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, images.length - visibleCards);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const maxIndex = Math.max(0, images.length - visibleCards);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCards, images.length]);

  // Calculate card width and spacing (no overlap)
  // Each card takes up 1/visibleCards of the width, with gap between them
  const cardWidthPercent = 100 / visibleCards;
  const translateX = currentIndex * cardWidthPercent;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden py-8">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {images.map((image, index) => {
            const position = index - currentIndex;
            const isVisible = position >= 0 && position < visibleCards;
            
            return (
              <div
                key={index}
                className="flex-shrink-0 transition-all duration-500 px-2"
                style={{ 
                  width: `${cardWidthPercent}%`,
                  opacity: isVisible ? 1 : 0.3,
                }}
              >
                <div className="relative group">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] bg-white">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '650px' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-gray-900 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-gray-900 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        {Array.from({ length: Math.max(1, images.length - visibleCards + 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-200 rounded-full ${
              index === currentIndex
                ? 'bg-gray-800 w-8 h-3'
                : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
