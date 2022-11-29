import React from "react";
import Image from "next/image";
import styles from "../../styles/Koksvecka.module.scss";

import { useSelector } from "react-redux";

import { Fade } from "react-awesome-reveal";

function Koksvecka() {
  const data = useSelector((state) => state.data.koksvecka);

  if (!data) return null;

  return (
    <section className={styles.koksvecka}>
      <h2>Köksvecka</h2>

      <section className={styles.vecka}>
        <h3>Denna vecka</h3>

        <section className={styles.people}>
          {
            // Map through winners of current week, and display them

            data.info.dennaVeckaSellers.map((person, i) => {
              return (
                <section className={styles.person} key={i}>
                  <section className={styles.pfpHolder}>
                    <Image
                      src={`/images/people/${person.pfp}`}
                      width={55}
                      height={55}
                      layout="responsive"
                      objectFit="contain"
                      alt={person.name}
                    />
                  </section>
                  <p>{person.name}</p>
                </section>
              );
            })
          }
        </section>
      </section>

      <section className={styles.vecka}>
        <h3>Nästa vecka</h3>
        <section className={styles.people}>
          {
            // Map through winners of next week, and display them

            data.info.nastaVeckaSellers.map((person, i) => {
              return (
                <section className={styles.person} key={i}>
                  <section className={styles.pfpHolder}>
                    <Image
                      src={`/images/people/${person.pfp}`}
                      width={55}
                      height={55}
                      layout="responsive"
                      objectFit="contain"
                      alt={person.name}
                    />
                  </section>
                  <p>{person.name}</p>
                </section>
              );
            })
          }
        </section>
      </section>

      <Fade triggerOnce delay={300}>
        <section className={styles.disclaimer}>
          <p>{data.info.disclaimer}</p>
        </section>
      </Fade>
    </section>
  );
}

export default Koksvecka;
