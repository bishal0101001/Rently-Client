import React, { useState } from "react";
import { Button, CheckBoxInput, Toast } from "@components/ui";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { Listing } from "src/interface/Listings";
import { useRouter } from "next/router";
import Image from "next/image";
import { deleteListing, updateListings } from "src/config/db";
import { ListingActions } from "src/enums/listingActions";
import { useDispatch } from "react-redux";
import { toggleMyListings } from "src/slices/userSlice";

interface Props {
  currentUserId: string;
  listingItem: Listing;
}

const ListingItems = ({ listingItem, currentUserId }: Props) => {
  const [isReserved, setIsReserved] = useState(false);
  const [toast, setToast] = useState("");
  const dispatch = useDispatch();
  const handleDelete = async () => {
    if (listingItem.id) {
      // const { msg } = await deleteListing(currentUserId, listingItem.id);
      const res = await updateListings(
        listingItem.id,
        currentUserId,
        ListingActions.DELETE_LISTING
      );
      if (typeof res?.msg === "string") {
        setToast(res.msg);
      }
      dispatch(toggleMyListings({ id: listingItem.id }));
    }
  };

  return (
    <div className="flex items-center border border-dark w-full h-28 gap-2 rounded pr-4 ">
      {toast && <Toast message={toast} />}
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
              listingItem?.price
          }
          <p className="text-lightText text-lg"></p>
          <div className="flex items-center justify-between gap-2">
            <Button
              href={`/listing/${listingItem?.id}`}
              label="Details"
              style="bg-transparent border-2 border-primary text-primary cursor-pointer"
            />
            <Button label="Edit" icon={AiTwotoneEdit} iconSize={20} />
            <button className="bg-red-500 p-2 w-10 h-10" onClick={handleDelete}>
              <MdDelete color="#fff" size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItems;
