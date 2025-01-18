"use client";
import styles from "./Header.module.scss";
import Container from "@/components/Container";
import headerposition from "@/assets/headerpositioncenter.svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Zamonaviy radar yechimlari</h1>
          <p className={styles.subtitle}>
            Radar tizimlari va professional o‘rnatish xizmatlari
          </p>
          <div className={styles.buttons}>
            <Link href={"/products"} className={styles.btn}>
              Bizning mahsulotlar
            </Link>
            <Link href={"/about"} className={styles.btn}>
              Biz haqimizda
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={headerposition} alt="Header" className={styles.image} />
          <div className={styles.imageOverlay}>
            <div>
              <h1></h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
