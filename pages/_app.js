import "../styles/globals.scss";

import Navbar from "../components/Navbar";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname.includes("/admin") && <Navbar />}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
