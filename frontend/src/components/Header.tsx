import { useState } from "react";
import { SpinWheelModal } from "./SpinWheelModal";
import { Link, useLocation } from "react-router";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const location = useLocation();
    const currentLocation = location.pathname

  return (
  <>
    <div className={`${currentLocation == "/account" ? 'hidden':'block'}`}>
      <div className="flex flex-col px-2 md:px-0">
        <div className="">
          <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
            <div className="font-semibold text-blue-500 text-2xl">
              CRUISE
            </div>
            <div className="flex items-center gap-2 md:gap-5">
            <Link to={"/admin/dashboard"}><h1>Admin</h1></Link>
            <img src="/spin-icon.png" className="h-8 w-8 md:h-12 md:w-12" onClick={()=>setIsModalOpen(true)}/>
            <img src="/shield-icon.png" className="h-8 w-8 md:h-12 md:w-12"/>
            <img src="/message-icon.png" className="h-8 w-8 md:h-12 md:w-12"/>
            <Link to={"/account"}><img src="/avatar-icon.png" className="h-10 w-10 md:h-12 md:w-12"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      <SpinWheelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
  );
};

export default Header;
