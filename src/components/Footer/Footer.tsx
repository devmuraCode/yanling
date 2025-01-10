import Logo from "../Navbar/Logo";
import Container from "../Container";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import tel from "@/assets/telegramfooter.svg";
import main from "@/assets/mailfooter.svg";
import location from "@/assets/locationfooter.svg";
import telegram from '@/assets/telegramfooter.svg'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
      
          <div className={styles.logo}>
            <Logo />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              est sapien, tincidunt vitae semper vel, mattis in magna. Morbi
              consectetur massa nisl.
            </p>
          </div>

       
          <div className={styles.menuItems}>
            <Link href="#">Kompaniya haqida</Link>
            <Link href="#">Bizning mahsulotlar</Link>
            <Link href="#">Xizmatlar</Link>
            <Link href="#">Yangiliklar</Link>
            <Link href="#">Kontaktlar</Link>
          </div>

     
          <div className={styles.contacts}>
            <div className={styles.contactInfo}>
              <Image src={tel} alt="" />
              <p>998 71 765 21 43 / 998 90 233 12 44</p>
            </div>
            <div className={styles.contactInfo}>
              <Image src={main} alt="" />
              <a href="mailto:info@uzross-techno.uz">info@uzross-techno.uz</a>
            </div>
            <div className={styles.contactInfo}>
              <Image src={telegram} alt="" />
              <a href="https://t.me/uzross_info">@uzross-info</a>
            </div>
            <div className={styles.contactInfo}>
              <Image src={location} alt="" />
              <p>Toshkent shahar, Qoraqamish 3/4, Turkiston ko’chasi, 45-uy</p>
            </div>
          </div>

         
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

       
        <div className={styles.footerBottom}>
          <p>© 2025 UzRoss-Techno. Barcha huquqlar kafolatlangan</p>
        </div>
      </Container>
    </div>
  );
};
