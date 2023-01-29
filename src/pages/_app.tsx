import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

import { store } from "src/store";
import { Provider } from "react-redux";

// import { AuthProvider } from "src/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {/* <AuthProvider>
      </AuthProvider> */}
    </div>
  );
}
