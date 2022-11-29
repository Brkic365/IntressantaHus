import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/SavedPopup.module.scss";
import Modal from "@mui/material/Modal";

import { fetchData } from "../../slices/dataSlice";

import { useDispatch } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";

function SavedPopup({ open, handleClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      dispatch(fetchData());
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <section className={styles.box}>
        <Image
          src={`/images/admin/saved.webp`}
          width={164}
          height={164}
          alt="Saved"
        />
        <h2>Dina ändringar är nu sparade</h2>

        <button className={styles.close} onClick={handleClose}>
          <AiOutlineClose />
        </button>

        <button className={styles.kanon} onClick={handleClose}>
          Kanon!
        </button>
      </section>
    </Modal>
  );
}

export default SavedPopup;
