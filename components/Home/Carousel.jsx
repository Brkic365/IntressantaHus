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

function Carousel({ data }) {
  return (
    <main className={styles.carousel}>
      {/* Carousel element used to display multiple reviews */}
      <Swiper
        style={{
          "--swiper-pagination-color": "#214251",
          "--swiper-pagination-bullet-inactive-color": "#DFE8E8",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        spaceBetween={10}
        slidesPerView={"auto"}
        loop={true}
        initialSlide={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
      >
        {data.map((property, i) => {
          // Map through properties and add each one to the carousel
          return (
            <SwiperSlide key={i}>
              <section className={styles.property}>
                <section className={styles.imgHolder}>
                  <Image
                    src={`/images/properties/${property.img}`}
                    width={534}
                    height={283}
                    alt={property.name}
                  />
                </section>

                <section className={styles.propertyDetails}>
                  <HiOutlineLocationMarker />
                  <p>{property.name}</p>
                </section>

                {property.seller_pfp && (
                  <section className={styles.sellerPfp}>
                    <Image
                      src={`/images/people/${property.seller_pfp}`}
                      width={69}
                      height={69}
                      priority
                      alt={property.name}
                    />
                  </section>
                )}
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}

export default Carousel;
