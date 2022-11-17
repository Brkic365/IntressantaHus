import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/AdminPanel.module.scss";

import FilePicker from "../../components/Admin/FilePicker";
import SavedPopup from "../../components/Admin/SavedPopup";

export default function PanelOne() {
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Panel 1 | Intressanta Hus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <SavedPopup
        open={saved}
        handleClose={() => {
          setSaved(false);
        }}
      />

      <main className={styles.adminPanelOne}>
        <section className={styles.addFiles}>
          <h3>Tillverkas nu</h3>
          <FilePicker />
          <h3>Säljare</h3>
          <FilePicker />
          <section className={styles.buttons}>
            <button className={styles.cancel}>avbryt</button>
            <button className={styles.save} onClick={() => setSaved(true)}>
              spara
            </button>
          </section>
        </section>

        <section className={styles.addFiles}>
          <h3>Senast sålt</h3>
          <FilePicker />
          <h3>Säljare</h3>
          <FilePicker />
          <section className={styles.buttons}>
            <button className={styles.cancel}>avbryt</button>
            <button className={styles.save} onClick={() => setSaved(true)}>
              spara
            </button>
          </section>
        </section>
      </main>
    </div>
  );
}
