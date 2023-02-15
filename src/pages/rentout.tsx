import React, { useEffect, useState, useRef } from "react";

import Navbar from "../components/common/Header/Navbar";
import CheckBoxInput from "@components/ui/CheckBoxInput";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
// import Lottie from "lottie-react";
import { numericSelectValues } from "../services/selectValuesService";

import { BoxInput, Button, SelectInput, WaveSvg } from "@components/ui";
import roomAnimation from "@assets/roomAnimation.json";
import { MdEditLocationAlt } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import withAuth from "./../hocs/withAuth";
import Footer from "@components/common/Footer/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "src/slices/userSlice";
import Loading from "@components/common/Loading";

interface Props {
  animationData?: any;
}

const Rentout: React.FC<Props> = () => {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  const { isAuthenticated } = useSelector(selectUser);

  if (!isAuthenticated) return <Loading />;
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col px-16 items-center justify-center h-screen">
        <div className="flex justify-between mt-10 ">
          <div className="basis-1/2 flex flex-col justify-start items-start mr-10 z-[9999]">
            <h1 className="text-7xl font-extrabold cursor-pointer">
              Maximize your rental income with Rently.
            </h1>
            <p className="text-dark text-xl my-5 w-2/3">
              Effortlessly Rent Out Your Rooms and Enjoy a Hassle-Free Rental
              Experience
            </p>
            <button
              type="button"
              className="flex items-center justify-center h-10 px-10 py-6 bg-primary text-secondary rounded-full font-semibold mt-5 ease-in-out delay-100 transition-all hover:scale-110"
              onClick={handleScroll}
            >
              <span className="mr-2 ">Get Started</span>
              <HiArrowNarrowRight size={25} className="hover:scale-110" />
            </button>
          </div>
          <div className="basis-1/2 ">
            {/* <Image
              src="/assets/house_model.png"
              alt="img"
              width={500}
              height={500}
            /> */}
            {/* <Lottie animationData={roomAnimation} loop={true} /> */}
            <video autoPlay loop className="w-full rounded">
              <source src="/assets/animated_room.mp4" />
            </video>
          </div>
        </div>
      </div>
      <WaveSvg />
      <div className="flex justify-between bg-primary h-[800px] text-secondary pl-16 z-50">
        <div className="basis-1/2 px-5 mx-auto h-fit">
          <h1 className="text-3xl font-bold mb-5">Add Details</h1>
          <BoxInput
            label="Location"
            placeholder="Enter details or drag the pointer"
            Icon={MdEditLocationAlt}
          />
          <BoxInput
            label="Nearest landmark"
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
            Icon={IoMdPricetag}
            placeholder="Enter price"
          />
          <BoxInput
            label="Upload"
            Icon={BsUpload}
            placeholder="Upload images"
          />
          <Button
            href="/mylistings"
            label="Submit"
            style="text-primary bg-secondary !w-full"
            rootStyle="w-full mt-6"
          />
        </div>
        <div className="basis-1/2 mx-auto overflow-hidden mb-10">
          <h1 className="text-3xl font-bold mx-auto mb-5">Drag the pointer</h1>
          <Image
            src="/mapimage.jpg"
            height={500}
            width={500}
            alt="map"
            className="w-fit h-auto rounded-tl-lg"
          />
        </div>
      </div>
      <Footer rootStyle="bg-secondary" style="text-primary" />
    </div>
  );
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       animationData: roomAnimation,
//     },
//   };
// };

export default withAuth(Rentout);
