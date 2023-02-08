import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/AdminPanel.module.scss";

import FilePicker from "../../components/Admin/FilePicker";
import LibraryPicker from "../../components/Admin/LibraryPicker";
import SellerPicker from "../../components/Admin/SellerPicker";

import SavedPopup from "../../components/Admin/SavedPopup";

import { useDispatch, useSelector } from "react-redux";

import { updateData } from "../../slices/dataSlice";

import { Fade } from "react-awesome-reveal";

export default function PanelTwo() {
  const forsaljningData = useSelector((state) => state.data.forsaljning);

  const dispatch = useDispatch();

  const [info, setInfo] = useState(null);

  const [salesThisYear, setSalesThisYear] = useState(null);
  const [yearTitle, setYearTitle] = useState(null);

  const [salesTotal, setSalesTotal] = useState(null);
  const [salesTotalTitle, setSalesTotalTitle] = useState(null);

  const [dennaVeckaSellers, setDennaVeckaSellers] = useState(null);
  const [nastaVeckaSellers, setNastaVeckaSellers] = useState(null);
  const [forsaljningSellers, setForsaljningSellers] = useState(null);

  const [saved, setSaved] = useState(false);

  const [canSaveVecka, setCanSaveVecka] = useState(false);
  const [canSaveForsaljning, setCanSaveForsaljning] = useState(false);

  const updateVecka = () => {
    if (dennaVeckaSellers && nastaVeckaSellers && info) {
      dispatch(
        updateData({
          id: "koksvecka",
          info: {
            dennaVeckaSellers,
            nastaVeckaSellers,
            disclaimer: info,
          },
        })
      );

      setSaved(true);
    }
  };

  const updateForsaljning = () => {
    if (salesThisYear && salesTotal && forsaljningSellers && yearTitle && salesTotalTitle) {
      let sellersObj = {};

      forsaljningSellers.forEach((seller) => {
        sellersObj[seller._id] = seller.sales;
      });

      dispatch(
        updateData({
          id: "forsaljning",
          info: {
            yearTitle: yearTitle,
            totalTitle: salesTotalTitle,
            thisYear: parseInt(salesThisYear),
            totalt: parseInt(salesTotal),
            sellers: sellersObj,
          },
        })
      );

      setSaved(true);
    }
  };

  useEffect(() => {
    if (dennaVeckaSellers && nastaVeckaSellers && info) {
      setCanSaveVecka(true);
    } else {
      setCanSaveVecka(false);
    }
  }, [dennaVeckaSellers, nastaVeckaSellers, info]);

  useEffect(() => {
    if (salesThisYear && salesTotal && forsaljningSellers) {
      setCanSaveForsaljning(true);
    } else {
      setCanSaveForsaljning(false);
    }
  }, [salesThisYear, salesTotal, forsaljningSellers]);

  useEffect(() => {
    if (forsaljningData) {
      setForsaljningSellers([...forsaljningData.info.sellers]);
    }
  }, [forsaljningData]);

  if (!forsaljningData) return null;

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
            <LibraryPicker
              amount={2}
              pickedSellers={(sellers) => setDennaVeckaSellers(sellers)}
            />
            <h3>Nästa vecka</h3>
            <LibraryPicker
              amount={2}
              pickedSellers={(sellers) => setNastaVeckaSellers(sellers)}
            />
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
              <button
                className={`${styles.save} ${
                  !canSaveVecka ? styles.disabledSave : undefined
                }`}
                onClick={updateVecka}
                disabled={!canSaveVecka}
              >
                spara
              </button>
            </section>
          </Fade>
        </section>

        <section className={styles.addSellers}>
          <Fade triggerOnce cascade damping={0.2}>
            <section className={styles.content}>
              <h3>Försäljning</h3>
              <SellerPicker
                startingSellers={forsaljningSellers}
                updatedSellers={(sellers) =>
                  setForsaljningSellers([...sellers])
                }
              />
              <h3>Totalt i år</h3>
              <input
                style={{marginBottom: "0"}}
                placeholder={forsaljningData.info.yearTitle}
                onChange={(e) => setYearTitle(e.target.value)}
              />
              <input
                placeholder={forsaljningData.info.thisYear}
                onChange={(e) => setSalesThisYear(e.target.value)}
              />
              <h3>Totalt</h3>
              <input
                style={{marginBottom: "0"}}
                placeholder={forsaljningData.info.totalTitle}
                onChange={(e) => setSalesTotalTitle(e.target.value)}
              />
              <input
                placeholder={forsaljningData.info.totalt}
                onChange={(e) => setSalesTotal(e.target.value)}
              />
            </section>
            <section className={styles.buttons}>
              <button className={styles.cancel}>avbryt</button>
              <button
                className={`${styles.save} ${
                  !canSaveForsaljning ? styles.disabledSave : undefined
                }`}
                onClick={updateForsaljning}
                disabled={!canSaveForsaljning}
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
