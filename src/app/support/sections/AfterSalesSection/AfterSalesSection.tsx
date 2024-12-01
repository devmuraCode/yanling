import Container from "@/components/Container";
import styles from "./AfterSalesSection.module.scss";
import { RiCustomerService2Fill } from "react-icons/ri";
export const AfterSalesSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h2 className={styles.title}><RiCustomerService2Fill/>After-sales Service</h2>
          <div>
            <p className={styles.description}>
              All products purchased from our company have a warranty period of
              3 year from the date of delivery.(Non-artificial damages). During
              the warranty period, we will repair the products for you free of
              charge,but the parts that need to be replaced will be charged.
            </p>
          </div>
        </div>
        <div>
          <p className={styles.boldText}>
            The following situations are not included in the free warranty.{" "}
          </p>
          <div>
            <ul className={styles.description}>
              <li>1. The purchased product is out of warranty.</li>
              <li>
                2 .The product is not used normally, such as non-artificial
                damages, improper installation, unauthorized misuse, or
                modification.
              </li>
              <li>
                3. Under abnormal conditions, such as humid storage, high
                temperature, exposure to the sun etc.
              </li>
              <li>
                4. Other damages caused by force majeure such as natural disasters,
                earthquakes, typhoons, fires, floods, lightning strikes, etc.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
