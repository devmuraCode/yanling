import Container from "@/components/Container";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.body_content}>
            <h1>Standard Products</h1>
            <p>
              Dedicated Computing’s range of off-the-shelf computing systems
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
