import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Library.module.scss";
import Modal from "@mui/material/Modal";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import { useSelector } from "react-redux";

function Library({
  open,
  handleClose,
  amount,
  pickedSellers,
  takenSellers = [],
}) {
  const all_sellers = useSelector((state) => state.sellers.sellers);

  const [selected, setSelected] = useState([]);
  const [canSave, setCanSave] = useState(false);

  const selectSeller = (i) => {
    // If seller is already selected, remove him
    if (selected.includes(i)) {
      const index = selected.indexOf(i);
      if (index > -1) {
        // only splice array when item is found
        setSelected((prev) => prev.filter((x) => x !== i));
      }
      // Else, add him to the array of selected sellers
    } else {
      // If the selected amount is higher or same as desired amount,
      // Remove the last element
      if (selected.length >= amount) {
        setSelected((prev) => prev.slice(0, -1));
      }

      setSelected((prev) => [...prev, i]);
    }

    setCanSave(selected.length === amount);
  };

  // Save the picked seller/sellers
  const save = () => {
    let seller_ids = selected.map((index) => all_sellers[index]._id);

    pickedSellers(seller_ids);
  };

  if (!all_sellers) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <section className={styles.box}>
        <h2>Bibliotek</h2>

        <button className={styles.close} onClick={handleClose}>
          <AiOutlineClose />
        </button>

        <section className={styles.top}>
          <section className={styles.content}>
            <h3>Medarbetare</h3>
            <section className={styles.searchbar}>
              <AiOutlineSearch />
              <input placeholder="Sök efter medarbetare" />
            </section>
          </section>
        </section>
        <SimpleBar style={{ maxHeight: "70vh", width: "100%" }}>
          <section className={styles.grid}>
            {all_sellers.map((seller, i) => {
              let taken = takenSellers.find(
                (takenSeller) => takenSeller._id == seller._id
              );

              if (taken) return null;

              return (
                <section
                  className={`${styles.seller} ${
                    selected.includes(i) ? styles.selected : undefined
                  }`}
                  style={
                    selected.length === amount
                      ? {
                          opacity: selected.includes(i) ? 1 : 0.5,
                        }
                      : undefined
                  }
                  key={i}
                  onClick={() => selectSeller(i)}
                >
                  <section className={styles.pfpHolder}>
                    <Image
                      src={`/images/people/${seller.pfp}`}
                      width={110}
                      height={110}
                      layout="responsive"
                      objectFit="contain"
                      alt={seller.name}
                    />
                  </section>
                  <p>{seller.name}</p>
                </section>
              );
            })}
          </section>
          {selected.length === amount && (
            <section className={styles.buttons}>
              <button className={styles.cancel} onClick={handleClose}>
                avbryt
              </button>
              <button className={styles.save} onClick={save}>
                spara
              </button>
            </section>
          )}
        </SimpleBar>
      </section>
    </Modal>
  );
}

export default Library;
