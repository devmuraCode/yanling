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
  const [activeCategory, setActiveCategory] = useState<string>("firma");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(10);
  const router = useRouter();

  const fetchCompanyProducts = async () => {
    try {
      const data = await getCopanyProductsList();
      setProducts(data);
      setActiveCategory("firma");
      setCurrentPage(1);
    } catch (error) {
      console.error("Ошибка загрузки продуктов компании:", error);
    }
  };

  const fetchShortInfoProducts = async () => {
    try {
      const data = await getShortInfoList();
      const productsWithMainImage = data.map((product) => {
        const mainImage =
          product.files.find((file) => file.main) || product.files[0];
        return {
          ...product,
          filePath: mainImage?.filePath || "",
          fileId: product.id,
          title: product.name,
        };
      });

      setProducts(productsWithMainImage);
      setActiveCategory("xitoy");
    } catch (error) {
      console.error("Ошибка загрузки короткой информации о продуктах:", error);
    }
  };

  useEffect(() => {
    fetchCompanyProducts();
  }, []);

  const handleProductClick = async (productId: number) => {
    try {
      router.push(`/productDetails/${productId}`);
    } catch (error) {
      console.error("Ошибка получения деталей продукта:", error);
    }
  };


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const totalPages = products
    ? Math.ceil(products.length / productsPerPage)
    : 0;

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
            {currentProducts && currentProducts.length > 0 ? (
              currentProducts.map((product) => (
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
          {products && products.length > productsPerPage && (
            <div className={styles.pagination}>
              <button
                className={styles.paginationButton}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Назад
              </button>
              <span>
                 {currentPage} из {totalPages}
              </span>
              <button
                className={styles.paginationButton}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Вперед
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
