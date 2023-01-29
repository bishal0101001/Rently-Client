import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  style: string;
}

const Line = ({ style }: Props) => {
  const className = twMerge(`w-full border-light my-2 ${style}`);
  return <hr className={className} />;
};

export default Line;
