import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AuthPage = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openModal = (type: "login" | "register") => {
    setModalType(type);
    setIsDialogOpen(true);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-400 overflow-hidden relative">
      <div
        style={{
          backgroundImage: `url("/new-auth-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="h-screen w-full md:h-[100vh] md:w-[50%] m-auto flex flex-col items-center text-white relative px-4 py-8"
      >
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold">CruisePaz</h1>
          <p className="text-md font-semibold mt-2">Start Traveling Now</p>
          <p className="text-sm mt-1 text-white/90">
            Get cruises and experiences worldwide for your trip with the best
            deals
          </p>
        </div>

        <div
          onClick={() => openModal("login")}
          className="bg-white text-blue-600 text-xl font-bold rounded-full w-20 h-20 md:w-25 md:h-25 flex items-center justify-center shadow-md cursor-pointer"
        >
          Login
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white text-black w-[90%] max-w-sm rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <DialogTitle className="text-xl font-bold mx-auto capitalize">
                {modalType === "login" ? "Login" : "User Register"}
              </DialogTitle>
            </div>

            {modalType === "login" ? (
              <form className="space-y-4">
                <Input
                  placeholder="Enter Mobile number"
                  className="bg-gray-100"
                />
                <Input
                  placeholder="Enter Password"
                  type="password"
                  className="bg-gray-100"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Login
                </Button>
              </form>
            ) : (
              <form className="space-y-4">
                <Input
                  placeholder="Enter Mobile number"
                  className="bg-gray-100"
                />
                <Input
                  placeholder="Enter Password"
                  type="password"
                  className="bg-gray-100"
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="bg-gray-100"
                />
                <Input
                  placeholder="Enter Invitation code"
                  className="bg-gray-100"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Register
                </Button>
              </form>
            )}

            <div className="text-center mt-4 text-sm text-blue-600 font-semibold cursor-pointer">
              {modalType === "login" ? (
                <p onClick={() => openModal("register")}>
                  New here? Register &gt;&gt;
                </p>
              ) : (
                <p onClick={() => openModal("login")}>
                  Already have an account? Login &gt;&gt;
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="absolute bottom-1 flex justify-center bg-white p-1 rounded text-blue-600 w-fit" onClick={()=>openModal("register")}>
  <span className="text-blue-600 text-xl cursor-pointer font-semibold">Sign Up</span>
</div>
    </div>
  );
};
