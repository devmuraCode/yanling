"use client";

import { useEffect, useState } from "react";
import Logo from "../Navbar/Logo";
import Container from "../Container";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import tel from "@/assets/telegramfooter.svg";
import main from "@/assets/mailfooter.svg";
import location from "@/assets/locationfooter.svg";
import telegram from "@/assets/telegramfooter.svg";
import { getCompanyInfo, CompanyInfo } from "@/services/getCompanyInfo";

export const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const data = await getCompanyInfo();
        setCompanyInfo(data);
      } catch (err) {
        setError("Ошибка при загрузке информации о компании.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!companyInfo) {
    return <div className={styles.error}>Нет данных для отображения.</div>;
  }

  const {
    description,
    address,
    phones = [],
    emails = [],
    socialAddresses = [],
  } = companyInfo;

  const primaryPhone = phones.find((phone) => phone.primary)?.name || "+998";
  const additionalPhone =
    phones.find((phone) => !phone.primary)?.name || "Доп. номер";
  const primaryEmail =
    emails.find((email) => email.primary)?.name || "info@uzross-techno.uz";
  const telegramLink =
    socialAddresses.find((social) => social.type.name === "Telegram")?.name ||
    "uzross-info";

  const mapLink = address
    ? `https://www.google.com/maps?q=${address.latitude},${address.longitude}`
    : "https://www.google.com/maps/embed?...";

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Logo />
            <p>
              {description.length > 100
                ? `${description.slice(0, 100)}...`
                : description}{" "}
              <Link href="/about" className={styles.readMoreButton}>
                Читать дальше
              </Link>
            </p>
          </div>

          <div className={styles.menuItems}>
            <Link href="/about">Kompaniya haqida</Link>
            <Link href="/products">Bizning mahsulotlar</Link>
            <Link href="/services">Xizmatlar</Link>
            <Link href="/news">Yangiliklar</Link>
            <Link href="/contacts">Kontaktlar</Link>
          </div>

          <div className={styles.contacts}>
            <div className={styles.contactInfo}>
              <Image src={tel} alt="Телефон" />
              <p>
                {primaryPhone} / {additionalPhone}
              </p>
            </div>
            <div className={styles.contactInfo}>
              <Image src={main} alt="Email" />
              <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
            </div>
            <div className={styles.contactInfo}>
              <Image src={telegram} alt="Telegram" />
              <a
                href={`https://t.me/${telegramLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{telegramLink}
              </a>
            </div>
            <div className={styles.contactInfo}>
              <Image src={location} alt="Адрес" />
              <p>
                {address
                  ? `${address.street}, ${address.house}, ${address.landmark}`
                  : "Toshkent shahar, Qoraqamish 3/4, Turkiston ko’chasi, 45-uy"}
              </p>
            </div>
          </div>

          <div className={styles.map}>
            {address ? (
              <iframe
                src={`https://yandex.ru/map-widget/v1/?ll=${address.longitude}%2C${address.latitude}&z=15&pt=${address.longitude},${address.latitude},pm2rdm`}
                width="100%"
                height="200"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            ) : (
              <p>Карта недоступна.</p>
            )}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 UzRoss-Techno. Barcha huquqlar kafolatlangan</p>
        </div>
      </Container>
    </div>
  );
};
