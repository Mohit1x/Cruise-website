"use client";

import {
  Navigation,
  Autoplay,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface CruiseCard {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  tags: string[];
}

const cruiseData: CruiseCard[] = [
  {
    id: 1,
    title: "Best Antarctic Cruises",
    description:
      "A Once-in-a-lifetime adventure for the brave who want to explore the white continent. Depart from Us...",
    image: "/antarctic-landscape-with-icebergs-and-penguins.jpg",
    price: "$8500",
    tags: ["Adventure", "Polar Regions"],
  },
  {
    id: 2,
    title: "Top Galápagos Cruises",
    description:
      "It's a journey to see the world through the eyes of a naturalist, coming face-to-face with its am...",
    image: "/galapagos-islands-with-cruise-ship-and-wildlife.jpg",
    price: "$7200",
    tags: ["Adventure", "Nature"],
  },
  {
    id: 3,
    title: "Last-Minute Deals",
    description:
      "We offer a selection of cruise deals to visit cities that are at the top of the bucket list. Last-minute cruis...",
    image: "/modern-city-skyline-with-cruise-ship-in-harbor.jpg",
    price: "$420",
    tags: ["Vacation", "Cities"],
  },
  {
    id: 4,
    title: "Mediterranean Escapes",
    description:
      "Discover ancient civilizations and stunning coastlines across the Mediterranean Sea with luxury amenities...",
    image: "/mediterranean-coastal-town-with-blue-waters.jpg",
    price: "$3200",
    tags: ["Culture", "Luxury"],
  },
   {
    id: 5,
    title: "Best Antarctic Cruises",
    description:
      "A Once-in-a-lifetime adventure for the brave who want to explore the white continent. Depart from Us...",
    image: "/antarctic-landscape-with-icebergs-and-penguins.jpg",
    price: "$8500",
    tags: ["Adventure", "Polar Regions"],
  },
];

export default function CarouselComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-4 px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-archivo">
        Plan Your Journey
      </h2>

      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        navigation={true}
        spaceBetween={16}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          640: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // laptops
          1280: { slidesPerView: 4 }, // desktops
        }}
        className="cruise-swiper relative"
      >
        {cruiseData.map((cruise) => (
          <SwiperSlide key={cruise.id}>
            <Card className="relative overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={cruise.image || "/placeholder.svg"}
                  alt={cruise.title}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-64 object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 text-xs px-2 py-1"
                  >
                    <Star size={14} fill="orange" className="text-orange-400" />
                    5.5
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-sky-600 text-lg mb-2">
                  {cruise.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {cruise.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {cruise.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Starts from</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-sm md:text-base font-bold text-amber-400 line-through">
                        {"$99999"}
                      </p>
                      <p className="text-lg md:text-xl font-bold text-sky-600">
                        {cruise.price}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-zinc-100 hover:bg-zinc-100 text-indigo-500/70 text-xs md:text-sm px-3 py-2 md:px-4 md:py-2">
                      Book Now
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
