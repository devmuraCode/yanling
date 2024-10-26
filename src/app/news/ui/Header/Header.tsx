import Container from "@/components/Container";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.body_content}>
            <h1>NEWS CENTER</h1>
            <p>Let us share the future!</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
