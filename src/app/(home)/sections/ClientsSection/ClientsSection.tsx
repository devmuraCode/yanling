import styles from "./ClientsSection.module.scss";

import opanAi from "@/assets/openAi.svg";
import yandex from "@/assets/yandex.svg";
import sumsung from "@/assets/samsung.svg";
import microsoft from "@/assets/microsoft.svg";
import panasonic from "@/assets/panasonic.svg";
import hikvision from "@/assets/hikvision.svg";
import Container from "@/components/Container";
import Image from "next/image";

export const ClientsSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <h3 className={styles.activeTab}>Mijozlarimiz</h3>
          <h3>Hamkorlarimiz</h3>
        </div>
        <div className={styles.logos}>
          <Image src={opanAi} alt="OpenAI" />
          <Image src={yandex} alt="Yandex" />
          <Image src={sumsung} alt="Samsung" />
          <Image src={microsoft} alt="Microsoft" />
          <Image src={panasonic} alt="Panasonic" />
          <Image src={hikvision} alt="Hikvision" />
        </div>
      </Container>
    </div>
  );
};
