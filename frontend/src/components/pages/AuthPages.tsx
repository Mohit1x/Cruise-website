import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthPage = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const openModal = (type: "login" | "register") => {
    setModalType(type);
    setIsDialogOpen(true);
  };

  const handleLogin = async (values: any) => {
    try {
      console.log(values);
      const { data, status } = await axios.post(
        "http://localhost:8081/v1/api/auth/login",
        values
      );
      console.log(data);
      if (status === 200) {
        localStorage.setItem("token", "Bearer ".concat(data.jwtToken));
      } else {
        throw Error("Retry again");
      }
      toast.success("Login Successful", {
        position: "bottom-right",
        duration: 3000,
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error.getMessage(), {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };

  const handleRegister = async (values: any) => {
    try {
      console.log(values);
      const { data } = await axios.post(
        "http://localhost:8081/v1/api/auth/register",
        values
      );
      console.log(data);
      toast.success("Registration Successful", {
        position: "bottom-right",
        duration: 3000,
      });
      setModalType("login");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-400 overflow-hidden relative">
      <div
        style={{
          backgroundImage: `url("/new-auth-bg.png")`,
          // backgroundImage: `url("/login-bg.png")`,
          backgroundSize: "cover",
        }}
        className="h-screen w-full m-auto flex flex-col items-center text-white relative px-4 py-8"
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
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={undefined}
                onSubmit={handleLogin}
              >
                {() => (
                  <Form className="space-y-4">
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-100 w-full"
                    />

                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      className="bg-gray-100"
                    />

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={{
                  userName: "",
                  password: "",
                  email: "",
                  invitationCode: "",
                  role: "ROLE_USER",
                }}
                validationSchema={undefined}
                onSubmit={handleRegister}
              >
                <Form className="space-y-4">
                  <Field
                    as={Input}
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="Enter a Username"
                    className="bg-gray-100"
                  />
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    className="bg-gray-100"
                  />
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-100 w-full"
                  />
                  <Field
                    as={Input}
                    id="invitationCode"
                    name="invitationCode"
                    type="text"
                    placeholder="Enter InvitationCode"
                    className="bg-gray-100"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Register
                  </Button>
                </Form>
              </Formik>
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
      <div
        className="absolute bottom-1 flex justify-center bg-white p-1 rounded text-blue-600 w-fit"
        onClick={() => openModal("register")}
      >
        <span className="text-blue-600 text-xl cursor-pointer font-semibold">
          Sign Up
        </span>
      </div>
    </div>
  );
};
