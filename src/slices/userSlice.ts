import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store";

interface userDetails {
  id: string;
  name: string;
  email: string;
  phone: number;
  address: string;
}

export interface userSlice {
  userDetails: userDetails | null;
  isAuthenticated?: boolean;
}

const initialState: userSlice = {
  userDetails: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userDetails>) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
      state.isAuthenticated = state.userDetails ? true : false;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { login } = userSlice.actions;

export default userSlice.reducer;
