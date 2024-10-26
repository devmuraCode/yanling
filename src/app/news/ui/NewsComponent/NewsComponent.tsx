import Container from "@/components/Container";
import styles from "./NewsComponent.module.scss";
import { Card } from "../Card/Card";

export const NewsComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.news_group}>
        <Card
          title="Заголовок новости"
          description="Краткое описание новости, чтобы заинтересовать пользователя."
          date="25 октября 2024"
          imageUrl="https://via.placeholder.com/300"
        />
        <Card
          title="Заголовок новости"
          description="Краткое описание новости, чтобы заинтересовать пользователя."
          date="25 октября 2024"
          imageUrl="https://via.placeholder.com/300"
        />
        <Card
          title="Заголовок новости"
          description="Краткое описание новости, чтобы заинтересовать пользователя."
          date="25 октября 2024"
          imageUrl="https://via.placeholder.com/300"
        />
        <Card
          title="Заголовок новости"
          description="Краткое описание новости, чтобы заинтересовать пользователя."
          date="25 октября 2024"
          imageUrl="https://via.placeholder.com/300"
        />
        <Card
          title="Заголовок новости"
          description="Краткое описание новости, чтобы заинтересовать пользователя."
          date="25 октября 2024"
          imageUrl="https://via.placeholder.com/300"
        />
        <Card
          title="Заголовок новости"
          description="Краткое описание новости, чтобы заинтересовать пользователя."
          date="25 октября 2024"
          imageUrl="https://via.placeholder.com/300"
        />
        </div>
      </Container>
    </div>
  );
};
