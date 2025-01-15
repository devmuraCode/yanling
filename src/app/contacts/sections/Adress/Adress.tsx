"use client";
import { ICompany } from "@/services/getCompanyAdress";
import styles from "../ContactSection.module.scss";
import {
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import YandexMap from "./YandexMap";
import Image from "next/image";
import tel from "@/assets/telegramfooter.svg";
import main from "@/assets/mailfooter.svg";
import location from "@/assets/locationfooter.svg";
import Link from "next/link";

interface AdressProps {
  company: ICompany;
}

export const Adress: React.FC<AdressProps> = ({ company }) => {
  const { name, address, phones, emails, socialAddresses } = company;

  if (!address || typeof address !== "object") {
    return <p>Адрес компании не указан.</p>;
  }

  const { street, house, latitude, longitude } = address;

  const telegram = socialAddresses?.find(
    (social) => social.type.name.toLowerCase() === "telegram"
  );

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <Link href="/">Bosh sahifa</Link> /{" "}
        <Link href="/contacts">Kontaktlar</Link>
      </div>
      {latitude && longitude && (
        <div className={styles.mapContainer}>
          <YandexMap latitude={latitude} longitude={longitude} />
        </div>
      )}

      <div className={styles.contactInfo}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.infoCards}>
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Image src={location} alt="Location" className={styles.icon} />
              <h3>Manzil</h3>
            </div>
            <p>
              {street}, д. {house}
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Image src={main} alt="Email" className={styles.icon} />
              <h3>Email</h3>
            </div>
            <div>
              {emails?.map((email) => (
                <p key={email.id}>{email.name}</p>
              ))}
            </div>
          </div>

          {telegram && (
            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <Image src={tel} alt="Telegram" className={styles.icon} />
                <h3>Telegram</h3>
              </div>
              <p>{telegram.name}</p>
            </div>
          )}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Image src={tel} alt="Phone" className={styles.icon} />
              <h3>Telefon raqamlari</h3>
            </div>
            <div>
              {phones?.map((phone) => (
                <p key={phone.id}>{phone.name}</p>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <h3>Ijtimoiy tarmoqlar</h3>
            </div>
            <div className={styles.socialIcons}>
              {socialAddresses?.map((social) => (
                <a
                  key={social.id}
                  href={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {social.type.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
