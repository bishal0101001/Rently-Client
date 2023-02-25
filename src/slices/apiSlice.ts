import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  DocumentData,
  DocumentSnapshot,
  QueryDocumentSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { ListingCategories } from "src/enums/listingCategoryEnums";
import { Listing } from "src/interface/Listings";
import { addListing, db, getListings, getListingsById } from "src/config/db";

interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
}

interface ListingResponse {
  listings: Listing[];
}

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, string>({
      query: (token) => `user/${token}`,
    }),
  }),
});

export const listingsApi = createApi({
  reducerPath: "listingsApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getListings: builder.query<ListingResponse, void>({
      //@ts-ignore
      queryFn: async () => {
        const listings = await getListings();

        return { data: { listings } };
      },
      //@ts-ignore
      providesTags: (result) =>
        result
          ? result.listings.map(({ id }) => ({ type: "Listings", id }))
          : [{ type: "Listings" }],
    }),
    getListingsById: builder.query<Listing, string>({
      //@ts-ignore
      queryFn: async (id) => {
        const listing = await getListingsById(id);
        return { data: listing };
      },
      //@ts-ignore
      providesTags: (result, error, id) => [{ type: "Listings", id }],
    }),
    addListing: builder.mutation<Listing, Omit<Listing, "id">>({
      //@ts-ignore
      queryFn: async (newListing) => {
        console.log(newListing, "new listing to be added");
        const docRef = await addListing(newListing);
        return { data: { id: docRef.id, ...newListing } };
      },
      //@ts-ignore
      invalidatesTags: [{ type: "Listings" }],
    }),
  }),
});

export const { useGetCurrentUserQuery } = userApi;
export const {
  useGetListingsQuery,
  useGetListingsByIdQuery,
  useAddListingMutation,
} = listingsApi;
