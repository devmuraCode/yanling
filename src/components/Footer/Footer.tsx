import Logo from "../Navbar/Logo";
import Container from "../Container";
import styles from "./Footer.module.scss";

import { CiFacebook, CiTwitter, CiYoutube, CiInstagram } from "react-icons/ci";

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
              <CiInstagram />
            </div>
          </div>
          <div className={styles.menuItem}>
            <h2>Get in touch</h2>
            <ul>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Our Location</li>
            </ul>
          </div>
          <div className={styles.menuItem}>
            <h2>Support</h2>
            <ul>
              <li>Technical support</li>
              <li>Repair</li>
              <li>FAQ</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
          <div className={styles.menuItem}>
            <h2>Legal</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <h2>Subscribe to our newsletter</h2>
            <p>Get the latest updates on new products and upcoming sales</p>
            <form className={styles.form}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
