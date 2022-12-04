import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/AdminPanel.module.scss";

import FilePicker from "../../components/Admin/FilePicker";
import LibraryPicker from "../../components/Admin/LibraryPicker";
import SavedPopup from "../../components/Admin/SavedPopup";

import { ref, deleteObject } from "firebase/storage";

import { useDispatch, useSelector } from "react-redux";

import { updateData } from "../../slices/dataSlice";

import { Fade } from "react-awesome-reveal";

import storage from "../../lib/firebaseConfig.js";

export default function PanelOne() {
  const dispatch = useDispatch();

  const oldSenastSaltData = useSelector((state) => state.data.senastSalt);
  const oldTilverkasNuData = useSelector((state) => state.data.tilverkasNu);

  const [pickedSeller, setPickedSeller] = useState(null);

  const [senastSaltFiles, setSenastSaltFiles] = useState(null);
  const [tilverkasNuFiles, setTilverkasNuFiles] = useState(null);

  const [senastSaltPlats, setSenastSaltPlats] = useState(null);
  const [tilverkasNuPlats, setTilverkasNuPlats] = useState(null);

  const [senastSaltCanSave, setSenastSaltCanSave] = useState(false);
  const [tilverkasNuCanSave, setTilverkasNuCanSave] = useState(false);

  const [saved, setSaved] = useState(false);

  const updateSenastSalt = () => {
    if (pickedSeller && senastSaltPlats) {
      let storageRef = null;

      oldSenastSaltData.info.images.forEach((image) => {
        let index = senastSaltFiles.indexOf((file) => file.name === image.name);

        if (index === -1) {
          storageRef = ref(storage, `/files/${image.name}`);

          deleteObject(storageRef).catch(() => {});
        }
      });

      dispatch(
        updateData({
          id: "senastSalt",
          info: {
            images: senastSaltFiles,
            seller: pickedSeller._id,
            plats: senastSaltPlats,
          },
        })
      );

      setSaved(true);
    }
  };

  const updateTilverkasNu = () => {
    if (tilverkasNuPlats) {
      let storageRef = null;

      oldTilverkasNuData.info.images.forEach((image) => {
        let index = tilverkasNuFiles.indexOf(
          (file) => file.name === image.name
        );

        if (index === -1) {
          storageRef = ref(storage, `/files/${image.name}`);

          deleteObject(storageRef).catch(() => {});
        }
      });

      dispatch(
        updateData({
          id: "tilverkasNu",
          info: {
            images: tilverkasNuFiles,
            plats: tilverkasNuPlats,
          },
        })
      );

      setSaved(true);
    }
  };

  useEffect(() => {
    if (pickedSeller && senastSaltPlats) {
      setSenastSaltCanSave(true);
    } else {
      setSenastSaltCanSave(false);
    }
  }, [pickedSeller, senastSaltPlats]);

  useEffect(() => {
    if (tilverkasNuPlats) {
      setTilverkasNuCanSave(true);
    } else {
      setTilverkasNuCanSave(false);
    }
  }, [tilverkasNuPlats]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Panel 1 | Intressanta Hus</title>
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
            <h3>Tillverkas nu</h3>
            <FilePicker updateFiles={(files) => setTilverkasNuFiles(files)} />
            <h3>Plats</h3>
            <input
              placeholder="Ange en plats..."
              onChange={(e) => {
                setTilverkasNuPlats(e.target.value);
              }}
            />
            <section className={styles.buttons}>
              <button className={styles.cancel}>avbryt</button>
              <button
                className={`${styles.save} ${
                  !tilverkasNuCanSave ? styles.disabledSave : undefined
                }`}
                onClick={updateTilverkasNu}
                disabled={!tilverkasNuCanSave}
              >
                spara
              </button>
            </section>
          </Fade>
        </section>

        <section className={styles.addFiles}>
          <Fade triggerOnce cascade damping={0.2}>
            <h3>Senast sålt</h3>
            <FilePicker updateFiles={(files) => setSenastSaltFiles(files)} />
            <h3>Säljare</h3>
            <LibraryPicker
              amount={1}
              pickedSellers={(sellers) => setPickedSeller(sellers[0])}
            />
            <h3>Plats</h3>
            <input
              placeholder="Ange en plats..."
              onChange={(e) => {
                setSenastSaltPlats(e.target.value);
              }}
            />
            <section className={styles.buttons}>
              <button className={styles.cancel}>avbryt</button>
              <button
                className={`${styles.save} ${
                  !senastSaltCanSave ? styles.disabledSave : undefined
                }`}
                onClick={updateSenastSalt}
                disabled={!senastSaltCanSave}
              >
                spara
              </button>
            </section>
          </Fade>
        </section>
      </main>
    </div>
  );
}
