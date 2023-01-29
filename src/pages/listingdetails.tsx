import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

import Navbar from "@components/common/Header/Navbar";
import { Button, Carousel } from "@components/ui";
import { slideShowImages } from "./../services/fakeSlideshowService";
import { facilities } from "src/services/fakeFacilitiesService";
import Footer from "@components/common/Footer/Footer";
import Comments from "@components/common/Comments";
import { commentDetails } from "./../services/fakeCommentService";

interface Props {}

const listingdetails = (props: Props) => {
  return (
    <div className="flex flex-col ">
      <Navbar navItems={""} />
      <div className="pt-14 w-auto h-full mx-16">
        {/* <ImageSlider /> */}
        <div className="w-auto h-[80vh] drop-shadow-2xl">
          <div className="w-[70vw] h-full">
            <Carousel src={slideShowImages} />
          </div>
          <div className="flex flex-col items-start justify-evenly bg-secondary drop-shadow-2xl rounded-xl w-80 h-80 p-4 absolute right-0 -bottom-48">
            <div>
              <h1 className="font-semibold text-2xl">3BHK Apartment</h1>
              <p className="flex items-center text-lightText text-sm">
                <i>
                  <HiLocationMarker size={20} color="#000" />
                </i>
                Srijana Chowk, Pokhara
              </p>
            </div>
            <hr className="w-full border-light my-2" />
            <div>
              <p className="text-lightText">Price</p>
              <p className="text-2xl font-semibold">
                {" "}
                Rs 25,000 / <span className="text-lg">mo</span>
              </p>
            </div>
            <hr className="w-full border-light my-2" />
            <div className="flex flex-wrap items-center justify-between gap-1 my-2">
              {facilities?.map((i) => (
                <p className="flex items-center justify-center gap-1">
                  {i.name} {i.icon}
                </p>
              ))}
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
              Apartment Hosted by Sujit Sherchan
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            architecto vero, dolor reprehenderit repudiandae at vel molestiae
            delectus laudantium illo veritatis, deleniti numquam. Officia sequi
            totam ea numquam fuga aperiam sapiente consequuntur, quia mollitia
            laudantium, quas voluptate aut nihil adipisci sunt veritatis quidem,
            voluptatibus aliquam molestiae reprehenderit optio eligendi velit
            quos doloremque. Assumenda, vel. Dolorem porro ipsam reiciendis vero
            commodi?
          </p>
        </div>
        <div className="flex justify-between items-stretch gap-4 w-full h-[460px] mb-10">
          <div className="basis-3/5 flex flex-col relative">
            <h1 className="text-2xl font-semibold mb-2">Comments</h1>
            <div className="flex flex-col gap-6 overflow-y-scroll">
              {commentDetails?.map((c) => (
                <Comments img={c.img} name={c.name} comment={c.comment} />
              ))}
            </div>
            <div className="w-full h-6 bg-gradient-to-b from-secondary to-primary opacity-10 absolute bottom-0 rounded-b-lg"></div>
          </div>
          <div className="basis-2/5 flex flex-col items-start ">
            <h1 className="text-2xl font-semibold">Address</h1>
            <p className="text-lightText mb-4">
              23 street, Santi marga, Srijana Chowk
            </p>
            <img
              src="/mapimage.jpg"
              alt="map"
              className="w-full h-96 object-cover rounded"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default listingdetails;
