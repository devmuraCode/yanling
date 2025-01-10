import Container from "@/components/Container";
import styles from "./ServiceSection.module.scss";
import Image from "next/image";

import service from "@/assets/service.png";
import service1 from "@/assets/service1.png";

export const ServiceSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1 className={styles.title}>Xizmatlar</h1>
          <div className={styles.cardGroup}>
            <div className={styles.card}>
              <Image src={service} alt="" className={styles.image} />
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>
                  Radar tizimlarini o’rnatib berish xizmati
                </h3>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam est sapien, tincidunt vitae semper vel, mattis in
                  magna. Morbi consectetur massa nisl. Cras et lobortis arcu.{" "}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <Image src={service1} alt="" className={styles.image} />
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>
                  Radar tizimlariga texnik xizmat ko’rsatish xizmatlari
                </h3>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam est sapien, tincidunt vitae semper vel, mattis in
                  magna. Morbi consectetur massa nisl. Cras et lobortis arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
