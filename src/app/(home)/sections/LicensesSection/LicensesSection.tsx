"use client";
import Slider from "react-slick";
import Container from "@/components/Container";
import styles from "./LicensesSection.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import license1 from "@/assets/license1.png";
import license2 from "@/assets/license2.png";
import license3 from "@/assets/license3.png";
import license4 from "@/assets/license4.png";
import Image from "next/image";

export const LicensesSection = () => {
  const licenses = [
    { img: license1, title: "E24 43023 AEM Sertifikati" },
    { img: license2, title: "EAC Sertifikati" },
    { img: license3, title: "L24 43022 AEM Sertifikati" },
    { img: license4, title: "Sertifikat ISO 9001:2005" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Sertifikatlar va patentlar</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {licenses.map((license, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={license.img}
                  alt={license.title}
                  className={styles.image}
                />
                <p className={styles.license_title}>{license.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.nextArrow}`}
      style={style}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.prevArrow}`}
      style={style}
      onClick={onClick}
    />
  );
};
