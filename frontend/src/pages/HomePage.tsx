import { propularDestination } from "@/constansts/utils";
import HeroComponent from "../components/Home-components/HeroComponent";
import CarouselComponent from "@/components/Home-components/CarouselComponent";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <CarouselComponent
        tag="Popular Destinations"
        data={propularDestination}
      />
      <CarouselComponent
        tag="Popular Departure Ports"
        data={propularDestination}
      />
    </div>
  );
};

export default HomePage;
