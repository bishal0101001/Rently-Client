import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";

import { store } from "src/store";
import { Loading } from "@components/common";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/config/firebase";
import { login, logout, setCurrentLocation } from "src/slices/userSlice";
import { getUserById } from "src/config/db";

// import { AuthProvider } from "src/context/authContext";

const inter = Inter({ subsets: ["latin"] });

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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
            myListings: userDetails.myListings,
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

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url !== router.asPath && setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return loading ? <Loading /> : <></>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={inter.className}>
        <Loader />
        <Component {...pageProps} />
        {/* <AuthProvider>
      </AuthProvider> */}
      </div>
    </Provider>
  );
}

export const getInitialProps = () => {};
