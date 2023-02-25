import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

import Navbar from "@components/common/Header/Navbar";
import ListingItems from "@components/common/ListingItems";
import Footer from "@components/common/Footer/Footer";
import { selectUser } from "./../slices/userSlice";
import { Loading } from "@components/common";
import withAuth from "src/hocs/withAuth";
import { useGetListingsQuery } from "src/slices/apiSlice";

interface Props {}

const mylistings = (props: Props) => {
  const { isAuthenticated, userDetails } = useSelector(selectUser);
  const { data } = useGetListingsQuery();

  if (!isAuthenticated) return <Loading />;
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="flex flex-col items-start justify-between gap-5 mx-16 pt-20">
        <h1 className="text-3xl font-bold mx-auto mt-8">My Listings</h1>
        <div>
          {data?.listings.map((listing) => {
            if (listing.userId === userDetails?.id) {
              return <ListingItems listingItem={listing} />;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(mylistings);
