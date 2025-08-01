'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages = ["/hero-banner-1.png", "/hero-banner-2.png"];

export default function HeroComponent() {
  return (
    <div className="relative w-full md:aspect-[3/2] overflow-hidden rounded">
      <img
        src="/hero-banner-1.png"
        alt="Blurred Background"
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg scale-110 z-0 hidden md:block"
      />

      <div className="relative w-full h-full z-10 px-2 rounded overflow-hidden">
        <Carousel>
          <CarouselContent>
            {heroImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Hero Banner ${index + 1}`}
                    className="w-full h-full object-contain object-center rounded-inherit"
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
