"use client"

import { ChevronRight, Plus } from "lucide-react"
import { Navigation, Autoplay, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

type dataType = {
  name: string
  image: string
  ports: number
}

type OtherPortsProps = {
  data: dataType[]
}

export const OtherPorts = ({ data }: OtherPortsProps) => {

  return (
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-200 rounded-full flex items-center justify-center">
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 tracking-wide">Other Ports</h1>
        </div>
        <div className="text-sm sm:text-base text-gray-600 sm:ml-auto sm:max-w-xs lg:max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet morbi pulvinar
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        navigation={true}
        spaceBetween={12}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          480: { slidesPerView: 1.5, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 16 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="cruise-swiper relative mb-4 sm:mb-6"
      >
        {data.map((port, index) => (
          <SwiperSlide key={index}>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="aspect-[4/3] relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={port.image || "/placeholder.svg"}
                  alt={port.name}
                />
                <div className="absolute inset-0 bg-opacity-20 flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">{port.name}</h3>
                    <p className="text-xs opacity-90">{port.ports} ports</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <p className="text-gray-700 text-sm sm:text-base">We've got plenty more port for you to consider</p>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer self-end sm:self-auto">
          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white" />
          </div>
          All Port Stays
        </div>
      </div>
    </div>
  )
}
