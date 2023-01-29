import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo, Input } from "@components/ui";
import useAuth from "@hooks/useAuth";
import { login, selectUser } from "src/slices/userSlice";
import { RootState } from "src/store";

interface Props {}

const LoginView: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const { isAuthenticated } = useSelector(selectUser);
  const dispatch = useDispatch();

  // const { login } = useAuth();

  const handleLogin = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    dispatch(
      login({
        id: "1",
        name: "Bishal Shrestha",
        email,
        phone: 123123,
        address: "Srijana Chowk",
      })
    );

    // login("Bishal", email, "1234-431-1234");
    console.log(email, "email");
  };

  if (isAuthenticated) {
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 mt-3 md:justify-between md:px-20">
      <div className="w-[90vw] h-full mr-5">
        <div className="mb-5 justify-items-center">
          <Logo />
        </div>
        <div className="flex flex-col items-center basis-1/4 h-screen w-full md:items-start">
          <form
            className="flex flex-col w-[90vw] md:w-96 md:ml-10 "
            onSubmit={handleLogin}
          >
            <h1 className="text-xl font-bold md:text-2xl">Welcome back,</h1>
            <p className="text-dark text-sm mb-5 md:text-base">
              Continue with google or enter details.
            </p>
            <button className="flex items-center justify-center w-full h-10 bg-transparent text-primary border-2 border-primary rounded  font-medium">
              <img src="/google.png" alt="google" className="w-7 h-7" />
              Continue with Google
            </button>
            <p className="my-3 mx-auto">or</p>
            <Input
              label="Email"
              name="floating_email"
              onChange={setEmail}
              type="email"
              value={email}
            />
            <Input
              name="floating_password"
              onChange={setPassword}
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
            />
            <div className="flex items-center justify-between mb-5">
              <span className="flex justify-center items-center">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4"
                  onChange={() => setShowPassword(!showPassword)}
                />
                Show password
              </span>
              <Link
                href="/auth/forgetpassword"
                className="text-blue-700 underline font-semibold"
              >
                Forget password
              </Link>
            </div>
            <button
              className="w-full h-10 bg-primary text-secondary rounded font-medium"
              type="submit"
            >
              Login
            </button>
            <span className="mt-5 ">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="font-semibold">
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </div>
      <div className="h-screen w-full display-none hidden relative md:block">
        <img
          src="/assets/image_login-min.jpg"
          alt="img"
          className="w-full h-[95vh] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default LoginView;
