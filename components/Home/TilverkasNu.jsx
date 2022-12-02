import React from "react";
import styles from "../../styles/TilverkasNu.module.scss";
import Carousel from "./Carousel";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector } from "react-redux";

function TilverkasNu() {
  const data = useSelector((state) => state.data.tilverkasNu);

  return (
    <section className={styles.tilverkasNu}>
      <h2>Tillverkas nu</h2>
      {data ? (
        <Carousel
          property={{
            name: data.info.plats,
            images: data.info.images,
          }}
        />
      ) : (
        <Skeleton
          width={"30vw"}
          height={"25vh"}
          borderRadius={"10px"}
          style={{ marginTop: "2rem" }}
        />
      )}
    </section>
  );
}

export default TilverkasNu;
