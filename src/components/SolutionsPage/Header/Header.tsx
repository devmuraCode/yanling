import Container from "@/components/Container";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.body_content}>
            <h1>Solutions</h1>
            <p>
              YANLING provides solutions for Automation, Kiosk, Medical,
              Firewall, Transportation etc.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
