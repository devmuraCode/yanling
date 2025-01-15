"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import styles from "./ContactSection.module.scss";
import { Textarea } from "@/components/ui/textarea";
import useContactForm from "@/hooks/useCreateContact";
import { getCompanyAdress, ICompany } from "@/services/getCompanyAdress";
import { Adress } from "./Adress/Adress";

const ContactSection = () => {
  const { mutate: sendForm, isPending } = useContactForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState<ICompany | null>(null);
  console.log(company);

  useEffect(() => {
    const fetchCompanyAdress = async () => {
      try {
        const data = await getCompanyAdress();
        // @ts-ignore
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
          <div className={styles.infoSection}>
            {company ? <Adress company={company} /> : <p>Загрузка данных...</p>}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
