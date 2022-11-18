import React from "react";
import Image from "next/image";
import styles from "../../styles/Koksvecka.module.scss";

import { Fade } from "react-awesome-reveal";

const dennaVecka = [
  {
    name: "Achraf Andrew",
    pfp: "person1.webp",
  },
  {
    name: "Achraf Andrew",
    pfp: "person2.webp",
  },
];

const nastaVecka = [
  {
    name: "Achraf Andrew",
    pfp: "person3.webp",
  },
  {
    name: "Achraf Andrew",
    pfp: "person4.webp",
  },
];

function Koksvecka() {
  return (
    <section className={styles.koksvecka}>
      <h2>Köksvecka</h2>

      <section className={styles.vecka}>
        <h3>Denna vecka</h3>

        <section className={styles.people}>
          {
            // Map through winners of current week, and display them

            dennaVecka.map((person, i) => {
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

            nastaVecka.map((person, i) => {
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
          <p>
            Julfest planerad på kontoret den 18/12. Osa gärna direkt till
            Emelie! God jul! 🎄
          </p>
        </section>
      </Fade>
    </section>
  );
}

export default Koksvecka;
