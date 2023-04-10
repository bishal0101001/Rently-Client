import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo, Input } from "@components/ui";
import { login, selectUser, toggleSaveListing } from "src/slices/userSlice";
import { doSignIn, doSignInWithPopup } from "src/config/firebase";
import { FirebaseError } from "firebase/app";
import { Loading } from "@components/common";
import { formatFirebaseError } from "src/utils/formatFirebaseError";
import { addUser, getUserById } from "src/config/db";

interface Props {}

const LoginView: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { isAuthenticated } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await doSignIn(email, password);

      dispatch(
        login({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          address: "Srijana Chowk",
          //@ts-ignore
          token: user.accessToken,
          savedListings: [],
        })
      );
      setLoading(false);
      // const userDetails = await getUserById(user.uid);
      // console.log(userDetails, "userDetails");
      // dispatch(toggleSaveListing(userDetails.savedListing));
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
        address: "",
        //@ts-ignore
        token: user.accessToken,
        savedListings: [],
      })
    );
    user.email &&
      user.displayName &&
      (await addUser({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        phone: user?.phoneNumber || undefined,
        address: "",
      }));
  };

  if (isAuthenticated) {
    router.push("/", undefined, { shallow: true });
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
              onSubmit={handleLogin}
            >
              <h1 className="text-xl font-bold md:text-2xl">Welcome back,</h1>
              <p className="text-dark text-sm mb-5 md:text-base">
                Continue with google or enter details.
              </p>
              <button
                className="flex items-center justify-center w-full h-10 bg-transparent text-primary border-2 border-primary rounded font-medium"
                onClick={handleSignInWithGoogle}
              >
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
                rootStyle={error ? "mb-1" : "mb-6"}
              />
              {error && <span className="text-red-500 mb-2">{error}</span>}

              <div className="flex items-center justify-between mb-5">
                <span className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 cursor-pointer"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  Show password
                </span>
                <Link
                  href="/auth/forgetpassword"
                  className="text-blue-700 underline font-semibold"
                >
                  Forgot password?
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
    </>
  );
};

export default LoginView;
