import Logo from "../Navbar/Logo";
import Container from "../Container";
import styles from "./Footer.module.scss";

import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import MenuItem from "../Navbar/MenuList";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.footer_content}>
          <div className={styles.icons_group}>
            <Logo />
            <div className={styles.icons}>
              <CiFacebook />
              <CiTwitter />
              <CiYoutube />
            </div>
          </div>
          <div className={styles.menuItem}>
            <h2>Get in touch</h2>
            <ul>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className={styles.menuItem}>
            <h2>Support</h2>
            <ul>
              <li>Technical support</li>
              <li>Repair</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
