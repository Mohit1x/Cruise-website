import { useState } from "react";

type dataType = {
  name: string;
  image: string;
  ports: number;
};

type OtherPortsProps = {
  data: dataType[];
};

export const OtherPorts = ({ data }: OtherPortsProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 8);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-bold">
        <h1>Other Departure Ports</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {visibleData.map((port) => (
          <div
            key={port.name}
            className="flex items-center gap-3 cursor-pointer hover:underline"
          >
            <div>
              <img
                className="h-20 w-20 rounded object-cover"
                src={port.image}
                alt={port.name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">{port.name}</h1>
              <h1 className="text-sm text-gray-700">
                {port.ports} <span>itineraries</span>
              </h1>
            </div>
          </div>
        ))}
      </div>

      {data.length > 8 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-blue-500 hover:underline font-semibold self-start cursor-pointer"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};
