import React, { useState } from "react";
import {
  BsArrowBarRight,
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
} from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import ImageContainer from "./ImageContainer";
import ImageViewer from "./ImageViewer";
import useInterval from "@hooks/useInterval";

interface Props {
  src: string[];
}

const Carousel: React.FC<Props> = ({ src }) => {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3000);

  const increaseIndex = () => {
    setDelay(4000);
    setIndex(index === src.length - 1 ? 0 : index + 1);
  };

  const decreaseIndex = () => {
    setDelay(4000);
    setIndex(index === 0 ? src.length - 1 : index - 1);
  };

  const handleIndex = (index: number) => {
    setDelay(4000);
    setIndex(index);
  };

  useInterval(increaseIndex, delay);

  return (
    // <div className="relative mx-auto my-4  lg:w-[1000px] lg:h-[600px]  md:w-[400px] md:h-[250px] sm:w-[600px] sm:h-[400px]">
    <div className="relative mx-auto my-4 w-full h-full">
      {/* <ImageContainer
        src={src[index]}
        nextImg={increaseIndex}
        prevImg={decreaseIndex}
      /> */}
      <div className="w-full h-full overflow-hidden rounded-2xl drop-shadow-lg">
        <img
          src={src[index]}
          alt="images"
          className="w-full h-full object-cover"
        />
        <button
          onClick={increaseIndex}
          type="button"
          className="absolute right-2 top-1/2 bg-secondary opacity-80 rounded-full p-3 drop-shadow-lg hover:text-white hover:bg-primary ease-in-out transition-all delay-100"
        >
          <VscChevronRight size={30} />
        </button>
        <button
          onClick={decreaseIndex}
          type="button"
          className="absolute left-2 top-1/2 bg-secondary opacity-80 rounded-full p-3 hover:text-white hover:bg-primary ease-in-out transition-all delay-100"
        >
          <VscChevronLeft size={30} />
        </button>
      </div>
      <ImageViewer activeItem={index} handleIndex={handleIndex} src={src} />
    </div>
  );
};

export default Carousel;
