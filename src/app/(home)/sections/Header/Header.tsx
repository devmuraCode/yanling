"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "./Header.module.scss";
import "slick-carousel/slick/slick-theme.css";

export const Header = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        <div className={styles.image}>
          <div className={styles.content}>
            <h1 className={styles.title}>Keeping Your Network Safe</h1>
          </div>
        </div>
        <div className={styles.image_2}>
          <div className={styles.content}>
            <div>
              <h1 className={styles.title}>Fanless Mini PC</h1>
              <p className={styles.subtitle}>
                Design for business, education and home application
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
