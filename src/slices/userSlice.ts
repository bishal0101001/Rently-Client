import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { User } from "src/interface/User";
import { RootState } from "src/store";
import { objectsAreEqual } from "src/utils/objectsAreEqual";

interface userDetails extends User {
  currentLocation?: google.maps.LatLngLiteral;
}

interface listingId {
  id: string;
}

export interface userState {
  userDetails: userDetails | null;
  isAuthenticated?: boolean;
}

const initialState: userState = {
  userDetails: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: userState, action: PayloadAction<userDetails>) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
      state.isAuthenticated = state.userDetails ? true : false;
    },
    logout: (state: userState) => {
      state.userDetails = null;
      state.isAuthenticated = false;
    },
    setCurrentLocation: (
      state: userState,
      action: PayloadAction<google.maps.LatLngLiteral>
    ) => {
      state.userDetails!.currentLocation = action.payload;
    },
    toggleMyListings: (
      state: userState,
      action: PayloadAction<listingId>
    ) => {
      if (state.userDetails) {
        if (
          state.userDetails.myListings.some((item) =>
            objectsAreEqual(current(item), action.payload)
          )
        ) {
          state.userDetails.myListings = state.userDetails.myListings.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          state.userDetails.myListings.push(action.payload);
          // state.userDetails.savedListings = [
          //   ...state.userDetails.savedListings,
          //   ...action.payload,
          // ];
        }
      }
    },
    toggleSaveListing: (
      state: userState,
      action: PayloadAction<listingId[]>
    ) => {
      if (state.userDetails) {
        if (
          state.userDetails.savedListings.some((item) =>
            objectsAreEqual(current(item), action.payload[0])
          )
        ) {
          state.userDetails.savedListings =
            state.userDetails.savedListings.filter(
              (item) => item.id !== action.payload[0].id
            );
        } else {
          state.userDetails.savedListings.push(action.payload[0]);
          // state.userDetails.savedListings = [
          //   ...state.userDetails.savedListings,
          //   ...action.payload,
          // ];
        }
      }
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { login, logout, setCurrentLocation, toggleSaveListing, toggleMyListings } =
  userSlice.actions;

export default userSlice.reducer;
