"use client";
import Image from "next/image";
import Container from "../../../../components/Container";
import styles from "./NewsSection.module.scss";
import { getNewsList, INews } from "@/services/getNewsList";
import { useEffect, useState } from "react";

export const NewsSection = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log(news);
  
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

  const formatDate = (date: string): string => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Yangiliklar</h1>
        <div className={styles.content}>
          <div className={styles.cardGroup}>
            {news.length > 0 && (
              <div className={styles.card}>
                {news[0].filePath && (
                  <Image
                    src={news[0].filePath}
                    alt="News Image"
                    className={styles.image}
                    width="400"
                    height="400"
                  />
                )}
                <div className={styles.body}>
                  <span>{formatDate(news[0].createdDate)}</span>
                  <p className={styles.cardDescription}>{news[0].title}</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.otherNews}>
            <h3>Boshqa yangiliklar</h3>
            <div className={styles.items}>
              {news.slice(1, 5).map((item) => (
                <div key={item.id} className={styles.item}>
                  <span>{formatDate(item.createdDate)}</span>
                  <p className={styles.cardDescription}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
