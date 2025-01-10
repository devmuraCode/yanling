"use client";
import Container from "@/components/Container";
import styles from "./ProductsNew.module.scss";
import { useEffect, useState } from "react";
import { ProductShortInfo } from "@/services/getFieldDetailsByCategoryId";
import { getCopanyProductsList } from "@/services/getCopanyProductsList";
import { useRouter } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";

export const ProductsNew = () => {
  const [companyProducts, setCompanyProducts] = useState<
    ProductShortInfo[] | null
  >(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCompanyProducts = async () => {
      try {
        const data = await getCopanyProductsList();
        setCompanyProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки продуктов компании:", error);
      }
    };

    fetchCompanyProducts();
  }, []);

  const handleProductClick = (productId: number) => {
    router.push(`/productDetails/${productId}`);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Mahsulotlarimiz</h1>
        <div className={styles.products}>
          <div className={styles.category_button}>
            <button className={styles.btn}>Firma mahsulotlari</button>
            <button className={styles.btn}>Xitoy mahsulotlari</button>
          </div>
          <div className={styles.productsSection}>
            {companyProducts && companyProducts.length > 0 ? (
              companyProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.filePath}
                  name={product.title}
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
