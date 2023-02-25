import React, { useEffect } from "react";
import Image from "next/image";

import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import Link from "next/link";
import { facilities } from "./../../services/fakeFacilitiesService";
import Skeleton from "react-loading-skeleton";

interface Props {
  id?: string;
  price: string;
  address: {
    position: google.maps.LatLngLiteral;
    title: string;
  };
  nearestLandmark: string;
  img: string;
  saved: boolean;
}

const ListingCard: React.FC<Props> = ({
  id,
  price,
  address,
  nearestLandmark,
  img,
  saved,
}) => {
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
      <Link href={`/listing/${id}`} className="underline px-2 text-sm mx-auto">
        View Details
      </Link>
    </div>
  );

  // return (
  //   <div className="w-60 sm:w-72 mx-auto mb-6">
  //     <div className="relative h-40 bg-secondary rounded-lg overflow-hidden">
  //       {isLoading ? (
  //         <Skeleton className="h-full" />
  //       ) : (
  //         <Image
  //           src={img}
  //           width={200}
  //           height={100}
  //           className="w-full h-full object-cover"
  //           alt="img"
  //         />
  //       )}
  //     </div>
  //     <div className="flex justify-between items-center mt-2">
  //       <div className="flex items-center space-x-2">
  //         {isLoading ? (
  //           <Skeleton width={50} height={20} />
  //         ) : (
  //           <>
  //             <p className="text-base font-bold">Rs {price} /</p>
  //             <p className="text-xs font-normal text-dark">per month</p>
  //           </>
  //         )}
  //       </div>
  //       <div>
  //         {isLoading ? (
  //           <Skeleton circle width={25} height={25} />
  //         ) : saved ? (
  //           <MdOutlineBookmark
  //             size={25}
  //             color="red"
  //             className="cursor-pointer"
  //           />
  //         ) : (
  //           <MdOutlineBookmarkBorder size={25} className="cursor-pointer" />
  //         )}
  //       </div>
  //     </div>
  //     <div className="mt-2">
  //       {isLoading ? (
  //         <Skeleton width={150} height={20} />
  //       ) : (
  //         <p className="text-base font-semibold">{address?.title}</p>
  //       )}
  //       {isLoading ? (
  //         <Skeleton width={100} height={16} />
  //       ) : (
  //         <p className="text-xs text-light2">{nearestLandmark}</p>
  //       )}
  //     </div>
  //     <div className="mt-2 flex flex-wrap justify-between">
  //       {facilities.map((i) => (
  //         <div
  //           key={i.name}
  //           className="flex items-center justify-center text-sm"
  //         >
  //           {isLoading ? <Skeleton circle width={16} height={16} /> : i.icon}
  //           {isLoading ? (
  //             <Skeleton width={70} height={16} className="ml-1" />
  //           ) : (
  //             <span className="ml-1">{i.name}</span>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="mt-2">
  //       {isLoading ? (
  //         <Skeleton width={80} height={20} />
  //       ) : (
  //         <Link href={`/listing/${id}`} className="underline text-sm">
  //           View Details
  //         </Link>
  //       )}
  //     </div>
  //   </div>
  // );
};

export default ListingCard;
