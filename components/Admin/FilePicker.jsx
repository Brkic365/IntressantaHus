import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/FilePicker.module.scss";

import { AiFillCloseCircle } from "react-icons/ai";

import { FaFolderMinus } from "react-icons/fa";

import storage from "../../lib/firebaseConfig.js";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

function FilePicker({ updateFiles }) {
  const hiddenFileInput = useRef(null);

  const [fileUrls, setFileUrls] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      handleUpload([...e.dataTransfer.files]);
    }
  };

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleUpload = (files) => {
    files.forEach((file) => {
      if (!file) {
        alert("Please upload an image first!");
      }

      const storageRef = ref(storage, `/files/${file.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          console.log("PERCENT: ", percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFileUrls((prev) => [...prev, url]);
          });
        }
      );
    });
  };

  const removeImage = (i) => {
    let url = fileUrls[i];

    let pictureRef = storage.refFromURL(url);

    pictureRef
      .delete()
      .then(() => {
        //3.
        setFileUrls((prev) => prev.filter((image) => image !== url));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateFiles(fileUrls);
  }, [fileUrls]);

  return (
    <section className={styles.filePicker} onDragEnter={handleDrag}>
      {dragActive && (
        <div
          className={styles.dragFileElement}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <h1>DROP HERE!</h1>
        </div>
      )}

      <section className={styles.imgHolder}>
        <Image
          src={`/images/admin/file-picker.webp`}
          width={100}
          height={97.34}
          layout="responsive"
          objectFit="contain"
          alt="File picker"
        />
      </section>
      <p>
        <span>Ladda upp fil</span> pdf, släpp filen här
      </p>

      <span className={styles.middle}>eller</span>

      <button onClick={handleClick}>
        <FaFolderMinus />
        Välj från din dator
      </button>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleUpload([...e.target.files])}
        multiple
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />

      <section className={styles.images}>
        {fileUrls.map((fileUrl, i) => {
          return (
            <section className={styles.file} key={i}>
              <section className={styles.imgHolder}>
                <Image
                  src={fileUrl}
                  width={120}
                  height={120}
                  layout="responsive"
                  objectFit="contain"
                  alt="Image"
                />
              </section>
              <AiFillCloseCircle onClick={() => removeImage(i)} />
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default FilePicker;
