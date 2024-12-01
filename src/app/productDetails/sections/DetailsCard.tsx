import React from "react";
import Container from "@/components/Container";
import styles from "./DetailsCard.module.scss";

interface File {
  id: number;
  filePath: string;
  main: boolean;
}

interface Field {
  field: { name: string };
  value: { value: string };
}

interface ProductFieldCategory {
  id: number;
  name: string;
  fields: Field[];
  main: boolean;
}

interface DetailsCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  files: File[];
  productFieldCategories?: ProductFieldCategory[];
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  id,
  name,
  description,
  price,
  files,
  productFieldCategories,
}) => {
  const mainImage =
    files.find((file) => file.main)?.filePath || files[0]?.filePath;

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.card}>
          <div className={styles.imageSection}>
            {mainImage && (
              <img src={mainImage} alt={name} className={styles.mainImage} />
            )}
            <div className={styles.thumbnailCarousel}>
              <button className={styles.carouselButton}>❮</button>
              <div className={styles.thumbnails}>
                {files.map((file) => (
                  <img
                    key={file.id}
                    src={file.filePath}
                    alt={`Thumbnail ${file.id}`}
                    className={file.main ? styles.activeThumbnail : ""}
                  />
                ))}
              </div>
              <button className={styles.carouselButton}>❯</button>
            </div>
          </div>
          <div className={styles.detailsSection}>
            <h1 className={styles.productName}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{price.toLocaleString("en-US")} UZS</p>
            <div className={styles.additionalInfo}>
              <h2>Характеристики</h2>
              {productFieldCategories?.map((category) => (
                <div key={category.id} className={styles.category}>
                  <h3>{category.name}</h3>
                  <ul className={styles.attributes}>
                    {category.fields.map((field, index) => (
                      <li key={index} className={styles.attributeItem}>
                        <strong>{field.field.name} - </strong>
                        {field.value.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
