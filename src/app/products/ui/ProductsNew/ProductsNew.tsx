"use client";
import Container from "@/components/Container";
import styles from "./ProductsNew.module.scss";
import { useEffect, useState } from "react";
import { getShortInfoList } from "@/services/getShortInfoList";
import {
  CompanyProduct,
  getCopanyProductsList,
} from "@/services/getCopanyProductsList";
import { useRouter } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";

export const ProductsNew = () => {
  const [products, setProducts] = useState<CompanyProduct[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("firma"); // Хранит активную категорию
  const router = useRouter();

  const fetchCompanyProducts = async () => {
    try {
      const data = await getCopanyProductsList();
      setProducts(data);
      setActiveCategory("firma");
    } catch (error) {
      console.error("Ошибка загрузки продуктов компании:", error);
    }
  };

  const fetchShortInfoProducts = async () => {
    try {
      const data = await getShortInfoList();
      setProducts(data);
      setActiveCategory("xitoy");
    } catch (error) {
      console.error("Ошибка загрузки короткой информации о продуктах:", error);
    }
  };

  useEffect(() => {
    fetchCompanyProducts(); // По умолчанию загружаем "Firma mahsulotlari"
  }, []);

  const handleProductClick = async (productId: number) => {
    try {
      router.push(`/productDetails/${productId}`);
    } catch (error) {
      console.error("Ошибка получения деталей продукта:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Mahsulotlarimiz</h1>
        <div className={styles.products}>
          <div className={styles.category_button}>
            <button
              className={`${styles.btn} ${
                activeCategory === "firma" ? styles.active : ""
              }`}
              onClick={fetchCompanyProducts}
            >
              Firma mahsulotlari
            </button>
            <button
              className={`${styles.btn} ${
                activeCategory === "xitoy" ? styles.active : ""
              }`}
              onClick={fetchShortInfoProducts}
            >
              Xitoy mahsulotlari
            </button>
          </div>
          <div className={styles.productsSection}>
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.filePath}
                  name={product.title}
                  // @ts-ignore
                  price={product.price || 0}
                  onClick={() => handleProductClick(product.id)}
                />
              ))
            ) : (
              <p>Нет продуктов в этой категории.</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
