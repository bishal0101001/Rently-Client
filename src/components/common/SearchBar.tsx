import { BoxInput } from "@components/ui";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoSettings } from "react-icons/go";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="w-full rounded-full flex justify-between items-center border border-light2 px-4 ">
      <BiSearchAlt2 size={25} className="text-light2" />
      <input
        className="basis-11/12 p-2 border-none outline-none"
        placeholder="E.g. Nayabazar, Pokhara"
      />
      <GoSettings
        size={25}
        className="text-light2 cursor-pointer hover:text-primary"
      />
    </div>
  );
};

export default SearchBar;
