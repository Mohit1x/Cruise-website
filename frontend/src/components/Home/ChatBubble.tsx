
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ChatBubbleProps {
    isChatOpen: boolean;
    setIsChatOpen: (isOpen: boolean) => void;
}
export default function ChatBubble({ isChatOpen, setIsChatOpen }: ChatBubbleProps) {

  return (
    <>
      {isChatOpen && (
        <div className="bottom-24 right-6 lg:bottom-32 lg:right-32 w-80 max-w-[calc(100vw-3rem)] z-40">
          <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Live Chat Support</h3>
                <Button
                  onClick={() => setIsChatOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-blue-600 h-6 w-6 p-0"
                >
                  ×
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">Hi! How can we help you with your cruise booking today?</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                  Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
