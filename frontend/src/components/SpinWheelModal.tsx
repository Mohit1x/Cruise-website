// components/SpinWheelModal.tsx
import { useRef, useState } from "react";
import { gsap } from "gsap";

const prizes = [
  "1st Prize", "2nd Prize", "3rd Prize", "4th Prize",
  "5th Prize", "6th Prize", "7th Prize", "8th Prize"
];

const SpinWheelModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const rotation = 360 * 5 + prizeIndex * (360 / prizes.length);

    gsap.to(wheelRef.current, {
      rotation: `-=${rotation}`,
      duration: 4,
      ease: "power4.out",
      onComplete: () => {
        setSpinning(false);
        setResult(prizes[prizeIndex]);
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-center mb-4">Deposit Amount <br /><span className="text-2xl text-blue-600 font-extrabold">Rewards</span></h2>

        <div className="relative mx-auto my-4 w-64 h-64 rounded-full border-[10px] border-orange-500" ref={wheelRef}>
          {prizes.map((prize, i) => (
            <div
              key={i}
              className="absolute w-1/2 h-1/2 top-1/2 left-1/2 origin-top-left text-xs text-white font-bold flex items-center justify-center"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-100%)`,
                backgroundColor: i % 2 === 0 ? "#f97316" : "#fb923c",
                clipPath: "polygon(0 0, 100% 0, 0 100%)"
              }}
            >
              {prize}
            </div>
          ))}
        </div>

        <button
          onClick={spin}
          className="mx-auto block mt-4 bg-orange-600 text-white px-6 py-2 rounded-full font-bold"
          disabled={spinning}
        >
          {spinning ? "Spinning..." : "GO"}
        </button>

        {result && <div className="text-center mt-4 font-semibold text-green-600">You won: {result}</div>}
      </div>
    </div>
  );
};

export default SpinWheelModal;
