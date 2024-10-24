import Container from "../../../../components/Container";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Container>
        <div className={styles.grid_content}>
          <div className={styles.content_items}>
            <button className={styles.btn}>Solutions</button>
            <ul>
              <li>Industrial Automation</li>
              <li>Smart Medical</li>
              <li>Machine Vision</li>
              <li>Transportation</li>
              <li>Warehouse Logistics</li>
              <li>Retail</li>
              <li>Network Security</li>
            </ul>
          </div>
          <div className={styles.content}>
            asd
          </div>
        </div>
      </Container>
    </div>
  );
};
