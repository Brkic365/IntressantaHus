import React from "react";
import styles from "../../styles/SenastSalt.module.scss";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector } from "react-redux";

import Carousel from "./Carousel";

function SenastSalt() {
  const data = useSelector((state) => state.data.senastSalt);

  return (
    <section className={styles.senastSalt}>
      <h2>Senast sålt</h2>
      {data ? (
        <Carousel
          property={{
            name: data.info.plats,
            seller_pfp: data.info.seller.pfp,
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

export default SenastSalt;
