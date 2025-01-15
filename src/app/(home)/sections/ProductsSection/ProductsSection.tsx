"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "@/components/Container";
import styles from "./ProductsSection.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CompanyProduct } from "@/services/getCopanyProductsList";
import ProductCard from "@/app/products/ui/ProductCard/ProductCard";
import { getCopanyTopProducts } from "@/services/getCompantTopProducts";
import { getChineseProducts } from "@/services/getChineseProducts";
import Link from "next/link";

export const ProductsSection = () => {
  const [products, setProducts] = useState<CompanyProduct[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("firma");
  const router = useRouter();

  const fetchCompanyProducts = async () => {
    try {
      const data = await getCopanyTopProducts();
      setProducts(data);
      setActiveCategory("firma");
    } catch (error) {
      console.error("Ошибка загрузки продуктов компании:", error);
    }
  };

  const fetchShortInfoProducts = async () => {
    try {
      const data = await getChineseProducts();
      setProducts(data);
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

  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Mahsulotlarimiz</h2>
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
        <div className={styles.sliderContainer}>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={{
              nextEl: `.${styles.nextButton}`,
              prevEl: `.${styles.prevButton}`,
            }}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              576: { slidesPerView: 1 },
            }}
          >
            {products && products.length > 0 ? (
              products.map((product) => (
                <SwiperSlide key={product.id} className={styles.card}>
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.filePath}
                    name={product.title}
                    // @ts-ignore
                    price={product.price || 0}
                    onClick={() => handleProductClick(product.id)}
                  />
                </SwiperSlide>
              ))
            ) : (
              <p>Нет продуктов в этой категории.</p>
            )}
          </Swiper>
          <Link href={"/products"} className={styles.btnnn}>Barcha mahsulotlar</Link>
          <button className={`${styles.prevButton}`}>
            <IoIosArrowBack />
          </button>
          <button className={`${styles.nextButton}`}>
            <IoIosArrowForward />
          </button>
        </div>
      </Container>
    </div>
  );
};
