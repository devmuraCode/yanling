import styles from './Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  filePath: string;
}

export const Card: React.FC<CardProps> = ({ title, description, filePath }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={filePath} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <button className={styles.readMore}>Читать далее</button>
        </div>
      </div>
    </div>
  );
};
