"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import styles from "./AllProducts.module.scss";
import ProductCard from "../ProductCard/ProductCard";

interface Product {
  id: number;
  image: string;
  name: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

const products: Product[] = [
  {
    id: 1,
    image:
      "https://olcha.uz/image/220x220/products/supplier/stores/1/2023-08-28/51vh2Y9Z73X6Q7S5BHBoUlD7JUpezLTtef9AffqHIgdVddp1Ky4YBkM4xjj7.jpg",
    name: "Телевизор VESTA TV LED 32V10H",
    category: "Телевизоры",
  },
  {
    id: 2,
    image:
      "https://olcha.uz/image/220x220/products/2022-11-25/televizor-vesta-v32lh4300-smart-32-171556-0.jpeg",
    name: 'Телевизор Vesta 43V3400 43" FHD',
    category: "Телевизоры",
  },
  {
    id: 3,
    image:
      "https://olcha.uz/image/220x220/products/41BxCGjb7ids95wc8Dh5eKJSfKnw0vYsRGtGmCKYeSFx2HMyJHExfyyyvooS.jpg",
    name: "Ноутбук HP Pavilion 15",
    category: "Ноутбуки",
  },
];

const categories: Category[] = [
  { id: "all", name: "Все" },
  { id: "Телевизоры", name: "Телевизоры" },
  { id: "Ноутбуки", name: "Ноутбуки" },
];

export const AllProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <h2>Категории</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={
                    selectedCategory === category.id ? styles.active : ""
                  }
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </aside>
          <main className={styles.products}>
            <div className={styles.productList}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                />
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};
