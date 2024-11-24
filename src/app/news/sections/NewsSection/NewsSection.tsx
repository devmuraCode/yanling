"use client";

import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { INews, getNewsList } from "@/services/getNewsList";
import Container from "@/components/Container";
import styles from "./NewsSection.module.scss";

export const NewsSection = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.newsGroup}>
          {news.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              filePath={item.filePath}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
