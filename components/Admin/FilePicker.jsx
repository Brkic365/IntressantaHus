import React from "react";
import Image from "next/image";
import styles from "../../styles/FilePicker.module.scss";

import { FaFolderMinus } from "react-icons/fa";

function FilePicker() {
  return (
    <section className={styles.filePicker}>
      <Image
        src={`/images/admin/file-picker.png`}
        width={100}
        height={97.34}
        alt="File picker"
      />
      <p>
        <span>Ladda upp fil</span> pdf, släpp filen här
      </p>

      <span className={styles.middle}>eller</span>

      <button>
        <FaFolderMinus />
        Välj från din dator
      </button>
    </section>
  );
}

export default FilePicker;
