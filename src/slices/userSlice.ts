import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store";

interface Coords {
  lat: number;
  lng: number;
}

interface userDetails {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string;
  token: string;
  currentLocation?: google.maps.LatLngLiteral;
}

export interface userState {
  userDetails: userDetails | null;
  isAuthenticated?: boolean;
}

const initialState: userState = {
  userDetails: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
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
  },
});

export const selectUser = (state: RootState) => state.user;

export const { login, logout, setCurrentLocation } = userSlice.actions;

export default userSlice.reducer;
