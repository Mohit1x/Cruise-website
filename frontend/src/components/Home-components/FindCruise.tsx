"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Anchor,
  CalendarIcon,
  Ship,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const destinations = [
  "Any Destination",
  "Caribbean",
  "Mediterranean",
  "Alaska",
  "Northern Europe",
  "Asia",
  "South Pacific",
];

const departurePorts = [
  "Any Departure Port",
  "Miami, FL",
  "Fort Lauderdale, FL",
  "Barcelona, Spain",
  "Rome, Italy",
  "Seattle, WA",
  "Vancouver, BC",
];

const cruiseLines = [
  "Any Cruise Line",
  "Royal Caribbean",
  "Norwegian Cruise Line",
  "Carnival Cruise Line",
  "Princess Cruises",
  "Holland America Line",
  "Celebrity Cruises",
];

const ports = [
  "Any Port",
  "Cozumel, Mexico",
  "Nassau, Bahamas",
  "St. Thomas, USVI",
  "Barbados",
  "St. Maarten",
  "Jamaica",
];

const ships = [
  "Any Ship",
  "Symphony of the Seas",
  "Norwegian Bliss",
  "Carnival Vista",
  "Princess Crown",
  "Eurodam",
  "Celebrity Edge",
];

const cruiseLengths = [
  "Any Length",
  "3-5 Days",
  "6-8 Days",
  "9-12 Days",
  "13-15 Days",
  "16+ Days",
];

const regionFilters = [
  "South Pacific",
  "Caribbean - Eastern",
  "South America",
  "Europe",
  "Holland America Line to Australia & New Zealand",
  "Asia",
];

export default function FindCruise() {
  const [destination, setDestination] = useState("Any Destination");
  const [departurePort, setDeparturePort] = useState("Any Departure Port");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [cruiseLine, setCruiseLine] = useState("Any Cruise Line");
  const [port, setPort] = useState("Any Port");
  const [ship, setShip] = useState("Any Ship");
  const [cruiseLength, setCruiseLength] = useState("Any Length");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  return (
    <div className="w-full bg-[#2062AE] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-black">
              <MapPin className="h-5 w-5 text-gray-600" />
              <div className="flex-1">
                <label className="text-sm font-medium text-black block mb-1 text-start">
                  Destination
                </label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="border-0 p-0 h-auto shadow-none text-black flex items-center justify-between w-full">
                    <SelectValue placeholder="Any Destination" />
                  </SelectTrigger>
                  <SelectContent className="text-center w-full">
                    {destinations.map((dest) => (
                      <SelectItem key={dest} value={dest}>
                        {dest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-black">
              <Anchor className="h-5 w-5 text-gray-600" />
              <div className="flex-1">
                <label className="text-sm font-medium text-black block mb-1 text-start">
                  Departure Port
                </label>
                <Select value={departurePort} onValueChange={setDeparturePort}>
                  <SelectTrigger className="border-0 p-0 h-auto shadow-none text-black flex items-center justify-between w-full">
                    <SelectValue placeholder="Any Departure Port" />
                  </SelectTrigger>
                  <SelectContent>
                    {departurePorts.map((port) => (
                      <SelectItem key={port} value={port}>
                        {port}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-black">
              <CalendarIcon className="h-5 w-5 text-gray-600" />
              <div className="flex-1">
                <label className="text-sm font-medium text-black block mb-1 text-start">
                  Departure Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal p-0 h-auto shadow-none border-0 text-black",
                        !departureDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? (
                        format(departureDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 px-8 rounded-lg text-lg">
                Find a Cruise
              </Button>
            </div>
          </div>
        </div>

        <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/10 mb-4 mx-auto flex items-center gap-2"
            >
              Advanced Search
              {isAdvancedOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-black">
                <Ship className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 block mb-1 text-start">
                    Cruise Line
                  </label>
                  <Select value={cruiseLine} onValueChange={setCruiseLine}>
                    <SelectTrigger className="border-0 p-0 h-auto shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cruiseLines.map((line) => (
                        <SelectItem
                          key={line}
                          value={line}
                          className="text-black"
                        >
                          {line}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-black">
                <Anchor className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 block mb-1 text-start">
                    Port
                  </label>
                  <Select value={port} onValueChange={setPort}>
                    <SelectTrigger className="border-0 p-0 h-auto shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ports.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-black">
                <Ship className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 block mb-1 text-start">
                    Ship
                  </label>
                  <Select value={ship} onValueChange={setShip}>
                    <SelectTrigger className="border-0 p-0 h-auto shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ships.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-black">
                <Clock className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 block mb-1 text-start">
                    Cruise Length
                  </label>
                  <Select value={cruiseLength} onValueChange={setCruiseLength}>
                    <SelectTrigger className="border-0 p-0 h-auto shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cruiseLengths.map((length) => (
                        <SelectItem key={length} value={length}>
                          {length}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex flex-wrap gap-3 mt-6">
          {regionFilters.map((region) => (
            <Badge
              key={region}
              className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-[#00285F] hover:text-white`}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {region}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
