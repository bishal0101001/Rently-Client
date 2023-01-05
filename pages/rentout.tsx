import React from "react";

import Navbar from "../components/common/Header/Navbar";
import CheckBoxInput from "@components/ui/CheckBoxInput";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import Lottie from "lottie-react";
import { numericSelectValues } from "../services/selectValuesService";

import { BoxInput, Button, SelectInput, WaveSvg } from "@components/ui";
import roomAnimation from "../public/assets/roomAnimation.json";
import { MdEditLocationAlt } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";

type Props = {};

const rentout = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Navbar navItems={"a"} />
      <div className="flex flex-col px-16 items-center justify-center z-50 h-screen">
        <div className="flex justify-between mt-10">
          <div className="basiss-2/5 basis-1/2 flex flex-col justify-start items-start mr-10">
            <h1 className="text-7xl font-extrabold">
              Maximize your rental income with Rently.
            </h1>
            <p className="text-dark text-xl my-5 w-2/3">
              Effortlessly Rent Out Your Rooms and Enjoy a Hassle-Free Rental
              Experience
            </p>
            <button className="flex items-center justify-center h-10 px-10 py-6 bg-primary text-secondary rounded-full font-semibold mt-5">
              <span className="mr-2">Get Started</span>
              <HiArrowNarrowRight size={25} />
            </button>
          </div>
          <div className="basis-1/2">
            {/* <Image
              src="/assets/house_model.png"
              alt="img"
              width={500}
              height={500}
            /> */}
            <Lottie animationData={roomAnimation} loop={true} />
          </div>
        </div>
      </div>
      <WaveSvg />
      <div className="flex justify-between bg-primary h-auto text-secondary pl-16 z-50">
        <div className="basis-1/2 px-5 mx-auto">
          <h1 className="text-3xl font-bold mb-5">Add Details</h1>
          <BoxInput
            label="Location"
            htmlFor="location"
            placeholder="Enter details or drag the pointer"
            Icon={MdEditLocationAlt}
          />
          <BoxInput
            label="Nearest landmark"
            htmlFor="location"
            Icon={FaLandmark}
            placeholder="E.g: Pokhara Engineering College"
          />
          <span className="flex w-full items-center">
            <SelectInput
              label="Category"
              selected="Rooms"
              options={[
                {
                  value: "Apartment",
                  optionLabel: "Apartment",
                },
                {
                  value: "House",
                  optionLabel: "House",
                },
              ]}
              rootStyle="mr-5"
            />
            <SelectInput
              label="Rooms"
              selected="1"
              options={numericSelectValues}
            />
          </span>
          <span className="flex w-full items-center justify-center">
            <SelectInput
              label="Bathroom"
              selected="1"
              options={numericSelectValues}
              rootStyle="mr-5"
            />
            <CheckBoxInput id="bathroom" label="Attached " rootStyle="mr-5" />
            <CheckBoxInput id="wifi" label="Wifi" rootStyle="mr-5" />
            <CheckBoxInput id="parking" label="Parking" />
          </span>
          <SelectInput
            label="Floor"
            selected="Ground"
            options={[
              {
                value: "1",
                optionLabel: "1",
              },
              ...numericSelectValues,
            ]}
          />
          <BoxInput
            label="Price"
            htmlFor="price"
            Icon={IoMdPricetag}
            placeholder="Enter price"
          />
          <Button
            href="#"
            label="Submit"
            style="text-primary bg-secondary !w-full"
            rootStyle="w-full mt-6"
          />
        </div>
        <div className="basis-1/2 mx-auto">
          <h1 className="text-3xl font-bold mx-auto mb-5">Drag the pointer</h1>
          <Image
            src="/mapimage.jpg"
            height={500}
            width={500}
            alt="map"
            className="w-full h-full rounded-tl-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default rentout;
