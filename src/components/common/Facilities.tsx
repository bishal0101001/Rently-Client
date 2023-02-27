import React from "react";
import { BiBath, BiBed, BiWifi } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { CiParking1 } from "react-icons/ci";
import { Listing } from "src/interface/Listings";
import { twMerge } from "tailwind-merge";

interface Props {
  listing: Listing;
  style?: string;
}

const Facilities = ({ listing, style }: Props) => {
  const className = twMerge(
    `flex flex-wrap items-center justify-between gap-2 " ${style}`
  );
  return (
    <div className={className}>
      <p className="flex items-center justify-center gap-1">
        {listing?.details.bed} <BiBed />
      </p>
      <p className="flex items-center justify-center gap-1">
        {listing?.details.bath} <BiBath />
      </p>
      {listing?.details.attachedBath && (
        <p className="flex items-center justify-center gap-1">
          AB
          <BsCheck2Circle />
        </p>
      )}
      {listing?.details.wifi && (
        <p className="flex items-center justify-center gap-1">
          <BiWifi />
        </p>
      )}
      {listing?.details.parking && (
        <p className="flex items-center justify-center gap-1">
          <CiParking1 />
        </p>
      )}
    </div>
  );
};

export default Facilities;
