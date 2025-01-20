"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Container from "@/components/Container";
import styles from "./NewsDetail.module.scss";
import Link from "next/link";

export const NewsDetail = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const filePath = searchParams.get("filePath");
  const createdDate = searchParams.get("createdDate");

  if (!title || !description || !filePath || !createdDate) {
    return <div>Новость не найдена. Пожалуйста, вернитесь назад.</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.titleContainer}>
          <Link href="/">Bosh sahifa /</Link>{" "}
          <Link href="/news">Yangiliklar</Link>
        </div>
        <div className={styles.newsDetail}>
          <img src={filePath} alt={title} />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <span>
            Дата публикации: {new Date(createdDate).toLocaleDateString()}
          </span>
        </div>
      </Container>
    </div>
  );
};
