import { IoSearchOutline } from "react-icons/io5";
import { navItems } from "../constansts/utils";
import { PromoBar } from "./PromoBar";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div>
        <PromoBar />
      </div>
      <div className="">
        <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
          <div className="font-semibold text-blue-500 text-2xl">CRUISE APP</div>
          <div className="flex items-center gap-10">
            {navItems.map((nav) => (
              <h1 className="font-semibold cursor-pointer text-[#00285F]">
                {nav.name}
              </h1>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <IoSearchOutline size={24} className="cursor-pointer" />
            <CiHeart size={24} className="cursor-pointer" />
            <div className="flex items-center bg-[#00285F] hover:bg-blue-900 text-white p-3 font-semibold rounded-full cursor-pointer">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
