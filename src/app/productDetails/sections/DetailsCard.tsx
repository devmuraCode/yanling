import React, { useState } from "react";
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
  name: string;
  description: string;
  price: number;
  files: File[];
  productFieldCategories?: ProductFieldCategory[];
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  name,
  description,
  price,
  files,
  productFieldCategories,
}) => {
  const [activeImage, setActiveImage] = useState<string>(
    files.find((file) => file.main)?.filePath || files[0]?.filePath
  );

  const mainImage =
    files.find((file) => file.main)?.filePath || files[0]?.filePath;

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.card}>
          <div className={styles.imageSection}>
            {mainImage && (
              <img src={activeImage} alt={name} className={styles.mainImage} />
            )}
            <div className={styles.thumbnailCarousel}>
              <button
                className={styles.carouselButton}
                onClick={() => setActiveImage(files[0]?.filePath)}
              >
                ❮
              </button>
              <div className={styles.thumbnails}>
                {files.map((file) => (
                  <img
                    key={file.id}
                    src={file.filePath}
                    alt={`Thumbnail ${file.id}`}
                    className={`${file.main ? styles.activeThumbnail : ""} ${
                      activeImage === file.filePath
                        ? styles.selectedThumbnail
                        : ""
                    }`}
                    onClick={() => setActiveImage(file.filePath)}
                  />
                ))}
              </div>
              <button
                className={styles.carouselButton}
                onClick={() =>
                  setActiveImage(files[files.length - 1]?.filePath)
                }
              >
                ❯
              </button>
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
                        <p>{field.field.name}</p>
                        <span>{field.value.value}</span>
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
