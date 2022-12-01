import React from "react";
import styles from "../../styles/TilverkasNu.module.scss";
import Carousel from "./Carousel";

import { useSelector } from "react-redux";

function TilverkasNu() {
  const data = useSelector((state) => state.data.tilverkasNu);

  if (!data) return null;

  return (
    <section className={styles.tilverkasNu}>
      <h2>Tillverkas nu</h2>
      <Carousel
        property={{
          name: data.info.plats,
          images: data.info.images,
        }}
      />
    </section>
  );
}

export default TilverkasNu;
