"use client";
import Container from "@/components/Container";
import styles from "./ProductListSection.module.scss";
import {
  CompanyProduct,
  getCopanyProductsList,
} from "@/services/getCopanyProductsList";
import ProductCard from "@/app/products/ui/ProductCard/ProductCard";
import {
  getProductDetails,
  IProductDetails,
} from "@/services/getProductDetails";
import { getProductFieldDetails } from "@/services/getProductFiledDetails";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import Loading from "@/app/Loading";

export const ProductListSection = () => {
  const [products, setProducts] = useState<CompanyProduct[]>([]);
  const [productDetails, setProductDetails] = useState<IProductDetails | null>(
    null
  );
  const [productFieldDetails, setProductFieldDetails] = useState<any | null>(
    null
  );

  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getCopanyProductsList();
      console.log(fetchedProducts);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Ошибка получения списка продуктов:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductClick = async (productId: number) => {
    console.log("Product ID:", productId);
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

  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h2 className={styles.title}>Our Products</h2>
        </div>
        {products.length > 0 ? (
          <div className={styles.productList}>
            {products.map((product: CompanyProduct) => (
              <ProductCard
                key={product.id}
                image={product.filePath}
                name={product.title}
                description={product.description}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.loader}>
            <Loading />
          </div>
        )}
      </Container>
    </div>
  );
};
