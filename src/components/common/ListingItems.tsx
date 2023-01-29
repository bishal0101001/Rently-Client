import React from "react";
import { Button, CheckBoxInput } from "@components/ui";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

type Props = {};

const ListingItems = (props: Props) => {
  return (
    <div className="flex items-center border border-dark w-full h-28 gap-2 rounded pr-4">
      <div className="basis-1/5 h-full w-36">
        <img
          src="/assets/image_login-min.jpg"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="basis-4/5 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="basis-1/2 text-xl font-semibold">
            Amarsingh, Pokhara | 3rd floor
          </h1>
          <CheckBoxInput
            id="checkbox"
            label="Reserved"
            rootStyle="w-auto bg-secondary"
            labelStyle="text-primary text-lg"
            inputStyle="w-8 h-8"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lightText text-lg">3 days ago | Rs 5000</p>
          <div className="flex items-center justify-between">
            <Button
              href="#"
              label="Details"
              style="bg-transparent border-2 border-primary text-primary"
            />
            <Button href="#" label="Edit" icon={AiTwotoneEdit} iconSize={20} />
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
