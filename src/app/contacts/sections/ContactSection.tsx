"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import styles from "./ContactSection.module.scss";
import { Textarea } from "@/components/ui/textarea";
import useContactForm from "@/hooks/useCreateContact";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { getCompanyAdress } from "@/services/getCompanyAdress";
import { Adress } from "./Adress/Adress";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const { mutate: sendForm, isPending } = useContactForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState<any>(null);

  useEffect(() => {
    const fetchCompanyAdress = async () => {
      try {
        const data = await getCompanyAdress();
        setCompany(data);
      } catch (error) {
        console.error("Ошибка при получении адреса компании", error);
      }
    };

    fetchCompanyAdress();
  }, []);

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
    sendForm(
      { name, phone, email, message },
      {
        onSuccess: () => {
          // toast.success("Форма успешно отправлена!");
          setName("");
          setPhone("+998");
          setEmail("");
          setMessage("");
        },
        onError: () => {
          console.log("Ошибка при отправке формы. Попробуйте еще раз.");
        },
      }
    );
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
            {company && <Adress company={company} />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
