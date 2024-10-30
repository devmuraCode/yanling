import React from "react";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  image: string;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
