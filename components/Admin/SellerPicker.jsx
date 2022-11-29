import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/SellerPicker.module.scss";

import SellerEditor from "./SellerEditor";

function SellerPicker({ startingSellers, updatedSellers }) {
  const [sellers, setSellers] = useState([]);
  const [editingSeller, setEditingSeller] = useState(null);

  const updateSeller = (old_id, new_seller) => {
    setEditingSeller(null);
    let sellers_temp = sellers;

    let old_seller = sellers_temp.find((seller) => seller._id == old_id);
    let index = sellers_temp.indexOf(old_seller);

    sellers_temp[index] = new_seller;

    console.log(sellers_temp, old_id);

    setSellers([...sellers_temp]);
  };

  const removeSeller = (seller_id) => {
    let sellers_temp = sellers.filter((seller) => seller._id != seller_id);

    console.log(sellers_temp);

    setSellers([...sellers_temp]);
  };

  useEffect(() => {
    if (sellers && sellers !== startingSellers) {
      updatedSellers(sellers);
    }
  }, [sellers]);

  useEffect(() => {
    setSellers(startingSellers);
  }, [startingSellers]);

  if (!sellers) return null;

  return (
    <section className={styles.sellerPicker}>
      <SellerEditor
        open={editingSeller !== null}
        handleClose={() => {
          setEditingSeller(null);
        }}
        seller={editingSeller}
        updateSeller={(old_id, new_seller) => updateSeller(old_id, new_seller)}
        takenSellers={sellers}
      />

      <section className={styles.labels}>
        <h4>Säljare</h4>
        <h4>Namn</h4>
        <h4>Redigera</h4>
      </section>
      <section className={styles.table}>
        {sellers.length === 0 && (
          <section className={styles.row}>
            <h4>Add a seller</h4>
          </section>
        )}
        {sellers.map((seller, i) => {
          // Check if this is the last seller
          let last = i === sellers.length - 1;

          return (
            <section
              className={styles.row}
              key={i}
              style={{ borderBottom: last ? "none" : "1px solid #d4dae9" }}
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
                {/*
                <button className={styles.delete}>
                  <Image
                    src={`/images/admin/trash.svg`}
                    width={17.5}
                    height={18}
                    onClick={() => {
                      removeSeller(seller._id);
                    }}
                    alt="Delete"
                  />
                </button>
                  */}

                <button
                  className={styles.edit}
                  onClick={() => {
                    setEditingSeller(seller);
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
