import { otherPortsData, propularDestination } from "@/constansts/utils";
import HeroComponent from "../components/Home-components/HeroComponent";
import CarouselComponent from "@/components/Home-components/CarouselComponent";
import { OtherPorts } from "@/components/Home-components/OtherPorts";
import { NewHeroComponent } from "@/components/Home-components/NewHeroComponent";

const HomePage = () => {
  return (
    <div className="">
      <div className="block md:hidden"><HeroComponent /></div>
      <div className="hidden md:block">
      <NewHeroComponent/>

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
        <CarouselComponent tag="Popular Ships" data={propularDestination} />
        <CarouselComponent tag="Cruise by length" data={propularDestination} />
        <OtherPorts data={otherPortsData} />
      </div>
    </div>
  );
};

export default HomePage;
