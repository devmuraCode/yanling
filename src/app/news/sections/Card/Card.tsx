import styles from './Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, date, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <p className={styles.date}>{date}</p>
          <button className={styles.readMore}>Читать далее</button>
        </div>
      </div>
    </div>
  );
};
