import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface LogoProps {
  textStyle?: string;
  imgStyle?: string;
}

const Logo: React.FC<LogoProps> = ({ textStyle, imgStyle }) => {
  const textClassName = twMerge(
    `flex text-3xl font-extrabold mb-2 justify-center items-center md:text-4xl md:justify-start ${textStyle}`
  );
  const imgClassName = twMerge(`w-6 h-6 md:w-10 md:h-10 ${imgStyle}`);
  return (
    <Link href="/" className="items-center">
      <h1 className={textClassName}>
        <span>
          <img src="/logo.png" alt="logo" className={imgClassName} />
        </span>
        Rently
      </h1>
    </Link>
  );
};

export default Logo;
