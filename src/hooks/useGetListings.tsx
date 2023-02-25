import { useEffect, useState } from "react";
import { Listing } from "src/interface/Listings";
import { useGetListingsQuery } from "src/slices/apiSlice";

interface ListingResponse {
  listings: Listing[];
}

export function useGetListings() {
  const { data } = useGetListingsQuery();

  return data;
}
