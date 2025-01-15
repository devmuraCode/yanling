"use clinet";
import React from "react";
import styles from "./ProductCard.module.scss";
import Link from "next/link";

interface ProductCardProps {
  id?: number;
  image: string;
  name: string;
  filePath?: string;
  title?: string;
  price?: number;
  description?: string | null;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  description,
  onClick,
}) => {
  return (
    <div
      className={styles.productCard}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p>{description}</p>
        <p className={styles.price}>{price ? `${price} ₽` : "Нет в наличии"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
