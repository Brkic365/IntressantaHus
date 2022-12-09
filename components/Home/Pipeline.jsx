import React from "react";
import styles from "../../styles/Pipeline.module.scss";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector } from "react-redux";

function Pipeline() {
  const data = useSelector((state) => state.asana.sections);

  return (
    <section className={styles.pipeline}>
      <h2>Pipeline</h2>
      <section className={styles.content}>
        {data
          ? data.map((section, i) => {
              return (
                <section
                  className={styles.row}
                  style={{ width: `${100 / data.length}%` }}
                  key={i}
                >
                  <h3>{section.name}</h3>
                  {section.tasks.map((task, j) => {
                    return (
                      <section className={styles.box} key={j}>
                        <p>{task}</p>
                      </section>
                    );
                  })}
                </section>
              );
            })
          : [...Array(8).keys()].map((person, i) => {
              return (
                <section className={styles.person} key={i}>
                  <h3>
                    <Skeleton width="75px" style={{ marginBottom: "1rem" }} />
                  </h3>
                  {[1, 2].map((task, j) => {
                    return (
                      <section className={styles.box} key={j}>
                        <Skeleton
                          width={"5vw"}
                          height={"5vh"}
                          borderRadius={"10px"}
                          style={{ marginTop: "1rem", marginRight: "2rem" }}
                        />
                      </section>
                    );
                  })}
                </section>
              );
            })}
      </section>
    </section>
  );
}

export default Pipeline;
