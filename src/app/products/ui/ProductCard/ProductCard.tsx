"use client";
import React from "react";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
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
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <p className={styles.price}>
          {price > 0 ? `${price.toLocaleString("ru-RU")} ₽` : "Нет в наличии"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
