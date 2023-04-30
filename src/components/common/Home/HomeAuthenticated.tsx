import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Footer, Loading, Navbar } from "@components/common";
import { useGetListingsQuery } from "src/slices/apiSlice";
import { BsFillHouseDoorFill } from "react-icons/bs";

type Props = {};

const HomeAuthenticated = (props: Props) => {
  const { data, error, isLoading } = useGetListingsQuery();
  const topListings = data?.listings.slice(0, 5);

  return (
    <>
      {isLoading && <Loading />}
      <Navbar isHome={true} />
      <div className="flex flex-col h-screen w-full items-center justify-center pt-20 px-10 md:px-16">
        <div className="flex w-full justify-evenly items-center md:justify-center mb-6">
          <Link href="/rentout">
            <div className="flex flex-col justify-center items-center bg-light w-44 h-36 rounded-lg relative md:w-80 md:h-56 md:mr-20">
              <Image
                src="/icon_home_neww.png"
                alt="rent_out"
                width={250}
                height={250}
                className="drop-shadow-home absolute -top-10 hover:scale-110 delay-100 ease-out"
              />
              <div className="flex justify-between items-center absolute bottom-5">
                <h1 className="font-semibold mr-2 text-lg">Rent out</h1>
                <span className="w-8 h-8 md:w-12 md:h-12">
                  <Image
                    src="/arrow_right.svg"
                    height={400}
                    width={400}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
          </Link>
          <Link href="/search">
            <div className="flex flex-col justify-center items-center bg-light w-44 h-36 rounded-lg relative md:w-80 md:h-56 ">
              <Image
                src="/icon_search.png"
                alt="rent_out"
                width={250}
                height={250}
                className="drop-shadow-xl absolute -top-10 hover:scale-110 delay-100 ease-out"
              />
              <div className="flex justify-between items-center absolute bottom-5">
                <h1 className="font-semibold mr-2 text-lg">Find a room</h1>
                <span className="w-8 h-8 md:w-12 md:h-12">
                  <Image
                    src="/arrow_right.svg"
                    height={400}
                    width={400}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold items-start justify-start mt-4">
          Listings near you
        </h1>
        <div className="flex flex-wrap justify-center items-center mb-2 gap-5 h-20 overflow-y-hidden overflow-x-hidden w-full ">
          {topListings?.map((i) => (
            <Link
              key={i.id}
              className="flex cursor-pointer"
              href={`/listing/${i.id}`}
            >
              <div className="basis-1/5 bg-light2 rounded-full mr-2 p-3 ">
                <BsFillHouseDoorFill
                  color="white"
                  className="w-4 h-4 md:w-7 md:h-6 rounded-full"
                />
              </div>
              <div className="basis-4/5 flex flex-col justify-center overflow-hidden">
                <h1 className="text-lg font-semibold">{i.title}</h1>
                <p className="overflow-hidden">{i?.address?.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeAuthenticated;
