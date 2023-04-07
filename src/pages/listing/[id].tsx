import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { HiLocationMarker } from "react-icons/hi";
import { FaHouseUser, FaTelegramPlane } from "react-icons/fa";

import { Comments, Facilities, Footer, Navbar, Map } from "@components/common";
import { Carousel } from "@components/ui";
import { commentDetails } from "src/services/fakeCommentService";
import { Listing } from "src/interface/Listings";
import { getListings, getListingsById, getUserById } from "src/config/db";
import { ImLocation2 } from "react-icons/im";
import { User } from "src/interface/User";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

interface Props {
  listing: Listing;
  listingOwnerDetails: User;
}

const ListingDetailsPage = ({ listing, listingOwnerDetails }: Props) => {
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
              <Facilities listing={listing} />
            </div>
            {/* <button className="flex items-center justify-center gap-2 w-full h-10 bg-primary text-secondary rounded">
              Send Message{" "}
              <i>
                <FaTelegramPlane size={25} />
              </i>
            </button> */}
            <div className="flex items-center justify-center gap-2 w-full h-10 rounded">
              <span className="flex items-center justify-center gap-2 w-full h-full bg-primary text-secondary rounded">
                Phone <BsTelephoneFill size={25} />
              </span>
              <span className="flex items-center justify-center gap-2 w-full h-full bg-primary text-secondary rounded">
                Email <MdEmail size={25} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/5 gap-4 my-10 z-50">
          <div className="flex items-center justity-start gap-3">
            <div className="rounded-full w-20 h-20 bg-light2 flex items-center justify-center">
              <FaHouseUser size={40} color="white" />
            </div>
            <h1 className="flex flex-col font-semibold text-3xl ">
              {`${listing.category} listed by - ${listingOwnerDetails.name}`}
              <span className="text-sm">
                {listing.createdAt && new Date(listing.createdAt).getDay()} days
                ago
              </span>
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
  const listingOwnerDetails = await getUserById(listing.userId);

  return {
    props: {
      listing,
      listingOwnerDetails,
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
