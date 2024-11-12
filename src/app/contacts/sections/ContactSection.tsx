"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import styles from "./ContactSection.module.scss";
import { Textarea } from "@/components/ui/textarea";
import useContactForm from "@/hooks/useCreateContact";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const { mutate: sendForm, isPending } = useContactForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.startsWith("+998")) {
      setPhone("+998");
    } else {
      setPhone(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendForm({ name, phone, email, message });
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contactSection}>
          <div className={styles.formSection}>
            <h2>ЗАКАЖИТЕ ДЕМОНСТРАЦИЮ</h2>
            <p>Заполните форму и наш менеджер свяжется с вами...</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Имя"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Телефон"
                required
                value={phone}
                onChange={handlePhoneChange}
              />
              <Input
                type="email"
                placeholder="Почта"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                placeholder="Ваш вопрос"
                required
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isPending}
              >
                {isPending ? "Отправка..." : "ОТПРАВИТЬ"}
              </button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <h2>МЫ НА СВЯЗИ</h2>
            <div className={styles.contactDetails}>
              <p>+998 555 020 222</p>
              <p>sales@kpi.uz</p>
              <p>
                DataSite Technology, 100100, Узбекистан, г. Ташкент, ул.
                Экширом-2, д.8
              </p>
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
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
