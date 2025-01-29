'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
}

const bannerSlides: BannerSlide[] = [
  {
    image: "/images/banner.avif",
    title: "Shop the Latest Trends",
    subtitle: "Discover our new collection",
  },
  {
    image: "/images/banner1.avif",
    title: "Summer Sale",
    subtitle: "Up to 50% off on selected items",
  },
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
  };

  return (
    <div>
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerSlides.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full"
              style={{ left: `${index * 100}%` }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl mb-8">
                        {slide.subtitle}
                      </p>
                      <button className="bg-primary text-white px-8 py-3  text-lg font-semibold hover:bg-primary/90 border rounded-full transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute border border-primary left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute border border-primary right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
