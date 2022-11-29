import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/SellerEditor.module.scss";
import Modal from "@mui/material/Modal";

import { useSelector } from "react-redux";

import Library from "./Library";

import { AiOutlineClose } from "react-icons/ai";

function SellerEditor({
  open,
  handleClose,
  seller,
  updateSeller,
  takenSellers,
}) {
  const all_sellers = useSelector((state) => state.sellers.sellers);

  const [newSeller, setNewSeller] = useState(seller);

  const [libraryOpen, setLibraryOpen] = useState(false);

  const formatSellers = (seller_ids) => {
    setLibraryOpen(false);

    let picked_seller_temp = all_sellers.find(
      (seller) => seller._id == seller_ids[0]
    );

    setNewSeller((prev) => {
      return { ...picked_seller_temp, sales: prev.sales };
    });
  };

  const save = () => {
    updateSeller(seller._id, newSeller);
  };

  const onChangeSales = (e) => {
    setNewSeller((prev) => {
      return { ...prev, sales: parseInt(e.target.value) };
    });
  };

  useEffect(() => {
    setNewSeller(seller);
  }, [seller]);

  if (!seller || !newSeller) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <section className={styles.box}>
        <Library
          open={libraryOpen}
          handleClose={() => {
            setLibraryOpen(false);
          }}
          amount={1}
          pickedSellers={(seller_ids) => formatSellers(seller_ids)}
          takenSellers={takenSellers}
        />

        <button className={styles.close} onClick={handleClose}>
          <AiOutlineClose />
        </button>

        <section
          className={styles.imgHolder}
          onClick={() => setLibraryOpen(true)}
        >
          <Image
            src={`/images/people/${newSeller.pfp}`}
            width={110}
            height={110}
            alt={newSeller.name}
          />
        </section>
        <h2>{newSeller.name}</h2>
        <h3>Försäljning</h3>
        <input placeholder={seller.sales} onChange={onChangeSales} />
        <section className={styles.buttons}>
          <button className={styles.cancel}>avbryt</button>
          <button className={styles.save} onClick={save}>
            spara
          </button>
        </section>
      </section>
    </Modal>
  );
}

export default SellerEditor;
