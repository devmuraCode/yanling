import Container from "@/components/Container";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.body_content}>
            <h1>ABOUT YANLING</h1>
            <p>
            Build a leading brand in the industrial computer industry!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
