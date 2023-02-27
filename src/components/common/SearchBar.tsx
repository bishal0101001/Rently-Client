import React, { useState } from "react";

import { BoxInput } from "@components/ui";
import { GoogleAutoComplete } from "@components/common";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { Address } from "src/interface/Listings";
import { useDispatch, useSelector } from "react-redux";
import { setPlace } from "src/slices/placeSlice";

type Props = {};

const SearchBar = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full rounded-full flex justify-between items-center border border-light2 px-4 z-[999999]">
      <BiSearchAlt2 size={25} className="text-light2" />

      <GoogleAutoComplete
        onSelect={(value) => dispatch(setPlace(value))}
        style="bg-secondary text-dark "
      />

      {/* <input
        className="basis-11/12 p-2 border-none outline-none"
        placeholder="E.g. Nayabazar, Pokhara"
      /> */}
      <GoSettings
        size={25}
        className="text-light2 cursor-pointer hover:text-primary"
      />
    </div>
  );
};

export default SearchBar;
