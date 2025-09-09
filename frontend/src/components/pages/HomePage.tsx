import { otherPortsData } from "@/constants/utils";
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
        <div className="w-full md:w-7xl mx-auto px-2 md:px-0 z-30">
          <CarouselComponent />
        </div>
        <div className="w-full md:w-7xl mx-auto px-2 md:px-0 ">
          <OtherPorts data={otherPortsData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
