"use client";

import { useEffect, useState } from "react";
import { INews, getNewsList } from "@/services/getNewsList";
import Container from "@/components/Container";
import styles from "./NewsSection.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const formatDate = (date: string): string => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
 const handleProductClick = (item: INews) => {
   const queryString = new URLSearchParams({
     title: item.title,
     description: item.description,
     filePath: item.filePath,
     createdDate: item.createdDate,
   }).toString();

   router.push(`/newsDetail/${item.id}?${queryString}`);
 };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.pages}>
          <Link href={"/"}> Bosh sahifa</Link> /{" "}
          <Link href={"/news"}>Yangiliklar</Link>
        </div>
        <div className={styles.newsGroup}>
          {news.map((item, index) => (
            <div className={styles.article} key={item.id}>
              <img src={item.filePath} alt={item.title} />
              <div className={styles.articleContent}>
                <p>
                  {expandedIndex === index
                    ? item.description
                    : truncateText(item.description, 150)}
                </p>
                <span>{formatDate(item.createdDate)}</span>
                <button
                  className={styles.btn}
                  onClick={() => handleProductClick(item)}
                >
                  Batafsil o’qish
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
