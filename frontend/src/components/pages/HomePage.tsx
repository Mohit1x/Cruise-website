import { otherPortsData, propularDestination } from "@/constants/utils";
import HeroComponent from "@/components/Home/HeroComponent";
import CarouselComponent from "@/components/Home/CarouselComponent";
import { OtherPorts } from "@/components/Home/OtherPorts";
import { MobileHero } from "@/components/Home/MobileHero";
import FeaturesSection from "@/components/Home/FeaturedComponent";

const HomePage = () => {
  return (
    <div className="">
      <div className="space-y-2 flex flex-col p-4 bg-blue-500 text-white mb-5 md:hidden">
        <h1 className="text-xl font-">Start Traveling Now</h1>    
        <p className="text-sm">Get Cruise and hotels worldwide for your trip with the best deals </p>  
      </div>
      <div className="block md:hidden"><HeroComponent /></div>
      <div className="hidden md:block">
      <MobileHero />

      </div>
      <div className="px-5 md:max-w-6xl mx-auto flex flex-col gap-5 py-10">
      <FeaturesSection/>
        <CarouselComponent
          tag="Popular Destinations"
          data={propularDestination}
        />
        <CarouselComponent
          tag="Popular Departure Ports"
          data={propularDestination}
        />
        <OtherPorts data={otherPortsData} />
      </div>
    </div>
  );
};

export default HomePage;
