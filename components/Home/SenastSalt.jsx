import React from "react";
import styles from "../../styles/SenastSalt.module.scss";

import { useSelector } from "react-redux";

import Carousel from "./Carousel";

function SenastSalt() {
  const data = useSelector((state) => state.data.senastSalt);

  if (!data) return null;

  return (
    <section className={styles.senastSalt}>
      <h2>Senast sålt</h2>
      <Carousel
        property={{
          name: data.info.plats,
          seller_pfp: data.info.seller.pfp,
          images: data.info.images,
        }}
      />
    </section>
  );
}

export default SenastSalt;
