"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import useEmblaCarousel from "embla-carousel-react"
import {
  ChevronLeft,
  Plus,
  User,
  FileText,
  Globe,
  TrendingUp,
  Users,
  Grid2X2,
  Lock,
  HelpCircle,
  Info,
} from "lucide-react"
import { Link } from "react-router"

export default function AccountPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => emblaApi.off("select", onSelect)
  }, [emblaApi])

  const functionItems = [
    [
      { icon: FileText, label: "Details" },
      { icon: Globe, label: "Language" },
      { icon: TrendingUp, label: "Level" },
      { icon: Users, label: "Team" },
    ],
    [
      { icon: Users, label: "Team" },
      { icon: Lock, label: "Password" },
      { icon: HelpCircle, label: "Help" },
      { icon: Info, label: "About us" },
    ],
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="w-full max-w-7xl mx-auto bg-white shadow-lg min-h-screen 
                      lg:max-w-6xl lg:my-8 lg:rounded-2xl lg:overflow-hidden lg:min-h-[800px]"
      >
 
        <div className="flex items-center justify-between p-4 md:p-6 lg:p-8 bg-white border-b">
         <Link to={"/"}>
          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
            <ChevronLeft size={16} className="h-10 w-10 md:h-10 md:w-10" />
          </Button>
         </Link>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">My Account</h1>
          <div className="w-8 md:w-10" /> 
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
          <div
            className="relative bg-gradient-to-br from-blue-500 to-blue-600 px-6 py-8 text-white
                          md:px-8 md:py-12 lg:rounded-2xl lg:h-fit"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/20 
                              md:top-6 md:right-6 md:w-24 md:h-24"
              ></div>
              <div
                className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 
                              md:top-12 md:right-12 md:w-16 md:h-16"
              ></div>
              <div
                className="absolute bottom-6 left-6 w-16 h-16 rounded-full border border-white/20 
                              md:bottom-8 md:left-8 md:w-20 md:h-20"
              ></div>
            </div>

            <div className="relative z-10 flex items-center space-x-4 mb-6 md:mb-8">
              <Avatar className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-white/20 border-2 border-white/30">
                <AvatarFallback className="bg-transparent">
                  <User className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm md:text-base opacity-90">UID: 17550472</p>
                <p className="text-lg md:text-xl lg:text-2xl font-medium">1111****</p>
              </div>
            </div>

            <Button
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 mb-4 
                               md:py-4 md:text-lg lg:py-5"
              size="lg"
            >
              <span>Increase Your Assets</span>
              <Plus className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <div className="flex space-x-3 md:space-x-4">
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white
                           md:py-3 md:text-base"
              >
                Bind Account
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white
                           md:py-3 md:text-base"
              >
                Cash Out
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:justify-between">
            <Card
              className="mx-4 -mt-6 relative z-10 shadow-lg 
                             md:mx-6 md:-mt-8 lg:mx-0 lg:mt-0 lg:shadow-xl"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center space-x-2 mb-6 md:mb-8">
                  <Grid2X2 className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">My Functions</h2>
                </div>

                <div className="lg:hidden">
                  
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      {functionItems.map((page, pageIndex) => (
                        <div key={pageIndex} className="flex-[0_0_100%] min-w-0">
                          <div className="grid grid-cols-4 gap-4 px-2 md:gap-6">
                            {page.map((item, index) => (
                              <button
                                key={index}
                                className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-gray-50 transition-colors
                                           md:p-4 md:space-y-3"
                              >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                  <item.icon className="h-6 w-6 md:h-8 md:w-8 text-gray-600" />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700 font-medium">{item.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                    {functionItems.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                          selectedIndex === index ? "bg-gray-800" : "bg-gray-300"
                        }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                      />
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="grid grid-cols-4 gap-6 xl:gap-8">
                    {[...functionItems[0], ...functionItems[1]].map((item, index) => (
                      <button
                        key={index}
                        className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors
                                   xl:p-6 xl:space-y-4"
                      >
                        <div className="w-16 h-16 xl:w-20 xl:h-20 bg-gray-100 rounded-full flex items-center justify-center">
                          <item.icon className="h-8 w-8 xl:h-10 xl:w-10 text-gray-600" />
                        </div>
                        <span className="text-sm xl:text-base text-gray-700 font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex-1 min-h-[80px] md:min-h-[100px] lg:min-h-[60px]"></div>

            <Link to={"/auth"}>
            <div className="p-4 md:p-6 lg:p-0">
              <Button
                variant="destructive"
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 
                           md:py-4 md:text-lg lg:py-5"
                size="lg"
              >
                Log out
              </Button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
