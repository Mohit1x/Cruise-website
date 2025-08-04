'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages = ["/hero-banner-1.png", "/hero-banner-2.png"];

export default function HeroComponent() {
  return (
    <div className="relative w-full h-64 md:h-auto overflow-hidden rounded-lg">
      {/* Blurred background for desktop */}
      <img
        src="/hero-banner-1.png"
        alt="Blurred Background"
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg scale-110 z-0 hidden md:block"
      />

      {/* Carousel container */}
      <div className="relative w-full h-full md:h-auto z-10 rounded-lg overflow-hidden">
        <Carousel className="w-full h-full md:h-auto">
          <CarouselContent className="h-full md:h-auto">
            {heroImages.map((src, index) => (
              <CarouselItem key={index} className="h-full md:h-auto">
                <div className="w-full h-full md:h-auto flex items-center justify-center p-2 md:p-0">
                  <img
                    src={src}
                    alt={`Hero Banner ${index + 1}`}
                    className="max-w-full max-h-full md:w-full md:h-auto object-contain md:object-cover rounded-md md:rounded-lg shadow-lg md:shadow-none"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}