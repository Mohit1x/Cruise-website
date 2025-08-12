import { otherPortsData, propularDestination } from "@/constansts/utils";
import HeroComponent from "../components/Home-components/HeroComponent";
import CarouselComponent from "@/components/Home-components/CarouselComponent";
import { OtherPorts } from "@/components/Home-components/OtherPorts";
import { NewHeroComponent } from "@/components/Home-components/NewHeroComponent";

const HomePage = () => {
  return (
    <div className="">
      <div className="space-y-2 flex flex-col p-4 bg-blue-500 text-white mb-5">
        <h1 className="text-xl font-">Start Traveling Now</h1>    
        <p className="text-sm">Get Cruise and hotels worldwide for your trip with the best deals </p>  
      </div>
      <div className="block md:hidden"><HeroComponent /></div>
      <div className="hidden md:block">
      <NewHeroComponent />

      </div>
      <div className="px-5 md:max-w-6xl mx-auto flex flex-col gap-5 py-10">
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
