import React from "react";
import styles from "../../styles/SenastSalt.module.scss";

import Carousel from "./Carousel";

const CAROUSEL_DATA = {
  name: "Villa Jönsson, Stockholm",
  seller_pfp: "person1.webp",
  images: ["villa.webp", "villa-2.webp"],
};

function SenastSalt() {
  return (
    <section className={styles.senastSalt}>
      <h2>Senast sålt</h2>
      <Carousel property={CAROUSEL_DATA} />
    </section>
  );
}

export default SenastSalt;
