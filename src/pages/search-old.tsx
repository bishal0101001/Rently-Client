import React from "react";
import Navbar from "@components/common/Header/Navbar";
import Image from "next/image";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Input, SelectInput } from "@components/ui";

type Props = {};

const search = (props: Props) => {
  return (
    <div className="w-full" style={{ backgroundImage: "" }}>
      <Navbar navItems={""} />
      <div className="flex flex-col justify-center items-center px-16">
        <div className="w-[90vw] h-[70vh] mt-20 relative">
          <Image
            src="/assets/apartment_image.jpg"
            alt="apartment"
            width={1000}
            height={1000}
            className="w-full h-full rounded-3xl object-cover"
          />
          <span className="absolute bg-secondary bg-opacity-50 w-10 h-10 top-1/2 right-5 flex items-center justify-center rounded-full">
            <MdKeyboardArrowRight size={25} />
          </span>
          <span className="absolute bg-secondary bg-opacity-50 w-10 h-10 top-1/2 left-5 flex items-center justify-center rounded-full">
            <MdOutlineKeyboardArrowLeft size={25} />
          </span>
          {/* <div className="absolute top-0 w-full bg-primary bg-opacity-50 rounded-t-3xl p-4 ">
            <h1 className="text-secondary text-2xl font-bold mx-auto text-center">
              Recent rooms near you.
            </h1>
          </div> */}
        </div>
        <div className="flex justify-start items-center bg-primary text-primary z-50 w-[70vw] gap-x-10 p-5 absolute bottom-10 rounded-2xl">
          <div className="flex flex-col border border-2-dark flex-1">
            <Input label="Address" />
            <SelectInput
              label="Category"
              selected="Rooms"
              options={[
                { value: "Apartments", optionLabel: "Apartments" },
                { value: "House", optionLabel: "House" },
              ]}
              rootStyle="flex justify-between items-center"
              labelStyle="text-primary"
            />
          </div>
          <div className="flex flex-col border border-2-dark flex-1">
            <Input label="Address" />
            <SelectInput
              label="Category:"
              selected="Rooms"
              options={[
                { value: "Apartments", optionLabel: "Apartments" },
                { value: "House", optionLabel: "House" },
              ]}
            />
          </div>
          <div className="flex flex-col border border-2-dark flex-1">
            <Input label="Address" />
            <SelectInput
              label="Category"
              selected="Rooms"
              options={[
                { value: "Apartments", optionLabel: "Apartments" },
                { value: "House", optionLabel: "House" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
