import { FaBullhorn } from "react-icons/fa";

export const PromoBar = () => {
  return (
    <div className="bg-[#00285F] flex items-center justify-center h-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center text-white text-md font-[500] font-sans gap-2">
          <FaBullhorn className="text-white text-base" />
          <h1 className="text-slate-100 font-semibold">
            Cruise Critic is turning 30! Join us in celebrating three decades of
            building our cruise community.
            <span className="ml-1 underline">Discover More</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
