import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/SellerPicker.module.scss";

import Library from "./Library";

const sellers = [
  {
    name: "Achraf Andrew",
    pfp: "person1.png",
  },
  {
    name: "Achraf Andrew",
    pfp: "person2.png",
  },
  {
    name: "Achraf Andrew",
    pfp: "person3.png",
  },
];

function SellerPicker() {
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <section className={styles.sellerPicker}>
      <Library
        open={libraryOpen}
        handleClose={() => {
          setLibraryOpen(false);
        }}
      />

      <section className={styles.labels}>
        <h4>Säljare</h4>
        <h4>Namn</h4>
        <h4>Redigera</h4>
      </section>
      <section className={styles.table}>
        {sellers.map((seller, i) => {
          // Check if this is the last seller
          let last = i === sellers.length - 1;

          return (
            <section
              className={styles.row}
              key={i}
              styles={last ? { borderBottom: "none" } : undefined}
            >
              <section className={styles.pfpHolder}>
                <section className={styles.pfp}>
                  <Image
                    src={`/images/people/${seller.pfp}`}
                    width={55}
                    height={55}
                    alt={seller.name}
                  />
                </section>
              </section>
              <h4>{seller.name}</h4>
              <section className={styles.buttons}>
                <button className={styles.delete}>
                  <Image
                    src={`/images/admin/trash.svg`}
                    width={17.5}
                    height={18}
                    alt="Delete"
                  />
                </button>
                <button
                  className={styles.edit}
                  onClick={() => {
                    setLibraryOpen(true);
                  }}
                >
                  <Image
                    src={`/images/admin/pen.svg`}
                    width={18}
                    height={18}
                    alt="Edit"
                  />
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default SellerPicker;
