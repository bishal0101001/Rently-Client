import React, { useState } from "react";

interface ProgressBarProps {
  progress: number; // Value from 0 to 100
  height?: number; // Optional height in pixels
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = 4 }) => {
  return (
    <div className={`bg-gray-300 h-${height} relative rounded overflow-hidden`}>
      <div
        className="bg-green-500 absolute top-0 bottom-0 left-0"
        style={{ width: `${progress}%` }}
      />
    </div>
    // <div className="relative">
    //   <input
    //     type="file"
    //     className="w-full border rounded py-2 px-4 border-gray-400"
    //   />
    //   <div
    //     className="absolute inset-y-0 left-0 border-t-2 border-b-2 border-l-2"
    //     style={{ width: `${progress}%`, borderRadius: "inherit" }}
    //   />
    //   <div
    //     className="absolute inset-y-0 right-0 border-t-2 border-b-2 border-r-2"
    //     style={{ width: `${progress}%`, borderRadius: "inherit" }}
    //   />
    //   {isUploading && (
    //     <div
    //       className="absolute inset-y-0 left-0 "
    //       style={{
    //         width: `${progress}%`,
    //         height: "100%",
    //         borderRadius: "inherit",
    //       }}
    //     />
    //   )}
    // </div>
  );
};

export default ProgressBar;
