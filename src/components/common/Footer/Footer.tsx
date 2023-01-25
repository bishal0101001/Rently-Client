import React from "react";

const Footer = () => {
  return (
    <ul className="w-full h-10 flex justify-evenly items-center bg-primary px-1.5 list-none md:list-disc">
      <li className="text-xs text-light2 cursor-pointer">Terms & Conditions</li>
      <li className="text-xs text-light2 cursor-pointer">Legal Disclaimer</li>
      <li className="text-xs text-light2 cursor-pointer">Sitemap</li>
      <li className="text-xs text-light2 cursor-pointer">Privacy Policies</li>
    </ul>
  );
};

export default Footer;
