"use client";

import { useEffect, useState } from "react";
import { INews, getNewsList } from "@/services/getNewsList";
import Container from "@/components/Container";
import styles from "./NewsSection.module.scss";
import { useRouter } from "next/navigation";

export const NewsSection = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 const router = useRouter();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsList();
        setNews(data);
      } catch (err) {
        setError("Ошибка при загрузке новостей.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);



  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
   const handleProductClick = async (productId: number) => {

       router.push(`/newsDetail/${productId}`);
    
   };
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.newsGroup}>
          {news.map((item, index) => (
            <div className={styles.article} key={item.id}>
              <img src={item.filePath} alt={item.title} />
              <div className={styles.articleContent}>
                <h2>{item.title}</h2>
                <p>
                  {expandedIndex === index
                    ? item.description
                    : truncateText(item.description, 150)}
                </p>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => handleProductClick(item.id)}
                >
                  Читать далее
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
