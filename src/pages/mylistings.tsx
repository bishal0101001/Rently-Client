import React from "react";
import { MdDelete } from "react-icons/md";

import Navbar from "@components/common/Header/Navbar";
import { Button, CheckBoxInput } from "@components/ui";
import ListingItems from "@components/common/ListingItems";
import Footer from "@components/common/Footer/Footer";

interface Props {}

const mylistings = (props: Props) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar navItems={""} />
      <div className="flex flex-col items-start justify-between gap-5 mx-16 pt-20">
        <h1 className="text-3xl font-bold mx-auto mt-8">My Listings</h1>
        <ListingItems />
        <ListingItems />
        <ListingItems />
      </div>
      <Footer />
    </div>
  );
};

export default mylistings;
