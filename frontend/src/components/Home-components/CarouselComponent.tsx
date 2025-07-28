type CarouselComponentProps = {
  tag: string;
  data: {
    id: number;
    name: string;
    image: string;
    reviews: number;
    price: number;
  }[];
};

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Link } from "react-router";

const CarouselComponent = ({ tag, data }: CarouselComponentProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">{tag}</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Link to={`/find-a-cruise/${item.id}`}>
                <div className="">
                  <Card className="overflow-hidden rounded-md shadow-md group cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[200px] object-cover transition duration-300 group-hover:scale-125"
                    />
                    <CardContent className="p-2 space-y-1">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <div className="flex items-center text-sm text-gray-600 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="orange"
                            className="text-orange-400"
                          />
                        ))}
                        <span className="ml-2">
                          {item.reviews.toLocaleString()} Reviews
                        </span>
                      </div>
                      <p className="text-base font-bold text-black mt-1">
                        From A${item.price.toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
