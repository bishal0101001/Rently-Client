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

const inter = Inter({ subsets: ["latin"] });

// interface Props {
//   config: object;
// }

export default function Home() {
  const { isAuthenticated } = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDetails = await getUserById(currentUser.uid);
        dispatch(
          login({
            id: currentUser.uid,
            name: currentUser?.displayName,
            email: currentUser.email,
            phone: currentUser!.phoneNumber,
            address: "",
            //@ts-ignore
            token: currentUser.accessToken,
            savedListings: userDetails.savedListing,
          })
        );
        // dispatch(toggleSaveListing(userDetails.savedListing));
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const address: google.maps.LatLngLiteral = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            dispatch(setCurrentLocation(address));
          });
        }
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className={inter.className}>
      {isAuthenticated ? <HomeAuthenticated /> : <HomeNotAuthenticated />}
    </div>
  );
}
