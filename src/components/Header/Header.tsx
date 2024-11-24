import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Container from "../Container";
import styles from "./Header.module.scss";
interface IProps {
  title: string;
  image: string | StaticImageData;
  description: string;
}

export const Header: FC<IProps> = ({ title, description, image }) => {
  console.log(image);
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 27, 85, 0.7), rgba(0, 27, 85, 0.7)), url(${
          typeof image === "string" ? image : image.src
        })`,
      }}
    >
      <Container>
        <div className={styles.content}>
          <div className={styles.body_content}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
