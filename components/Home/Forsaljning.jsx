import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Forsaljning.module.scss";

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

  if (!data) return null;

  return (
    <section className={styles.forsaljning}>
      <h2>Försäljning 2022</h2>
      <section className={styles.content}>
        <section className={styles.chart}>
          {data.info.sellers.map((person, i) => {
            // Calculate height of bar depending on maximum sales
            let height = (person.sales / maxSales) * 20;

            return (
              <section className={styles.person} key={i}>
                <section className={styles.pfpHolder}>
                  <Image
                    src={`/images/people/${person.pfp}`}
                    width={52}
                    height={52}
                    layout="responsive"
                    objectFit="contain"
                    alt={person.name}
                  />
                </section>
                <div className={styles.bar} style={{ height: `${height}vh` }} />
                <p>{person.sales}</p>
              </section>
            );
          })}
        </section>

        <section className={styles.info}>
          <Fade triggerOnce delay={500}>
            <section className={styles.infoBlock}>
              <p>2022</p>
              <h3>{data.info.thisYear}</h3>
            </section>
          </Fade>

          <Fade triggerOnce delay={600}>
            <section className={styles.infoBlock}>
              <p>Totalt</p>
              <h3>{data.info.totalt}</h3>
            </section>
          </Fade>
        </section>
      </section>
    </section>
  );
}

export default Forsaljning;
