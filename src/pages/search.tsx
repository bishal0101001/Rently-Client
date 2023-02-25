import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "@components/common/Header/Navbar";
import Footer from "@components/common/Footer/Footer";
import ListingCard from "@components/common/ListingCard";
import { useSelector } from "react-redux";
import { selectUser } from "src/slices/userSlice";
import { Loading, Map } from "@components/common";
import { useGetListingsQuery } from "src/slices/apiSlice";
import { Listing } from "src/interface/Listings";
import { MarkerType } from "@components/common/Map";

interface Props {
  data: {
    listings: Listing[];
  };
  isLoading: boolean;
}

const search = (props: Props) => {
  // const { isAuthenticated } = useSelector(selectUser);
  const { data, error, isLoading } = useGetListingsQuery();

  const markers: MarkerType[] = [
    { id: "1", position: { lat: 28.2109865, lng: 83.9766963 } },
    { id: "2", position: { lat: 28.2115223, lng: 83.9565756 } },
    { id: "3", position: { lat: 28.22329287810507, lng: 83.98665410549233 } },
    { id: "4", position: { lat: 28.2232928, lng: 83.9866541059233 } },
    { id: "5", position: { lat: 28.2232928707, lng: 83.9866541049233 } },
    { id: "6", position: { lat: 28.22329210507, lng: 83.98665410549233 } },
    { id: "7", position: { lat: 28.223297810507, lng: 83.9866549233 } },
    { id: "8", position: { lat: 28.223297810507, lng: 83.965410549233 } },
    { id: "9", position: { lat: 28.22329280507, lng: 83.98665410549233 } },
    { id: "10", position: { lat: 28.223210507, lng: 83.98665410549233 } },
    { id: "11", position: { lat: 28.2329287810507, lng: 83.8665410549233 } },
    { id: "12", position: { lat: 28.229287810507, lng: 83.98665410549233 } },
    { id: "13", position: { lat: 28.22329287810507, lng: 83.98665449233 } },
    { id: "14", position: { lat: 28.229287810507, lng: 83.9866541233 } },
  ];

  return (
    <>
      {isLoading && <Loading />}
      <div className="h-screen">
        <Navbar isSearch={true} />
        <div className="flex pt-20">
          <div className="basis-2/6 mr-5 h-[80vh]">
            <Map  listings={data?.listings}/>
          </div>
          <div className="basis-4/6 flex flex-col items-start h-[80vh] overflow-y-auto pr-10 md:pr-12">
            <h1 className="text-2xl font-semibold">Listings near you</h1>
            <p className="text-light2">Uploaded 2 days ago</p>
            <div className="flex flex-wrap justify-start gap-10 items-start my-5">
              {data?.listings?.map((i) => (
                <div key={i?.id}>
                  <ListingCard
                    id={i!.id}
                    price={i?.price}
                    address={i?.address}
                    nearestLandmark={i?.nearbyLandmark}
                    img={i?.img[0]}
                    saved={2 % 2 === 0 ? true : false}
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

export default search;
