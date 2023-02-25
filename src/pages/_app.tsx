import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";

import { store } from "src/store";
import { Loading } from "@components/common";

// import { AuthProvider } from "src/context/authContext";

const inter = Inter({ subsets: ["latin"] });

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    <div className={inter.className}>
      <Loader />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {/* <AuthProvider>
      </AuthProvider> */}
    </div>
  );
}
