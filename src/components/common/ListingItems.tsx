import React, { useState } from "react";
import { Button, CheckBoxInput } from "@components/ui";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { Listing } from "src/interface/Listings";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  listingItem: Listing;
}

const ListingItems = ({ listingItem }: Props) => {
  const [isReserved, setIsReserved] = useState(false);

  return (
    <div className="flex items-center border border-dark w-full h-28 gap-2 rounded pr-4 ">
      <div className="basis-1/5 h-full w-36">
        <Image
          src={listingItem.img[0]}
          alt="image"
          className="w-full h-full object-cover"
          height={500}
          width={500}
        />
      </div>
      <div className="basis-4/5 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="basis-1/2 text-xl font-semibold">
            {listingItem?.address.title +
              "| Floor - " +
              listingItem?.details.floor}
          </h1>
          <CheckBoxInput
            id="checkbox"
            label="Reserved"
            rootStyle="w-auto bg-secondary"
            labelStyle="text-primary text-lg"
            inputStyle="w-8 h-8"
            isChecked={isReserved}
            handleChange={() => setIsReserved(!isReserved)}
          />
        </div>
        <div className="flex items-center justify-between">
          
          {
            //@ts-ignore
          new Date(parseInt(listingItem!.createdAt)).getDay() +
            "|" +
            listingItem?.price}
          <p className="text-lightText text-lg"></p>
          <div className="flex items-center justify-between gap-2">
            <Button
              href={`/listing/${listingItem?.id}`}
              label="Details"
              style="bg-transparent border-2 border-primary text-primary cursor-pointer"
            />
            <Button label="Edit" icon={AiTwotoneEdit} iconSize={20} />
            <button className="bg-red-500 p-2 w-10 h-10">
              <MdDelete color="#fff" size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItems;
