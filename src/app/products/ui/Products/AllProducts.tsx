"use client";
import React, { useEffect, useState } from "react";
import styles from "./AllProducts.module.scss";
import Container from "@/components/Container";
import { useCategories } from "@/hooks/useCategories";
import { Category } from "@/services/getCategoriesList";
import {
  ProductShortInfo,
  getShortInfoByCategoryId,
} from "@/services/getFieldDetailsByCategoryId";
import ProductCard from "../ProductCard/ProductCard";
import { useRouter } from "next/navigation";
import {
  getProductDetails,
  IProductDetails,
} from "@/services/getProductDetails";
import { getProductFieldDetails } from "@/services/getProductFiledDetails";
import Loading from "@/app/loading";

export const AllProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());
  const [products, setProducts] = useState<ProductShortInfo[] | null>(null);
  const [productDetails, setProductDetails] = useState<IProductDetails | null>(null);
  const [productFieldDetails, setProductFieldDetails] = useState<any | null>(null);
  const { data: categories, isError } = useCategories();
  const router = useRouter();

  useEffect(() => {
    if (selectedCategory !== "all") {
      const fetchProducts = async () => {
        try {
          const data = await getShortInfoByCategoryId(Number(selectedCategory));
          setProducts(data);
        } catch (error) {
          console.error("Ошибка загрузки продуктов:", error);
        }
      };

      fetchProducts();
    }
  }, [selectedCategory]);

  const handleProductClick = async (productId: number) => {
    try {
      const [details, fieldDetails] = await Promise.all([
        getProductDetails(productId),
        getProductFieldDetails(productId),
      ]);

      setProductDetails(details);
      setProductFieldDetails(fieldDetails);

      router.push(`/productDetails/${productId}`);
    } catch (error) {
      console.error("Ошибка получения деталей продукта:", error);
    }
  };

  if (isError) {
    return <div>Ошибка загрузки категорий. Попробуйте обновить страницу.</div>;
  }

  if (!categories) {
    return (
      <div>
        <Loading />
      </div>
    );
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

  const renderCategories = (categories: Category[]) => (
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
                      onClick={() => handleCategoryChange(child.id.toString())}
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

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            {renderCategories(categories)}
          </aside>
          <main className={styles.products}>
            <div className={styles.productList}>
              {products ? (
                products.map((product) => {
                  const mainImage = product.files.find((file) => file.main);
                  const image = mainImage ? mainImage.filePath : "";

                  return (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      image={image}
                      name={product.name}
                      price={product.price}
                      onClick={() => handleProductClick(product.id)}
                    />
                  );
                })
              ) : (
                <p>Выберите категорию для отображения продуктов.</p>
              )}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};
