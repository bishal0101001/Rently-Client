import React from "react";
import slideshow from "./slideshow";
import { twMerge } from "tailwind-merge";

interface Props {
  activeItem: number;
  handleIndex: (index: number) => void;
  src: string[];
}

const ImageViewer = ({ activeItem, handleIndex, src }: Props) => {
  return (
    <div className="absolute bottom-0 py-2 w-full mx-auto flex justify-start items-center drop-shadow-2xl ease-in-out transition-all delay-150 bg-gradient-to-t from-black rounded-b-2xl">
      {src?.map((value, index) => {
        let className =
          "w-28 h-20 overflow-hidden rounded-lg drop-shadow-lg hover:scale-110 mx-4";
        if (index === activeItem) {
          className = twMerge(
            `${className} scale-110 border-2 border-secondary`
          );
        }
        return (
          <button className={className} onClick={() => handleIndex(index)}>
            <img
              src={value}
              alt="images"
              className="w-full h-full object-cover w-26"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ImageViewer;
