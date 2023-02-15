import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "@components/common/Header/Navbar";
import Footer from "@components/common/Footer/Footer";
import ListingCard from "@components/common/ListingCard";
import { useSelector } from "react-redux";
import { selectUser } from "src/slices/userSlice";
import { Loading } from "@components/common";
import {  useGetListingQuery } from "src/slices/apiSlice";
import { Listing } from "src/interface/Listings";

interface Props {
  data: {
    listings: Listing[];
  };
  isLoading: boolean;
}

const search = (props: Props) => {
  // const { isAuthenticated } = useSelector(selectUser);
  const { data, error, isLoading } = useGetListingQuery();

  useEffect(() => {
    // logData();
    console.log("logged data....");
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div className="h-screen">
        <Navbar isSearch={true} />
        <div className="flex pt-20">
          <div className="basis-2/6 mr-5 h-[80vh]">
            <Image
              src="/mapimage.jpg"
              height={500}
              width={500}
              alt="map"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="basis-4/6 flex flex-col items-start h-[80vh] overflow-y-auto pr-10 md:pr-12">
            <h1 className="text-2xl font-semibold">Listings near you</h1>
            <p className="text-light2">Uploaded 2 days ago</p>
            <div className="flex flex-wrap justify-start gap-10 items-start my-5">
              {data?.listings?.map((i) => (
                <div key={i?.id}>
                  <ListingCard
                    id={i?.id}
                    price={i?.price}
                    address={i?.address}
                    nearestLandmark={i?.nearbyLandmark}
                    img={i?.img}
                    saved={parseInt(i?.id) % 2 === 0 ? true : false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

// export const getStaticProps = async () => {

//   return {
//     props: {
//       data,
//       error,
//       isLoading,
//     },
//   };
// };

export default search;
