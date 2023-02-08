import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Forsaljning.module.scss";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector } from "react-redux";

import { Fade } from "react-awesome-reveal";

function Forsaljning() {
  const data = useSelector((state) => state.data.forsaljning);

  const [maxSales, setMaxSales] = useState(0);

  useEffect(() => {
    // Get maximum amount of sales
    if (data) {
      let max = data.info.sellers.reduce(function (prev, current) {
        return prev.sales > current.sales ? prev : current;
      });

      setMaxSales(max.sales);
    }
  }, [data]);

  return (
    <section className={styles.forsaljning}>
      <h2>Försäljning 2022</h2>
      <section className={styles.content}>
        <section className={styles.chart}>
          {data
            ? data.info.sellers.map((person, i) => {
                // Calculate height of bar depending on maximum sales
                let height = (person.sales / maxSales) * 20;

                return (
                  <section className={styles.person} key={i}>
                    <section className={styles.pfpHolder}>
                      <Image
                        src={`https://wsrv.nl/?url=${person.pfp}&w=120&h=120&fit=cover&a=center`}
                        width={52}
                        height={52}
                        layout="responsive"
                        objectFit="contain"
                        alt={person.name}
                      />
                    </section>
                    <div
                      className={styles.bar}
                      style={{ height: `${height}vh` }}
                    />
                    <p>{person.sales}</p>
                  </section>
                );
              })
            : [1, 2, 3].map((person, i) => {
                // Get random height
                let height = 10 + Math.floor(Math.random() * 10);

                return (
                  <section className={styles.person} key={i}>
                    <Skeleton width="52px" height="52px" circle />
                    <Skeleton
                      width="52px"
                      height={`${height}vh`}
                      style={{ margin: "0.5rem 0" }}
                    />
                    <p>{person.sales || <Skeleton width="32px" />}</p>
                  </section>
                );
              })}
        </section>

        <section className={styles.info}>
          <Fade triggerOnce delay={500}>
            <section className={styles.infoBlock}>
              <p>{data ? (
                  data.info.yearTitle
                ) : (
                  <Skeleton width={"60px"} height={"40px"} />
                )}</p>
              <h3>
                {data ? (
                  data.info.thisYear
                ) : (
                  <Skeleton width={"60px"} height={"40px"} />
                )}
              </h3>
            </section>
          </Fade>

          <Fade triggerOnce delay={600}>
            <section className={styles.infoBlock}>
              <p>{data ? (
                  data.info.totalTitle
                ) : (
                  <Skeleton width={"60px"} height={"40px"} />
                )}</p>
              <h3>
                {data ? (
                  data.info.totalt
                ) : (
                  <Skeleton width={"60px"} height={"40px"} />
                )}
              </h3>
            </section>
          </Fade>
        </section>
      </section>
    </section>
  );
}

export default Forsaljning;
