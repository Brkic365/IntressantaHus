import React, { useEffect } from "react";

import "../styles/globals.scss";

import { store } from "../store";
import { Provider } from "react-redux";

import Navbar from "../components/Navbar";

import { useRouter } from "next/router";

import { fetchData } from "../slices/dataSlice";
import { fetchSellers } from "../slices/sellersSlice";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    store.dispatch(fetchData());
    store.dispatch(fetchSellers());
  }, []);

  return (
    <Provider store={store}>
      {router.pathname.includes("/admin") && <Navbar />}

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
