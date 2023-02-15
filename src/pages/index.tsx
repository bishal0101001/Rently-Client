import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inter } from "@next/font/google";

import { HomeNotAuthenticated, HomeAuthenticated } from "@components/common";
import { login, logout, selectUser } from "./../slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/config/firebase";

const inter = Inter({ subsets: ["latin"] });

// interface Props {
//   config: object;
// }

export default function Home() {
  const { isAuthenticated } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser
        ? dispatch(
            login({
              id: currentUser.uid,
              name: currentUser.displayName,
              email: currentUser.email,
              phone: currentUser.phoneNumber,
              address: "Srijana Chowk",
              //@ts-ignore
              token: currentUser.accessToken,
            })
          )
        : dispatch(logout());
    });
    return unsubscribe;
  }, []);

  return (
    <div className={inter.className}>
      {isAuthenticated ? <HomeAuthenticated /> : <HomeNotAuthenticated />}
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID,
//   };
//   return {
//     props: {
//       config: firebaseConfig,
//     },
//   };
// };
