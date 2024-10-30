import styles from './Header.module.scss';
import Container from '@/components/Container';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1>Support</h1>
          <p>We're here to help! Browse our resources or reach out to our team for assistance.</p>
        </div>
      </Container>
    </div>
  );
};
