"use client";
import { ICompany } from "@/services/getCompanyAdress";
import styles from "../ContactSection.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import YandexMap from "./YandexMap";
import { useEffect } from "react";

interface AdressProps {
  company: ICompany;
}
export const Adress: React.FC<AdressProps> = ({ company }) => {
  const { name, address, phones, emails, socialAddresses } = company;

  if (!address || typeof address !== "object") {
    return <p>Адрес компании не указан.</p>;
  }

  const { street, house, apartment, latitude, longitude } = address;

  return (
    <div className={styles.container}>
      <div className={styles.contactDetails}>
        <h3>Телефоны:</h3>
        {phones?.map((phone) => (
          <p key={phone.id}>
            {phone.name} ({phone.type.name})
          </p>
        ))}

        <h3>Электронная почта:</h3>
        {emails?.map((email) => (
          <p key={email.id}>
            {email.name} ({email.type.name})
          </p>
        ))}

        {street && house && (
          <p>
            {name}, {street}, д. {house}
            {apartment && `, кв. ${apartment}`}
          </p>
        )}
      </div>

      {latitude && longitude && (
        <div className={styles.mapContainer}>
          <YandexMap latitude={latitude} longitude={longitude} />
        </div>
      )}

      <div className={styles.socials}>
        <h3>Мы в соц. сетях:</h3>
        <div className={styles.icons}>
          {socialAddresses?.map((social) => (
            <a
              key={social.id}
              href={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.type.name === "Facebook" && <FaFacebook />}
              {social.type.name === "Twitter" && <FaTwitter />}
              {social.type.name === "Instagram" && <FaInstagram />}
              {social.type.name === "LinkedIn" && <FaLinkedin />}
              {!["Facebook", "Twitter", "Instagram", "LinkedIn"].includes(
                social.type.name
              ) && <span>{social.type.name}</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

