import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inter } from "@next/font/google";

import { HomeNotAuthenticated, HomeAuthenticated } from "@components/common";
import {
  login,
  logout,
  selectUser,
  setCurrentLocation,
  toggleSaveListing,
} from "./../slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/config/firebase";
import { getUserById } from "src/config/db";
import { myListings } from "./../services/fakeListingsService";

const inter = Inter({ subsets: ["latin"] });

// interface Props {
//   config: object;
// }

export default function Home() {
  const { isAuthenticated } = useSelector(selectUser);

  

  return (
    <div className={inter.className}>
      {isAuthenticated ? <HomeAuthenticated /> : <HomeNotAuthenticated />}
    </div>
  );
}
