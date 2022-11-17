import React from "react";
import Image from "next/image";
import styles from "../../styles/Library.module.scss";
import Modal from "@mui/material/Modal";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import all_sellers from "../../public/data/all_sellers.json";

function Library({ open, handleClose }) {
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
        <SimpleBar style={{ maxHeight: "47rem", width: "100%" }}>
          <section className={styles.grid}>
            {all_sellers.map((seller, i) => {
              return (
                <section className={styles.seller} key={i}>
                  <Image
                    src={`/images/people/${seller.pfp}`}
                    width={110}
                    height={110}
                    alt={seller.name}
                  />
                  <p>{seller.name}</p>
                </section>
              );
            })}
          </section>
        </SimpleBar>
      </section>
    </Modal>
  );
}

export default Library;
