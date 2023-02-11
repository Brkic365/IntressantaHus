import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/FilePicker.module.scss";

import Library from "./Library";

import { FaFolderMinus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import { useSelector } from "react-redux";

function LibraryPicker({ amount, pickedSellers, startingSellers }) {
  const all_sellers = useSelector((state) => state.sellers.sellers);

  const [libraryOpen, setLibraryOpen] = useState(false);

  const [sellers, setSellers] = useState(startingSellers);
  const [indexes, setIndexes] = useState(null);

  const formatSellers = (seller_ids) => {
    setLibraryOpen(false);

    let sellers_temp = seller_ids.map((id) =>
      all_sellers.find((seller) => seller._id == id)
    );

    setSellers([...sellers_temp]);
  };

  const removeSeller = (seller_id) => {
    let sellers_temp = sellers.filter((seller) => seller._id != seller_id);

    setSellers([...sellers_temp]);

    console.log(sellers_temp, seller_id);
  };

  const getIndexes = () => {
    let indexes_temp = [];

    sellers.forEach(pickedSeller => {
      all_sellers.forEach((seller, i) => {
        if(pickedSeller._id == seller._id) {
          indexes_temp.push(i)
        }
      });
    });

    setIndexes([...indexes_temp]);
  };

  useEffect(() => {
    pickedSellers(sellers);
  }, [sellers]);

  
  useEffect(() => {
    getIndexes(sellers);
  }, [sellers]);

  if(!indexes) return null;

  return (
    <section className={styles.filePicker}>
      <Library
        open={libraryOpen}
        handleClose={() => {
          setLibraryOpen(false);
        }}
        amount={amount}
        startingSelected={indexes}
        pickedSellers={formatSellers}
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
      <section className={styles.sellers}>
        {sellers.map((seller, i) => {
          return (
            <section className={styles.seller} key={i}>
              <section className={styles.imgHolder}>
                <Image
                  src={`https://wsrv.nl/?url=${seller.pfp}&w=120&h=120&fit=cover&a=center`}
                  width={69}
                  height={69}
                  layout="responsive"
                  objectFit="contain"
                  alt={seller.name}
                />
              </section>
              <AiFillCloseCircle onClick={() => removeSeller(seller._id)} />
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default LibraryPicker;
