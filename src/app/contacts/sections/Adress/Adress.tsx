"use client";
import { ICompany } from "@/services/getCompanyAdress";
import styles from "../ContactSection.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import YandexMap from "./YandexMap";

interface AdressProps {
  company: ICompany;
}

export const Adress: React.FC<AdressProps> = ({ company }) => {
  return (
    <div>
      <h2>МЫ НА СВЯЗИ</h2>
      <div className={styles.contactDetails}>
        {company.phones?.map((phone, index) => (
          <p key={index}>{phone}</p>
        ))}
        {company.emails?.map((email, index) => (
          <p key={index}>{email}</p>
        ))}
        <p>
          {company.name}, {company.address.street}, д. {company.address.house}
          {company.address.apartment && `, кв. ${company.address.apartment}`}
        </p>
      </div>
      {company && (
        <YandexMap
          latitude={company.address.latitude}
          longitude={company.address.longitude}
        />
      )}
      <div className={styles.socials}>
        <p>Мы в соц. сетях</p>
        <div className={styles.icons}>
        
            <FaFacebook />
          
            <FaTwitter />
          
         
            <FaInstagram />
          
          
            <FaLinkedin />
         
        </div>
      </div>
    </div>
  );
};
