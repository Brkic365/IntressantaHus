import React from "react";
import styles from "../../styles/TilverkasNu.module.scss";
import Carousel from "./Carousel";

const CAROUSEL_DATA = {
  name: "Villa Jönsson, Stockholm",
  images: ["villa.webp", "villa-2.webp"],
};

function TilverkasNu() {
  return (
    <section className={styles.tilverkasNu}>
      <h2>Tillverkas nu</h2>
      <Carousel property={CAROUSEL_DATA} />
    </section>
  );
}

export default TilverkasNu;
