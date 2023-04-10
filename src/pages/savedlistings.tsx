import { ListingCard, Navbar } from "@components/common";
import React from "react";
import { useSelector } from "react-redux";
import { useGetListingsQuery } from "src/slices/apiSlice";
import { selectUser } from "src/slices/userSlice";

const savedlistings = () => {
  const { userDetails } = useSelector(selectUser);
  const { data, error, isLoading } = useGetListingsQuery();

  const listings = data?.listings.filter((item) =>
    userDetails?.savedListings.some((saved) => saved.id === item.id)
  );

  return (
    <>
      <Navbar />
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <div className="flex flex-col items-start overflow-y-auto p-16 md:pr-12 ">
          <h1 className="text-2xl font-semibold">
            {listings && listings?.length > 0
              ? listings.length + " Saved Listings"
              : "No Saved Listings"}
          </h1>
          <div className="flex flex-wrap justify-start gap-10 items-start my-5">
            {listings?.map((i) => (
              <div key={i.createdAt}>
                <ListingCard
                  id={i!.id}
                  price={i?.price}
                  address={i?.address}
                  nearestLandmark={i?.nearbyLandmark}
                  img={i?.img[0]}
                  saved={true}
                  listing={i}
                  currentUserId={userDetails?.id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default savedlistings;
