"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import styles from "./AllProducts.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useCategories } from "@/hooks/useCategories";
import { Menu, MenuItem } from "@shadcn/ui";
import { Category } from "@/api/categories";

export const AllProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !categories) {
    return <div>Error loading categories.</div>;
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const generateMenuItems = (categories: Category[]): { id: string; text: string; children?: any[] }[] => {
    return categories.map((category) => ({
      id: category.id.toString(),
      text: category.name,
      children: category.children ? generateMenuItems(category.children) : [],
    }));
  };

  const menuItems = generateMenuItems(categories);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <h2>Категории</h2>
            <Menu>
              {menuItems.map((category) => (
                <MenuItem key={category.id} onClick={() => handleCategoryChange(category.id)}>
                  {category.text}
                  {category.children && (
                    <div className={styles.subMenu}>
                      {category.children.map((child) => (
                        <MenuItem key={child.id} onClick={() => handleCategoryChange(child.id)}>
                          {child.text}
                        </MenuItem>
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </aside>
          <main className={styles.products}>
            <div className={styles.productList}>
              {/* Map through products to display them here */}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};
