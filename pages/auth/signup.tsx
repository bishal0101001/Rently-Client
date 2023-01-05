import Image from "next/image";
import React, { FC, useState } from "react";

import { Input, Button, Logo } from "@components/ui";

interface Props {}

const SignUpView: FC<Props> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    console.log(email, "email");
  };
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 mt-3 md:justify-between md:px-20">
      <div className="w-[90vw] h-full mr-5">
        <div className="mb-5 justify-items-center">
          <Logo />
        </div>
        <div className="flex flex-col items-center basis-1/4 h-screen w-full md:items-start">
          <form
            className="flex flex-col w-[90vw] md:w-96 md:ml-10 "
            onSubmit={handleSignup}
          >
            <h1 className="text-xl font-bold md:text-2xl">Create an account</h1>
            <p className="text-dark text-sm mb-5 md:text-base">
              Start searching for the perfect room.
            </p>
            <Input
              name="floating_name"
              onChange={setName}
              label="Name"
              value={name}
            />
            <Input
              label="Email"
              name="floating_email"
              onChange={setEmail}
              type="email"
              value={email}
            />
            <Input
              name="floating_phone"
              onChange={setPhone}
              label="Phone"
              value={phone}
            />
            <Input
              name="floating_password"
              onChange={setPassword}
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
            />
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                className="mr-2 w-4 h-4"
                onChange={() => setShowPassword(!showPassword)}
              />
              Show password
            </div>
            <button
              className="w-full h-10 bg-primary text-secondary rounded font-medium"
              type="submit"
            >
              Create account
            </button>
            <button className="flex items-center justify-center w-full h-10 bg-transparent text-primary border-2 border-primary rounded mt-3 font-medium">
              <img src="/google.png" alt="google" className="w-7 h-7" />
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
      <div className="h-screen w-full display-none hidden relative md:block">
        <img
          src="/assets/livingroom.jpg"
          alt="img"
          className="w-full h-[95vh] object-cover rounded-lg "
        />
        <Button
          href="/auth/login"
          label="Login"
          style="w-24 h-10 bg-primary text-secondary rounded font-medium absolute top-5 right-5"
        />
      </div>
    </div>
  );
};

export default SignUpView;
