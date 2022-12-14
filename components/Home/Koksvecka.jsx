import React from "react";
import Image from "next/image";
import styles from "../../styles/Koksvecka.module.scss";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector } from "react-redux";

import { Fade } from "react-awesome-reveal";

function Koksvecka() {
  const data = useSelector((state) => state.data.koksvecka);

  return (
    <section className={styles.koksvecka}>
      <h2>Köksvecka</h2>

      <section className={styles.vecka}>
        <h3>Denna vecka</h3>

        <section className={styles.people}>
          {
            // Map through winners of current week, and display them

            data
              ? data.info.dennaVeckaSellers.map((person, i) => {
                  return (
                    <section className={styles.person} key={i}>
                      <section className={styles.pfpHolder}>
                        <Image
                          src={`https://wsrv.nl/?url=${person.pfp}&w=120&h=120&fit=cover&a=center`}
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
              : [1, 2].map((person, i) => {
                  return (
                    <section className={styles.person} key={i}>
                      <Skeleton width="55px" height="55px" circle />
                      <p>{person.name || <Skeleton width="55px" />}</p>
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

            data
              ? data.info.nastaVeckaSellers.map((person, i) => {
                  return (
                    <section className={styles.person} key={i}>
                      <section className={styles.pfpHolder}>
                        <Image
                          src={`https://wsrv.nl/?url=${person.pfp}&w=120&h=120&fit=cover&a=center`}
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
              : [1, 2].map((person, i) => {
                  return (
                    <section className={styles.person} key={i}>
                      <Skeleton width="55px" height="55px" circle />
                      <p>{person.name || <Skeleton width="55px" />}</p>
                    </section>
                  );
                })
          }
        </section>
      </section>

      <Fade triggerOnce delay={300}>
        <section className={styles.disclaimer}>
          <p>
            {data ? (
              data.info.disclaimer
            ) : (
              <Skeleton count={2} baseColor="#fff" />
            )}
          </p>
        </section>
      </Fade>
    </section>
  );
}

export default Koksvecka;
