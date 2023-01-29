import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  rootStyle?: string;
  style?: string;
}

const Footer = ({ rootStyle, style }: Props) => {
  const rootClassName = twMerge(
    `w-full h-10 flex justify-evenly items-center bg-primary px-1.5 list-none md:list-disc ${rootStyle}`
  );
  const listClassName = twMerge(`text-xs text-light2 cursor-pointer ${style}`);
  return (
    <ul className={rootClassName}>
      <li className={listClassName}>Terms & Conditions</li>
      <li className={listClassName}>Legal Disclaimer</li>
      <li className={listClassName}>Sitemap</li>
      <li className={listClassName}>Privacy Policies</li>
    </ul>
  );
};

export default Footer;
