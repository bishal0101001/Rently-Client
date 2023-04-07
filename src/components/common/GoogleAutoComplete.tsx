import React from "react";
import GoogleAutocomplete from "react-google-autocomplete";
import { Autocomplete } from "@react-google-maps/api";
import { Address } from "src/interface/Listings";
import { twMerge } from "tailwind-merge";

interface Props {
  onSelect: (val: Address) => void;
  style?: string;
}

const GoogleAutoComplete = ({ onSelect, style }: Props) => {
  const className = twMerge(
    `bg-dark text-light text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none ${style}`
  );
  return (
    <GoogleAutocomplete
      apiKey={process.env.googleMapsApiKey}
      options={{
        types: [],
        componentRestrictions: { country: "np" },
      }}
      onPlaceSelected={(value) => {
        console.log(value, "value from autocomplete select");
        value.geometry?.location &&
          value.address_components &&
          onSelect({
            position: {
              lat: value.geometry?.location?.lat(),
              lng: value.geometry?.location?.lng(),
            },
            formattedAddress: `${value!.address_components[0]!.long_name}, ${
              value.address_components[1].long_name
            }`,
            addressType: value!.address_components[0].types,
          });
      }}
      className={className}
    />
  );
};

export default GoogleAutoComplete;
