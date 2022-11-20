import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/AdminPanel.module.scss";

import FilePicker from "../../components/Admin/FilePicker";
import LibraryPicker from "../../components/Admin/LibraryPicker";
import SellerPicker from "../../components/Admin/SellerPicker";

import SavedPopup from "../../components/Admin/SavedPopup";

import { Fade } from "react-awesome-reveal";

export default function PanelTwo() {
  const [info, setInfo] = useState(null);

  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Panel 2 | Intressanta Hus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.webp" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
      </Head>

      <SavedPopup
        open={saved}
        handleClose={() => {
          setSaved(false);
        }}
      />

      <main className={styles.adminPanelOne}>
        <section className={styles.addFiles}>
          <Fade triggerOnce cascade damping={0.2}>
            <h3>Denna vecka</h3>
            <LibraryPicker amount={2} />
            <h3>Nästa vecka</h3>
            <LibraryPicker amount={2} />
            <h3>Information</h3>
            <section className={styles.infoInput}>
              {" "}
              <textarea
                rows="6"
                maxlength="100"
                onChange={(e) => setInfo(e.target.value)}
              />
              <p className={styles.limit}>{info ? info.length : 0}/100</p>
            </section>
            <section className={styles.buttons}>
              <button className={styles.cancel}>avbryt</button>
              <button className={styles.save} onClick={() => setSaved(true)}>
                spara
              </button>
            </section>
          </Fade>
        </section>

        <section className={styles.addSellers}>
          <Fade triggerOnce cascade damping={0.2}>
            <section className={styles.content}>
              <h3>Försäljning</h3>
              <SellerPicker />
              <h3>Totalt i år</h3>
              <input placeholder="455" />
              <h3>Totalt</h3>
              <input placeholder="455" />
            </section>
            <section className={styles.buttons}>
              <button className={styles.cancel}>avbryt</button>
              <button className={styles.save} onClick={() => setSaved(true)}>
                spara
              </button>
            </section>
          </Fade>
        </section>
      </main>
    </div>
  );
}
