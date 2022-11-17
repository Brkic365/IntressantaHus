import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Forsaljning.module.scss";

const DATA = [
  {
    name: "Achraf Andrew",
    pfp: "person1.png",
    sales: 40,
  },
  {
    name: "Achraf Andrew",
    pfp: "person2.png",
    sales: 55,
  },
  {
    name: "Achraf Andrew",
    pfp: "person3.png",
    sales: 45,
  },
];

function Forsaljning() {
  const [maxSales, setMaxSales] = useState(0);

  useEffect(() => {
    // Get maximum amount of sales

    let max = DATA.reduce(function (prev, current) {
      return prev.sales > current.sales ? prev : current;
    });

    setMaxSales(max.sales);
  }, []);

  return (
    <section className={styles.forsaljning}>
      <h2>Försäljning 2022</h2>
      <section className={styles.content}>
        <section className={styles.chart}>
          {DATA.map((person, i) => {
            // Calculate height of bar depending on maximum sales
            let height = (person.sales / maxSales) * 100;

            return (
              <section className={styles.person} key={i}>
                <Image
                  src={`/images/people/${person.pfp}`}
                  width={52}
                  height={52}
                  alt={person.name}
                />
                <section className={styles.barHolder}>
                  <div
                    className={styles.bar}
                    style={{ height: `${height}%` }}
                  />
                </section>
                <p>{person.sales}</p>
              </section>
            );
          })}
        </section>

        <section className={styles.info}>
          <section className={styles.infoBlock}>
            <p>2022</p>
            <h3>38</h3>
          </section>

          <section className={styles.infoBlock}>
            <p>Totalt</p>
            <h3>410</h3>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Forsaljning;
