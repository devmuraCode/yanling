import Container from "@/components/Container";
import styles from "./NewsSection.module.scss";
import { Card } from "../Card/Card";

export const NewsSection = () => {
  const newsData = [
    {
      title: "Заголовок новости 1",
      description: "Краткое описание первой новости.",
      date: "25 октября 2024",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Заголовок новости 2",
      description: "Краткое описание второй новости.",
      date: "26 октября 2024",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Заголовок новости 3",
      description: "Краткое описание третьей новости.",
      date: "27 октября 2024",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.newsGroup}>
          {newsData.map((news, index) => (
            <Card
              key={index}
              title={news.title}
              description={news.description}
              date={news.date}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
