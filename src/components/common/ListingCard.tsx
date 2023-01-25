import Image from "next/image";
import React from "react";

import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { BiBed, BiBath, BiWifi } from "react-icons/bi";
import { CiParking1 } from "react-icons/ci";
import { Button } from "@components/ui";

const facilities = [
  {
    name: "3bd.",
    icon: BiBed,
  },
  {
    name: "2bt.",
    icon: BiBath,
  },
  {
    name: "Wifi",
    icon: BiWifi,
  },
  {
    name: "Parking",
    icon: CiParking1,
  },
  {
    name: "bd.",
    icon: BiBed,
  },
];

type Props = {};

const ListingCard = (props: Props) => {
  return (
    <div className="flex flex-col w-60 h-80 bg-secondary border border-light my-5 rounded-lg drop-shadow-xl">
      <Image
        src="/assets/emptyroom.jpg"
        width={200}
        height={200}
        className="w-full rounded-tl-lg rounded-tr-lg object-contain"
        alt="img"
      />
      <div className="flex items-center justify-between px-2 pt-2">
        <p className="text-base font-bold">
          Rs 5,000{" "}
          <span className="text-xs font-normal text-dark">per month</span>
        </p>
        {/* <MdOutlineBookmarkBorder size={25} /> */}
        <MdOutlineBookmark size={25} color="red" />
      </div>
      <p className="text-base font-semibold px-2 pt-1">Parsyang, Pokhara</p>
      <p className="text-xs px-2 text-light2">Near Birendra Secondary School</p>
      <div className="flex flex-wrap items-center justify-between px-2 pt-2 border-t border-light">
        {facilities.map((i) => (
          <div className="flex items-center justify-center text-sm ">
            <i.icon />
            <span className="ml-1">{i.name}</span>
          </div>
        ))}
      </div>
      <p className="underline px-2 text-sm mx-auto">View Details</p>
    </div>
  );
};

export default ListingCard;
