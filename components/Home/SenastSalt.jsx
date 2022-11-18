import React from "react";
import styles from "../../styles/SenastSalt.module.scss";

import Carousel from "./Carousel";

const CAROUSEL_DATA = [
  {
    img: "villa.webp",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person1.webp",
  },
  {
    img: "villa-2.webp",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person2.webp",
  },
  {
    img: "villa.webp",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person3.webp",
  },
  {
    img: "villa-2.webp",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person4.webp",
  },
];

function SenastSalt() {
  return (
    <section className={styles.senastSalt}>
      <h2>Senast sålt</h2>
      <Carousel data={CAROUSEL_DATA} />
    </section>
  );
}

export default SenastSalt;
