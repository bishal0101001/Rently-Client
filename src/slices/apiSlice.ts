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
import { db, getListings } from "src/config/db";

interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
}

interface listingResponse {
  listings: Listing[];
}

// interface Listing {
//   id: string;
//   title: string;
//   location: string;
//   nearbyLandmark: string;
//   details: {
//     bed: number;
//     bath: number;
//     wifi: boolean;
//     parking: boolean;
//   };
//   category: ListingCategories;
//   comments: {
//     id: string;
//     userId: string;
//     comment: string;
//   }[];
// }

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
    getListing: builder.query<listingResponse, void>({
      //@ts-ignore
      async queryFn() {
        const querySnapshot = await getListings();
        let data: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        return { data: { listings: data } };
      },
    }),
    addListing: builder.mutation<listingResponse, string>({
      //@ts-ignore
      async queryFn(data) {
        console.log({ data });
      },
    }),
  }),
});

export const { useGetCurrentUserQuery } = userApi;
export const { useGetListingQuery } = listingsApi;
