import React from "react";
import styles from "../../styles/Pipeline.module.scss";

const data = [
  "Prospect",
  "Avtal",
  "Avrop",
  "Produktion",
  "Byggplats",
  "Slutbesiktning",
  "Atgarder",
  "Inflyttade",
  "Prospect",
  "Prospect",
];

function Pipeline() {
  return (
    <section className={styles.pipeline}>
      <h2>Pipeline</h2>
      <section className={styles.content}>
        {data.map((row) => {
          return (
            <section
              className={styles.row}
              style={{ width: `${100 / data.length}%` }}
            >
              <h3>{row}</h3>
              <section className={styles.box}>
                <p>Oberg</p>
              </section>
              <section className={styles.box}>
                <p>Oberg</p>
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default Pipeline;
