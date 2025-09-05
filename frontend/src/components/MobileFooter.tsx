import { AiFillHome } from "react-icons/ai";
import { FaShip  } from "react-icons/fa";
import { Link, useLocation } from "react-router";

export const MobileFooter = () => {
  const location = useLocation();
  return (
    <div className="fixed bottom-0 w-full bg-white border-t-2 flex items-center z-50 
                md:w-[50%] md:left-1/2 md:-translate-x-1/2">
      <div className="w-1/2 text-center py-3">
       <Link to={"/"}>
        <div
          className={`flex flex-col items-center justify-center ${
            location.pathname === "/" ? "text-black" : "text-gray-400"
          }`}
        >
          <AiFillHome size={24} />
          <span>Home</span>
        </div>
       </Link>
      </div>
      <div className="w-1/2 text-center py-3">
        <Link to={"/go-to-a-trip"}>
        <div
          className={`flex flex-col items-center justify-center ${
            location.pathname === "/go-to-a-trip" ? "text-black" : "text-gray-400"
          }`}
        >
          <FaShip  size={24} />
          <span>Go on a trip</span>
        </div>
        </Link>
      </div>
    </div>
  );
};
