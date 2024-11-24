"use client";
import React, { useState } from "react";
import styles from "./AllProducts.module.scss";
import Container from "@/components/Container";
import { useCategories } from "@/hooks/useCategories";
import { Category } from "@/services/getCategoriesList";

export const AllProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());
  const { data: categories, isError } = useCategories();

  if (isError || !categories) {
    return <div>Error loading categories.</div>;
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const toggleCategory = (categoryId: number) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const renderCategories = (categories: Category[]) => {
    return (
      <ul className={styles.menuList}>
        {categories.map((category) => (
          <li key={category.id} className={styles.menuItem}>
            <div
              onClick={() => {
                handleCategoryChange(category.id.toString());
                toggleCategory(category.id);
              }}
              className={styles.categoryLink}
            >
              {category.name}
            </div>
            {Array.isArray(category.children) &&
              category.children.length > 0 &&
              openCategories.has(category.id) && (
                <ul className={styles.subMenu}>
                  {category.children.map((child) => (
                    <li key={child.id} className={styles.menuItem}>
                      <div
                        onClick={() =>
                          handleCategoryChange(child.id.toString())
                        }
                        className={styles.categoryLink}
                      >
                        {child.name}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <h2>Категории</h2>
            {renderCategories(categories)}
          </aside>
          <main className={styles.products}>
            <div className={styles.productList}>{/* ProductCard */}</div>
          </main>
        </div>
      </Container>
    </div>
  );
};
