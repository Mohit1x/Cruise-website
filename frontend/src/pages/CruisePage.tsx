"use client";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Share, Star, Calendar } from "lucide-react";
import { cruisesFromAuckland } from "@/constansts/cruise-data";
import { Pagination } from "@/components/Pagination";

const ITEMS_PER_PAGE = 4;

export const CruisePage = () => {
  const { id } = useParams<{ id: string }>();
  const [page, setPage] = useState(1);

  const total = cruisesFromAuckland.length;
  const pageCount = Math.ceil(total / ITEMS_PER_PAGE);
  const pagedCruises = cruisesFromAuckland.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Cruises from {id?.toUpperCase()}
      </h1>

      <div className="space-y-6">
        {pagedCruises.map((cruise) => (
          <Card key={cruise.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {cruise.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="relative h-64 lg:h-80">
                            <img
                              src={img || "/placeholder.svg"}
                              alt={`${cruise.name} ${i + 1}`}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-4 left-4">
                              <Badge
                                variant="secondary"
                                className="bg-black/70 text-white hover:bg-black/70"
                              >
                                {"Celebrity Edge"}
                              </Badge>
                            </div>
                            <div className="absolute top-4 left-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-xs font-bold text-blue-600">
                                  365
                                </span>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>

                <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {cruise.nights} Nights
                        </Badge>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {cruise.name}
                        </h2>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Leaving from:</span>{" "}
                        {id
                          ? id.charAt(0).toUpperCase() + id.slice(1)
                          : ""
                        }

                        <span className="text-blue-600 font-medium ml-1">
                          +7 ports
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 fill-current text-yellow-400"
                          />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-blue-600 font-medium">
                        {cruise.reviews.toLocaleString()} reviews
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">X</span>
                      </div>
                      <span className="font-medium text-gray-700">
                        {cruise.line}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end mt-6 pt-4 border-t">
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">
                        No prices currently available for this sailing.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">
                        {cruise.departureDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Pagination
          totalPages={pageCount}
          currentPage={page}
          onPageChange={(n: any) => setPage(n)}
        />
      </div>
    </div>
  );
};
