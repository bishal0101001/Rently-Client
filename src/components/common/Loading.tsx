import React from "react";
import Lottie from "lottie-react";
import loadingHouse from "@assets/99844-loading.json";
import { GiHouse } from "react-icons/gi";
import Skeleton from "react-loading-skeleton";
import { SiHomebridge } from "react-icons/si";

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 64, color = "gray" }) => {
  const isLoading = true;
  return (
    <div className="bg-white/70 opacity-80 flex flex-col justify-center items-center h-screen w-full absolute z-[999999]">
      {/* <div className="w-60 h-60">
    // //     <Lottie
    // //       animationData={loadingHouse}
    // //       loop={true}
    // //       style={{ color: "#000" }}
    // //     />
    // //   </div> */}
      <div className="flex flex-col items-center justify-center animate-pulse infinite z-[999999]">
        <div className="animate-home infinite">
          <SiHomebridge size={size} color={color} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
