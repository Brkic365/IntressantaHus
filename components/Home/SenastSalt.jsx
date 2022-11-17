import React from "react";
import styles from "../../styles/SenastSalt.module.scss";

import Carousel from "./Carousel";

const CAROUSEL_DATA = [
  {
    img: "villa.svg",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person1.png",
  },
  {
    img: "villa.svg",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person2.png",
  },
  {
    img: "villa.svg",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person3.png",
  },
  {
    img: "villa.svg",
    name: "Villa Jönsson, Stockholm",
    seller_pfp: "person4.png",
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
