"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "@/components/Container";
import styles from "./LicensesSection.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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

  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Sertifikatlar va patentlar</h2>

        <div className={styles.sliderContainer}>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={{
              nextEl: `.${styles.nextButton}`,
              prevEl: `.${styles.prevButton}`,
            }}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              576: { slidesPerView: 1 },
            }}
          >
            {licenses.map((license) =>
              license.files.map((file) => (
                <SwiperSlide key={file.id} className={styles.card}>
                  <Image
                    src={file.filePath}
                    alt={license.title || "Product Image"}
                    className={styles.image}
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <p className={styles.productTitle}>{license.title}</p>
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <button className={`${styles.prevButton}`}><IoIosArrowBack/></button>
          <button className={`${styles.nextButton}`}><IoIosArrowForward/></button>
        </div>
      </Container>
    </div>
  );
};
