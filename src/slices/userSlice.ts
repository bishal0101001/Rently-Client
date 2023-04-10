import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { objectsAreEqual } from "src/utils/objectsAreEqual";

interface userDetails {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  address?: string;
  token: string;
  currentLocation?: google.maps.LatLngLiteral;
  savedListings: savedListings[];
}

interface savedListings {
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
    toggleSaveListing: (
      state: userState,
      action: PayloadAction<savedListings[]>
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

export const { login, logout, setCurrentLocation, toggleSaveListing } =
  userSlice.actions;

export default userSlice.reducer;
