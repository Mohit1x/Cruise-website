import FindCruise from "./FindCruise";

export default function HeroComponent() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[55vh]">
        <img
          src="/hero-bg.jpg"
          alt="Cruise Background"
          className="w-full h-full object-cover"
        />

        <svg
          className="absolute bottom-[-1px] left-0 w-full h-20 text-[#2062AE] rotate-180"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C750,100 750,-50 1500,50 L1500,-4 L0,-4 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="bg-[#2062AE] text-white px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find a Cruise</h1>
        <p className="text-lg md:text-2xl text-blue-100">
          Easily compare prices from multiple sites with one click
        </p>

        <div className="mt-10 hidden md:block">
          <FindCruise />
        </div>
      </div>
    </div>
  );
}
