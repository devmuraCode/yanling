"use client"
import Container from "@/components/Container";
import styles from "./ServiceSection.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getService, IService } from "@/services/getCompanyService";

export const ServiceSection = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getService();
        setServices(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1 className={styles.title}>Xizmatlar</h1>
          <div className={styles.cardGroup}>
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className={styles.card}>
                <img
                  src={service.filePath}
                  alt={service.title}
                  className={styles.image}
                />
                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
