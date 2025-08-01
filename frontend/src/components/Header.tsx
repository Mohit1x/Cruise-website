import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col px-2 md:px-0">
        <div className="">
          <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
            <div className="font-semibold text-blue-500 text-2xl">
              CRUISE
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
    </div>
  );
};

export default Header;
