import { motion } from "framer-motion";

export default function Demo() {
  return (
    // Container
    <div className="relative w-full h-screen">
      <motion.img
        initial={{
          opacity: 0,
          scale: 0,
          borderRadius: "50%", // start fully circular
        }}
        animate={{
          opacity: 1,
          scale: 1,
          borderRadius: "20px", // morph into rounded rectangle
        }}
        transition={{
          duration: 2,
          type: "spring",
          ease: [0.23, 1.0, 0.65, 0.85], // smooth modern cubic-bezier
        }}
        src="https://i.pinimg.com/736x/f8/38/01/f83801e1b68c69a2afff7b4bec2d4e7e.jpg"
        className="absolute top-10 right-10 w-3xl h-4xl mask-ticket"
        style={{
          WebkitMaskImage: "url('/mask.png')",
          maskImage: "url('/mask.png')",
        }}
      />

      <motion.div 
       initial={{
        width:0,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        width:150,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
        type: "spring",
        ease: [0.23, 1.0, 0.65, 0.85], // smooth modern cubic-bezier
      }}
      className="absolute w-[11%] h-9 top-19 right-60 rounded-xl bg-black text-white text-center text-xl ">
        Christian Bale
      </motion.div>
    </div>
  );
}
