import React from "react";
import Lottie from "lottie-react";
import loadingHouse from "@assets/99844-loading.json";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="bg-white/70  opacity-80 flex flex-col justify-center items-center h-screen w-full absolute z-[999999]">
      <div className="w-60 h-60">
        <Lottie
          animationData={loadingHouse}
          loop={true}
          style={{ color: "#000" }}
        />
      </div>
    </div>
  );
};

export default Loading;
