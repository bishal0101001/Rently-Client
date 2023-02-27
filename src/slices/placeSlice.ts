import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { Address } from "src/interface/Listings";

interface Place extends Address {
  zoom?: number;
}

const initialState: Place = {
  zoom: 14,
  position: { lat: 28.212889, lng: 83.975578 },
  formattedAddress: "",
  addressType: ["locality"],
};

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setPlace: (state: Place, action: PayloadAction<Place>) => {
      state.position = action.payload.position;
      state.formattedAddress = action.payload.formattedAddress;
      state.zoom = 16;
      state.addressType = action.payload.addressType;
    },
  },
});

export const selectPlace = (state: RootState) => state.place;

export const { setPlace } = placeSlice.actions;

export default placeSlice.reducer;
