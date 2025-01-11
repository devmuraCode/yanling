"use client";
import Slider from "react-slick";
import Container from "@/components/Container";
import styles from "./LicensesSection.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getLicensesList, ILicense } from "@/services/getLicensesList";

export const LicensesSection = () => {
  const [licenses, setLicenses] = useState<ILicense[]>([]);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const data = await getLicensesList();
        setLicenses(data || []);
      } catch (error) {
        console.error("Error fetching licenses:", error);
      }
    };
    fetchLicenses();
  }, []);

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
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {licenses.map((license) =>
              license.files.map((file) => (
                <div key={file.id} className={styles.card}>
                  <Image
                    src={file.filePath}
                    alt={license.title || "License Image"}
                    className={styles.image}
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <p className={styles.licenseTitle}>{license.title}</p>
                </div>
              ))
            )}
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
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.prevArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
