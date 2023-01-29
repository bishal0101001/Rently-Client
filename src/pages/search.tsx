import React from "react";
import Image from "next/image";
import Navbar from "@components/common/Header/Navbar";
import Footer from "@components/common/Footer/Footer";
import ListingCard from "@components/common/ListingCard";

interface Props {}

const search = (props: Props) => {
  return (
    <div className="h-full">
      <Navbar navItems={""} />
      <div className="flex pr-16 pt-20">
        <div className="basis-3/5 mr-5">
          <Image
            src="/mapimage.jpg"
            height={500}
            width={500}
            alt="map"
            className="w-full "
          />
        </div>
        <div className="basis-2/5 flex flex-col items-start">
          <h1 className="text-2xl font-semibold">Listings near you</h1>
          <p className="text-light2">Uploaded 2 days ago</p>
          <div className="flex flex-wrap justify-between items-center">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default search;
