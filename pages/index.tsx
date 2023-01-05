import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Footer from "../components/common/Footer/Footer";
import Link from "next/link";
import { Logo, Button } from "@components/ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="flex flex-col h-screen w-full items-center justify-center px-1.5">
        <div className="flex flex-col items-center justify-center mb-20 ">
          <Logo
            textStyle="flex text-4xl font-bold mb-2 md:text-6xl"
            imgStyle="w-10 h-10 md:w-16 md:h-16"
          />
          <span className="text-sm text-dark md:text-2xl">
            {/* Your home away from home */}
            {/* The hassel-free way to find your next home */}
            Your One-Stop Rental Solution
          </span>
        </div>
        <div className="flex w-full justify-evenly items-center md:justify-center mb-10">
          <Link href="/rentout">
            <div className="flex flex-col justify-center items-center bg-light w-44 h-36 rounded-lg relative md:w-80 md:h-56 md:mr-20">
              <Image
                src="/icon_home.png"
                alt="rent_out"
                width={280}
                height={280}
                className="drop-shadow-home absolute -top-10 hover:scale-110"
              />
              <div className="flex justify-between items-center absolute bottom-5">
                <h1 className="font-semibold mr-2 text-lg">Rent out</h1>
                <span className="w-8 h-8 md:w-12 md:h-12">
                  <Image
                    src="/arrow_right.svg"
                    height={400}
                    width={400}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
          </Link>
          <Link href="/search">
            <div className="flex flex-col justify-center items-center bg-light w-44 h-36 rounded-lg relative  md:w-80 md:h-56 ">
              <Image
                src="/icon_search.png"
                alt="rent_out"
                width={250}
                height={250}
                className="drop-shadow-xl absolute -top-10 hover:scale-110 delay-200 ease-in-out"
              />
              <div className="flex justify-between items-center absolute bottom-5">
                <h1 className="font-semibold mr-2 text-lg">Find a room</h1>
                <span className="w-8 h-8 md:w-12 md:h-12">
                  <Image
                    src="/arrow_right.svg"
                    height={400}
                    width={400}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-evenly items-center mb-10">
          <Button href="/auth/login" label="Login" />
          <Button
            href="/auth/signup"
            label="Sign up"
            style="bg-transparent border-2 border-primary text-primary"
          />

          {/* <Link href="/auth/signup">
            <button className="w-24 h-10 border-2 border-primary rounded-lg font-semibold md:w-28 md:h-10">
              Sign up
            </button>
          </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
