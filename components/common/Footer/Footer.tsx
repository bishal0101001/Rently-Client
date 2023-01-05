import React from "react";

const Footer = () => {
  return (
    <ul className="w-full h-10 flex justify-evenly items-center bg-primary absolute bottom-0 px-1.5 list-none md:list-disc">
      <li className="text-dark text-xs hover:text-light cursor-pointer">
        Terms & Conditions
      </li>
      <li className="text-dark text-xs hover:text-light cursor-pointer">
        Legal Disclaimer
      </li>
      <li className="text-dark text-xs hover:text-light cursor-pointer">
        Sitemap
      </li>
      <li className="text-dark text-xs hover:text-light cursor-pointer">
        Privacy Policies
      </li>
    </ul>
  );
};

export default Footer;
