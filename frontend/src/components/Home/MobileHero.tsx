import { useState } from "react"
import ChatBubble from "./ChatBubble"

export const MobileHero = ()=>{
  const [isChatOpen, setIsChatOpen] = useState(true)

  return(
    <div className="h-full w-full relative">
      <img 
        src="/hero-bg-new.png" 
        className="h-full w-full object-cover object-center"
      />

      <button onClick={()=>setIsChatOpen(!isChatOpen)} className="hidden md:block text-[#2455AD] bg-white md:p-[4px] lg:py-2 lg:px-4 w-fit rounded-full absolute 
        right-1/3 md:bottom-2 lg:bottom-2 xl:bottom-8 md:text-sm lg:text-lg font-bold cursor-pointer">
        Click here
      </button>

      <div className="hidden md:block absolute right-1 bottom-1 z-50">
        <ChatBubble isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen}/>
      </div>
    </div>
  )
}
