import Container from "@/components/Container";
import styles from "./LicensesSection.module.scss";
import { getLicensesList } from "@/services/getLicensesList";

export const LicensesSection = async () => {
  const licenses = await getLicensesList();

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contentTitle}>
          <h2>Лицензии</h2>
          <hr />
        </div>
        <div className={styles.licensesGrid}>
          {licenses.map((license) => {
            const mainImage = license.files.find((file) => file.main)?.filePath;
            return (
              <div key={license.id} className={styles.licenseCard}>
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt={license.title}
                    className={styles.licenseImage}
                  />
                ) : (
                  <div className={styles.placeholderImage}>No Image</div>
                )}
                <h3 className={styles.licenseTitle}>{license.title}</h3>
                <p className={styles.licenseDescription}>
                  {license.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
