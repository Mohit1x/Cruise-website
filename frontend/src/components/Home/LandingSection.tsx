import { FaPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import ChatBubble from "./ChatBubble";

export default function LandingSection() {
  const [entered, setEntered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -top-5 left-0 w-full h-full object-cover mask-ticket"
        style={{
          WebkitMaskImage: "url('/v.png')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: "url('/v.png')",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      >
        <source
          src="https://res.cloudinary.com/dsig0ikjq/video/upload/f_auto:video,q_auto/v1/arunaa-ui/o4ifxglahkwmf2hsp1ek"
          type="video/mp4"
        />
      </video>

      {/* Bluish overlay */}
      <div className="absolute -top-5 left-0 w-full h-full bg-sky-500/70 mix-blend-overlay pointer-events-none"></div>

      <div className="absolute bottom-20 left-3/12 rotate-12 z-10 opacity-80 height-96 w-96">
        <motion.img
          id="boat"
          src="/boat.png"
          alt=""
          initial={{ y: 200, rotate: 0 }}
          animate={
            entered
              ? { y: [0, -8, 0, -5, 0], rotate: [0, 2, -2, 1, 0] } // floating loop
              : { y: [400, 0], rotate: [0, -5, 3, -3, 2, 0] } // entry
          }
          transition={
            entered
              ? { duration: 4, ease: "easeInOut", repeat: Infinity }
              : {
                  duration: 4,
                  ease: "easeInOut",
                  onComplete: () => setEntered(true),
                }
          }
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div className="text-black"
             initial={{
              x: -1000,
              opacity: 0
            }}
            animate={{
              x:0,
              opacity: 1,
            }}
            transition={{
              duration: 3,
              type: "spring",
              ease: [0.23, 1.0, 0.65, 0.85]
            }}
            >
              <h1 className="text-6xl md:text-7xl text-balance font-bangers">
                Cruise
                <br />
                Your Way
              </h1>

              {/* Features List */}
              <div className="mt-5 space-y-1">
                <div className="flex items-center gap-3 text-lg text-black font-archivo">
                  <span>34+ Exclusive Benefits for You</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-black/80 font-archivo">
                  <FaPlane size={16} />
                  <span>Premium amenities included</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div className="text-black lg:text-right z-30"
              initial={{
                x: 1000,
                opacity: 0
              }}
              animate={{
                x:0,
                opacity: 1,
              }}
              transition={{
                duration: 3,
                type: "spring",
                ease: [0.23, 1.0, 0.65, 0.85]
              }}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-balance mb-8 font-archivo">
                Discover the world with ease—whether you're chasing sunsets,
                exploring ancient streets, or escaping to quiet beaches.
              </p>

              <Button
                size="lg"
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105"
              >
                Book Your Trip →
              </Button>
            </motion.div>
            <div className="hidden md:block absolute right-1 bottom-1 z-50">
              <ChatBubble
                isChatOpen={isChatOpen}
                setIsChatOpen={setIsChatOpen}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="absolute bottom-18 left-[64%] transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-6 bg-black/70 backdrop-blur-lg rounded-full px-8 py-4 text-white">
          <div className="text-center">
            <div className="text-sm font-medium">Rewards Program</div>
          </div>
          <div className="w-px h-6 bg-white/30"></div>
          <div className="text-center">
            <div className="text-sm font-medium">Travel Insurance</div>
          </div>
          <div className="w-px h-6 bg-white/30"></div>
          <div className="text-center">
            <div className="text-sm font-medium">Custom Trip</div>
          </div>
        </div>
      </div>
    </div>
  );
}
