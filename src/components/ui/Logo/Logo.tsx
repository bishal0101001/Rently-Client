import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { SiHomebridge } from "react-icons/si";

interface LogoProps {
  textStyle?: string;
  imgStyle?: string;
}

const Logo: React.FC<LogoProps> = ({ textStyle, imgStyle }) => {
  const textClassName = twMerge(
    `flex text-3xl font-extrabold mb-2 justify-center items-center w-fit md:text-4xl md:justify-start ${textStyle}`
  );
  const imgClassName = twMerge(`w-6 h-6 md:w-10 md:h-10 ${imgStyle}`);
  return (
    <Link href="/" className="w-auto ">
      <h1 className={textClassName}>
        <span>
          {/* <SiHomebridge className={imgClassName} color="black" /> */}
          <img src="/logo.png" alt="logo" className={imgClassName} />
        </span>
        Rently
      </h1>
    </Link>
  );
};

export default Logo;
