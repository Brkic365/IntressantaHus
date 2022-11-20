import React, { useState } from "react";
import styles from "../../styles/FilePicker.module.scss";

import Library from "./Library";

import { FaFolderMinus } from "react-icons/fa";

function LibraryPicker({ amount }) {
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <section className={styles.filePicker}>
      <Library
        open={libraryOpen}
        handleClose={() => {
          setLibraryOpen(false);
        }}
        amount={amount}
      />

      <section className={styles.imgHolder}></section>

      <button
        onClick={() => {
          setLibraryOpen(true);
        }}
      >
        <FaFolderMinus />
        Välj från biblioteket
      </button>
    </section>
  );
}

export default LibraryPicker;
