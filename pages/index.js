import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Koksvecka from "../components/Home/Koksvecka";
import TilverkasNu from "../components/Home/TilverkasNu";
import Forsaljning from "../components/Home/Forsaljning";
import Pipeline from "../components/Home/Pipeline";
import SenastSalt from "../components/Home/SenastSalt";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intressanta Hus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <main className={styles.home}>
        <section className={styles.top}>
          <Koksvecka />
          <TilverkasNu />
          <Forsaljning />
        </section>

        <section className={styles.bottom}>
          <Pipeline />
          <SenastSalt />
        </section>
      </main>
    </div>
  );
}
