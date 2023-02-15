import Image from "next/image";
import React from "react";

import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { BiBed, BiBath, BiWifi } from "react-icons/bi";
import { CiParking1 } from "react-icons/ci";
import { Button } from "@components/ui";
import Link from "next/link";
import { facilities } from "./../../services/fakeFacilitiesService";
import * as Bi from "react-icons/bi";

interface Props {
  id: string;
  price: number;
  address: {
    location: {
      lat: number;
      long: number;
    };
    title: string;
  };
  nearestLandmark: string;
  img: string;
  saved: boolean;
}

const ListingCard: React.FC<Props> = ({
  price,
  address,
  nearestLandmark,
  img,
  saved,
}) => {
  // console.log(Bi["BiBed"]);
  return (
    <div className="flex flex-col w-[228px] h-80 bg-secondary border border-light rounded-lg drop-shadow-xl">
      <div className="h-40 basis-2/5">
        <Image
          src={img}
          width={200}
          height={100}
          className="w-full h-40 rounded-tl-lg rounded-tr-lg object-cover"
          alt="img"
        />
      </div>
      <div className="flex items-center justify-between px-2 pt-2">
        <p className="text-base font-bold">
          Rs {price} /
          <span className="text-xs font-normal text-dark">per month</span>
        </p>
        {saved ? (
          <MdOutlineBookmark size={25} color="red" className="cursor-pointer" />
        ) : (
          <MdOutlineBookmarkBorder size={25} className="cursor-pointer" />
        )}
      </div>
      <p className="text-base font-semibold px-2 pt-1">{address?.title}</p>
      <p className="text-xs px-2 mb-1 text-light2">{nearestLandmark}</p>
      <div className="flex flex-wrap items-center justify-between px-2 pt-2 border-t border-light">
        {facilities.map((i) => (
          <div
            key={i.name}
            className="flex items-center justify-center text-sm"
          >
            {i.icon}
            <span className="ml-1">{i.name}</span>
          </div>
        ))}
      </div>
      <Link href="/listingdetails" className="underline px-2 text-sm mx-auto">
        View Details
      </Link>
    </div>
  );
};

export default ListingCard;
