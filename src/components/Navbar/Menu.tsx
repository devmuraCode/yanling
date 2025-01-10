import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";
import Container from "../Container";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Bosh sahifa</Link>
            </li>
            <li>
              <Link href="/about">Kompaniya haqida</Link>
            </li>
            <li>
              <Link href="/products">Bizning mahsulotlar</Link>
            </li>
            <li>
              <Link href="/services">Xizmatlar</Link>
            </li>
            <li>
              <Link href="/news">Yangiliklar</Link>
            </li>
            <li>
              <Link href="/contacts">Kontaktlar</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
