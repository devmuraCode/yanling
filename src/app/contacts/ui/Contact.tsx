import Container from '@/components/Container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contactSection}>
          <div className={styles.formSection}>
            <h2>ЗАКАЖИТЕ ДЕМОНСТРАЦИЮ</h2>
            <p>Заполните форму и наш менеджер свяжется с вами...</p>
            <form className={styles.form}>
              <Input type="text" placeholder="Имя" required />
              <Input type="tel" placeholder="Телефон" required />
              <Input type="email" placeholder="Почта" required />
              <Input type="text" placeholder="Страна" required />
              <Textarea placeholder="Ваш вопрос" required className={styles.textarea} /> 
              <button type="submit" className={styles.submitButton}>ОТПРАВИТЬ</button>
            </form>
          </div>
          
          <div className={styles.infoSection}>
            <h2>МЫ НА СВЯЗИ</h2>
            <div className={styles.contactDetails}>
              <p>+998 555 020 222</p>
              <p>sales@kpi.uz</p>
              <p>DataSite Technology, 100100, Узбекистан город Ташкент, улица Экширом-2, д.8</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className={styles.socials}>
              <p>Мы в соц. сетях</p>
              <div className={styles.icons}>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
