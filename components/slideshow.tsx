"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/slideshow1.jpg",
    alt: "",
    orientation: "lanscape",
  },
  {
    id: 2,
    image: "/slideshow2.jpeg",
    alt: "",
    orientation: "portrait",
  },
  {
    id: 3,
    image: "/slideshow3.jpg",
    alt: "",
    orientation: "landscape",
  },
  {
    id: 4,
    image: "/slideshow4.jpg",
    alt: "",
    orientation: "portrait",
  },
  {
    id: 4,
    image: "/slideshow5.jpg",
    alt: "",
    orientation: "portrait",
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 5 seconds
  //   useEffect(() => {
  //     const timer = setInterval(nextSlide, 5000);
  //     return () => clearInterval(timer);
  //   }, []);

  const currentSlideData = slides[currentSlide];
  const isPortrait = currentSlideData.orientation === "portrait";

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <div className="relative h-full flex items-center justify-center">
        <div
          className={`relative ${
            isPortrait ? "h-full w-3xl" : "w-full h-full"
          }`}
          style={isPortrait ? { width: "50%" } : {}}
        >
          <Image
            src={currentSlideData.image || "/placeholder.svg"}
            alt={currentSlideData.alt}
            fill
            priority
            className={`transition-all rounded-lg duration-500 ${
              isPortrait ? "object-contain object-center" : "object-cover"
            }`}
          />
        </div>

        {/* Orientation indicator
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {isPortrait ? "Portrait" : "Landscape"}
        </div>
         */}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            } ${
              slide.orientation === "portrait" ? "border border-white/30" : ""
            }`}
            aria-label={`Go to slide ${index + 1} (${slide.orientation})`}
          />
        ))}
      </div>
    </div>
  );
}
