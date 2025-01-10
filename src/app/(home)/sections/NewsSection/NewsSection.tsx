import Image from "next/image";
import Container from "../../../../components/Container";
import styles from "./NewsSection.module.scss";
import nws from "@/assets/nws.png";

export const NewsSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Yangiliklar</h1>
        <div className={styles.content}>
          <div className={styles.cardGroup}>
            <div className={styles.card}>
              <Image src={nws} alt="" className={styles.image} />
              <div className={styles.body}>
                <span>03.01.2025</span>

                <p className={styles.cardDescription}>
                  Royal, Akfa and Shivaki participate in the international
                  exhibition Aqua Therm Tashkent 2018
                </p>
              </div>
            </div>
          </div>
          <div className={styles.otherNews}>
            <h3>Boshqa yangiliklar</h3>
            <div className={styles.items}>
              <div className={styles.item}>
                <span>03.01.2025</span>

                <p className={styles.cardDescription}>
                  Royal, Akfa and Shivaki participate in the international
                  exhibition Aqua Therm Tashkent 2018
                </p>
              </div>
              <div className={styles.item}>
                <span>03.01.2025</span>

                <p className={styles.cardDescription}>
                  Royal, Akfa and Shivaki participate in the international
                  exhibition Aqua Therm Tashkent 2018
                </p>
              </div>
              <div className={styles.item}>
                <span>03.01.2025</span>

                <p className={styles.cardDescription}>
                  Royal, Akfa and Shivaki participate in the international
                  exhibition Aqua Therm Tashkent 2018
                </p>
              </div>
              <div className={styles.item}>
                <span>03.01.2025</span>

                <p className={styles.cardDescription}>
                  Royal, Akfa and Shivaki participate in the international
                  exhibition Aqua Therm Tashkent 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
