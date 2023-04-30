import React from "react";
import Image from "next/image";
import Navbar from "@components/common/Header/Navbar";
import Footer from "@components/common/Footer/Footer";
import ListingCard from "@components/common/ListingCard";
import { useSelector } from "react-redux";
import { selectUser } from "src/slices/userSlice";
import { Loading, Map } from "@components/common";
import { useGetListingsQuery } from "src/slices/apiSlice";
import { Listing } from "src/interface/Listings";
import { selectPlace } from "src/slices/placeSlice";
import { getNearbyListings } from "src/utils/getNearbyListings";

interface Props {
  data: {
    listings: Listing[];
  };
  isLoading: boolean;
}

const search = (props: Props) => {
  // const { isAuthenticated } = useSelector(selectUser);
  const { position, zoom, formattedAddress, addressType } =
    useSelector(selectPlace);
  const { userDetails } = useSelector(selectUser);
  const { data, error, isLoading } = useGetListingsQuery();

  const filteredListings =
    data && getNearbyListings(data?.listings, position.lat, position.lng, 1);

  const listings =
    addressType[0] === "locality" ? data?.listings : filteredListings;

  return (
    <>
      {isLoading && <Loading />}
      <div className="h-screen">
        <Navbar isSearch={true} />
        <div className="flex pt-20">
          <div className="basis-2/6 mr-5 h-[90vh]">
            <Map listings={data?.listings} center={position} zoom={zoom} />
          </div>
          <div className="basis-4/6 flex flex-col items-start h-[80vh] overflow-y-auto pr-10 md:pr-12">
            <h1 className="text-2xl font-semibold">Listings near you</h1>
            <p className="text-light2">{listings?.length} listings found.</p>
            <div className="flex flex-wrap justify-start gap-10 items-start my-5">
              {listings && listings?.length < 1 && <p>No listings found....</p>}
              {listings?.map((i) => (
                <div key={i.createdAt}>
                  <ListingCard
                    id={i!.id}
                    price={i?.price}
                    address={i?.address}
                    nearestLandmark={i?.nearbyLandmark}
                    img={i?.img[0]}
                    saved={
                      userDetails?.savedListings
                        ? userDetails?.savedListings.some(
                            (item) => item.id === i.id
                          )
                        : false
                    }
                    listing={i}
                    currentUserId={userDetails?.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer rootStyle="absolute bottom-0" />
      </div>
    </>
  );
};

export default search;
