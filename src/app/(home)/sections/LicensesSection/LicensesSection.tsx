import Container from "@/components/Container";
import styles from "./LicensesSection.module.scss";
import { getLicensesList } from "@/services/getLicensesList";
export const LicensesSection = async () => {
  const licenses = await getLicensesList();
  console.log(licenses);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contentTitle}>
          <h2>Лицензии</h2>
          <hr />
        </div>
        <div>
          {licenses.map((license) => (
            <h1>{license.title}</h1>
          ))}
        </div>
      </Container>
    </div>
  );
};
