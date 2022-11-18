import React from "react";
import styles from "../../styles/TilverkasNu.module.scss";
import Carousel from "./Carousel";

const CAROUSEL_DATA = [
  {
    img: "villa.webp",
    name: "Villa Jönsson, Stockholm",
  },
  {
    img: "villa-2.webp",
    name: "Villa Jönsson, Stockholm",
  },
  {
    img: "villa.webp",
    name: "Villa Jönsson, Stockholm",
  },
  {
    img: "villa-2.webp",
    name: "Villa Jönsson, Stockholm",
  },
];

function TilverkasNu() {
  return (
    <section className={styles.tilverkasNu}>
      <h2>Tillverkas nu</h2>
      <Carousel data={CAROUSEL_DATA} />
    </section>
  );
}

export default TilverkasNu;
