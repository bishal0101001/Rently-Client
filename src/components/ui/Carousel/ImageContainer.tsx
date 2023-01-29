import React from "react";

interface Props {
  src: string;
  nextImg: () => void;
  prevImg: () => void;
}

const ImageContainer = ({ src, nextImg, prevImg }: Props) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-2xl drop-shadow-lg">
      <img src={src} alt="images" className="w-full h-full object-cover" />
      <button
        onClick={nextImg}
        type="button"
        className="absolute right-2 top-1/2 bg-secondary opacity-80 rounded-full p-4 hover:text-white hover:bg-primary ease-in-out transition-all delay-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        onClick={prevImg}
        type="button"
        className="absolute left-2 top-1/2 bg-secondary opacity-80 rounded-full p-4 hover:text-white hover:bg-primary ease-in-out transition-all delay-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageContainer;
