import Image from "next/image";
import React from "react";

import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { BiBed, BiBath, BiWifi } from "react-icons/bi";
import { CiParking1 } from "react-icons/ci";
import { Button } from "@components/ui";
import Link from "next/link";
import { facilities } from "./../../services/fakeFacilitiesService";
import * as Bi from "react-icons/bi";

type Props = {};

const ListingCard = (props: Props) => {
  // console.log(Bi["BiBed"]);
  return (
    <div className="flex flex-col w-[228px] h-80 bg-secondary border border-light my-5 rounded-lg drop-shadow-xl">
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
      <p className="text-xs px-2 mb-1 text-light2">
        Near Birendra Secondary School
      </p>
      <div className="flex flex-wrap items-center justify-between px-2 pt-2 border-t border-light">
        {facilities.map((i) => {
          return (
            <div className="flex items-center justify-center text-sm">
              {i.icon}
              <span className="ml-1">{i.name}</span>
            </div>
          );
        })}
      </div>
      <Link href="/listingdetails" className="underline px-2 text-sm mx-auto">
        View Details
      </Link>
    </div>
  );
};

export default ListingCard;
