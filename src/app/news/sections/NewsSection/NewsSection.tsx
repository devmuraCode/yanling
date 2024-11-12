"use client"
import Container from "@/components/Container";
import styles from "./NewsSection.module.scss";
import { Card } from "../Card/Card";
import useNews from "@/hooks/useNews";

export const NewsSection = () => {
  const {data: news, isLoading, isError} = useNews();

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.newsGroup}>
          {news?.map((item, index) => (
            <Card
              key={index}
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
