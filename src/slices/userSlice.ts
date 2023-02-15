import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store";

interface userDetails {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  token: string | null;
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
    logout: (state) => {
      state.userDetails = null;
      state.isAuthenticated = false;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
