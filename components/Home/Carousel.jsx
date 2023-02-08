import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Carousel.module.scss";

import { HiOutlineLocationMarker } from "react-icons/hi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper effect styles
import "swiper/css/effect-creative";

function Carousel({ property }) {
  return (
    <main className={styles.carousel}>
      {/* Carousel element used to display multiple reviews */}
      <Swiper
        style={{
          "--swiper-pagination-color": "#214251",
          "--swiper-pagination-bullet-inactive-color": "#DFE8E8",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        spaceBetween={100}
        slidesPerView={"auto"}
        loop={property.images.length > 1}
        initialSlide={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
      >
        {property.images.map((img, i) => {
          // Map through properties and add each one to the carousel
          return (
            <SwiperSlide key={i} style={{width: "fit-content"}}>
              <section className={styles.property}>
                <section className={styles.imgHolder} style={{backgroundImage: `url(${img.url})`}}/>
              </section>
            </SwiperSlide>
          );
        })}
        <section className={styles.propertyDetails}>
          <HiOutlineLocationMarker />
          <p>{property.name}</p>
        </section>

        {property.seller_pfp && (
          <section className={styles.sellerPfp}>
            <Image
              src={`https://wsrv.nl/?url=${property.seller_pfp}&w=120&h=120&fit=cover&a=center`}
              width={69}
              height={69}
              layout="responsive"
              objectFit="contain"
              priority
              alt={property.name}
            />
          </section>
        )}
      </Swiper>
    </main>
  );
}

export default Carousel;
