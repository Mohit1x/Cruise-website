import { otherPortsData, propularDestination } from "@/constants/utils";
import CarouselComponent from "@/components/Home/CarouselComponent";
import { OtherPorts } from "@/components/Home/OtherPorts";
import FeaturesSection from "@/components/Home/FeaturedComponent";
import LandingSection from "../Home/LandingSection";

const HomePage = () => {
  return (
    <div className="">
      <LandingSection />
      <div className="hidden md:block"></div>
      <div className="mx-auto flex flex-col gap-5 py-10">
        <FeaturesSection />
        <div className="w-6xl mx-auto px-4 md:px-0 space-y-10">
          <CarouselComponent
            tag="Popular Destinations"
            data={propularDestination}
          />
          <CarouselComponent
            tag="Popular Departure Ports"
            data={propularDestination}
          />
        </div>

        <OtherPorts data={otherPortsData} />
      </div>
    </div>
  );
};

export default HomePage;
