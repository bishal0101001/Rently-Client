import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

import { Input, Button, Logo } from "@components/ui";
import { createUser, doSignInWithPopup } from "src/config/firebase";
import { login, selectUser } from "src/slices/userSlice";
import { FirebaseError } from "firebase/app";
import { formatFirebaseError } from "src/utils/formatFirebaseError";
import { FaGalacticSenate } from "react-icons/fa";
import { Loading } from "@components/common";

interface Props {}
interface errorProps {}

const SignUpView: FC<Props> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  const { isAuthenticated } = useSelector(selectUser);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const handleSignup = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userRes = await createUser(email, password);
      console.log(userRes, "user");
      const { user } = userRes;

      dispatch(
        login({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          address: "Srijana Chowk",
          //@ts-ignore
          token: user.accessToken,
        })
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);

      if (error instanceof FirebaseError) {
        handleError(formatFirebaseError(error.message));
      }
      console.log({ error }, "error from signup");
    }
  };

  const handleSignInWithGoogle = async () => {
    const { user } = await doSignInWithPopup();
    dispatch(
      login({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        address: "Srijana Chowk",
        //@ts-ignore
        token: user.accessToken,
      })
    );
  };

  if (isAuthenticated) {
    router.push("/");
  }

  return (
    <>
      {loading && <Loading />}
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
              <h1 className="text-xl font-bold md:text-2xl">
                Create an account
              </h1>
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
                rootStyle={error ? "mb-1" : "mb-6"}
              />
              {error && <span className="text-red-500 mb-2">{error}</span>}
              <div className="flex items-center mb-5">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 cursor-pointer"
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
              <button
                className="flex items-center justify-center w-full h-10 bg-transparent text-primary border-2 border-primary rounded mt-3 font-medium"
                onClick={handleSignInWithGoogle}
              >
                <img src="/google.png" alt="google" className="w-7 h-7" />
                Sign up with Google
              </button>
            </form>
          </div>
        </div>
        <div className="h-screen w-full display-none hidden relative md:block">
          <Image
            width={500}
            height={500}
            src="/assets/livingroom-min.jpg"
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
    </>
  );
};

export default SignUpView;
