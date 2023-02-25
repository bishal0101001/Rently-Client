import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { HiLocationMarker } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

import { Comments, Footer, Navbar, Map } from "@components/common";
import { Carousel } from "@components/ui";
import { commentDetails } from "src/services/fakeCommentService";
import { Listing } from "src/interface/Listings";
import { getListings, getListingsById } from "src/config/db";
import { BiBed, BiBath, BiWifi } from "react-icons/bi";
import { CiParking1 } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

interface Props {
  listing: Listing;
}

const ListingDetailsPage = ({ listing }: Props) => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="pt-14 w-auto h-full mx-16">
        {/* <ImageSlider /> */}
        <div className="w-auto h-[80vh] drop-shadow-2xl">
          <div className="w-[70vw] h-full">
            <Carousel src={listing.img} />
          </div>
          <div className="flex flex-col items-start justify-evenly bg-secondary drop-shadow-2xl rounded-xl w-80 h-80 p-4 absolute right-0 -bottom-48">
            <div>
              <h1 className="font-semibold text-2xl">{listing?.title}</h1>
              <p className="flex items-center text-lightText text-sm">
                <i>
                  <HiLocationMarker size={20} color="#000" />
                </i>
                {listing?.address.title}
              </p>
            </div>
            <hr className="w-full border-light my-2" />
            <div>
              <p className="text-lightText">Price</p>
              <p className="text-2xl font-semibold">
                {" "}
                Rs {listing?.price} / <span className="text-lg">mo</span>
              </p>
            </div>
            <hr className="w-full border-light my-2" />
            <div className="flex flex-wrap items-center justify-between gap-2 my-2">
              <p className="flex items-center justify-center gap-1">
                {listing?.details.bed} <BiBed />
              </p>
              <p className="flex items-center justify-center gap-1">
                {listing?.details.bath} <BiBath />
              </p>
              {listing?.details.attachedBath && (
                <p className="flex items-center justify-center gap-1">
                  Attached <BsCheck2Circle />
                </p>
              )}
              {listing?.details.wifi && (
                <p className="flex items-center justify-center gap-1">
                  <BiWifi size={25} />
                </p>
              )}
              {listing?.details.parking && (
                <p className="flex items-center justify-center gap-1">
                  <CiParking1 size={25} />
                </p>
              )}
            </div>
            <button className="flex items-center justify-center gap-2 w-full h-10 bg-primary text-secondary rounded">
              Send Message{" "}
              <i>
                <FaTelegramPlane size={25} />
              </i>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/5 gap-4 my-10 z-50">
          <div className="flex items-center justity-start gap-3">
            <img
              src="/profile.jpg"
              alt="profile"
              className="rounded-full w-24 h-24 object-cover"
            />
            <h1 className="font-semibold text-3xl w-3/5">
              Apartment Hosted by Sujit Gauchan
            </h1>
          </div>
          <p>{listing?.description}</p>
        </div>
        <div className="flex justify-between items-stretch gap-4 w-full h-[460px] mb-10">
          <div className="basis-3/5 flex flex-col relative">
            <h1 className="text-2xl font-semibold mb-2">Comments</h1>
            <div className="flex flex-col gap-6 overflow-y-scroll py-4">
              {commentDetails?.map((c) => (
                <Comments img={c.img} name={c.name} comment={c.comment} />
              ))}
            </div>
            <div className="w-full h-6 bg-gradient-to-b from-secondary to-primary opacity-10 absolute bottom-0 rounded-b-lg"></div>
          </div>
          <div className="basis-2/5 flex flex-col items-start ">
            <h1 className="text-2xl font-semibold">Address</h1>
            <p className="text-lightText mb-4">{listing?.address.title}</p>

            <div className="w-full h-96 object-cover rounded">
              <Map
                markers={[{ id: "1", position: listing.address.position }]}
                Icon={ImLocation2}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

//@ts-ignore
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const listing = await getListingsById(params?.id as string);

  return {
    props: {
      listing,
    },
  };
};

//@ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const listings = await getListings();

  const paths = listings.map((listing: Listing) => ({
    params: { id: listing.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ListingDetailsPage;
