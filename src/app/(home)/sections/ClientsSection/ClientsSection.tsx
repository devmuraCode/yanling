"use client";
import { useEffect, useState } from "react";
import styles from "./ClientsSection.module.scss";
import Container from "@/components/Container";
import Image from "next/image";
import { getCompanyPartners } from "@/services/getCompanyPartners";
import { getCompanyCustomers } from "@/services/getCompanyCustomers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Client {
  id: number;
  name: string;
  webSite: string;
  filePath: string | null;
}

export const ClientsSection = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [activeTab, setActiveTab] = useState<"Mijozlarimiz" | "Hamkorlarimiz">(
    "Mijozlarimiz"
  );

  const fetchClients = async (tab: "Mijozlarimiz" | "Hamkorlarimiz") => {
    try {
      const data =
        tab === "Mijozlarimiz"
          ? await getCompanyCustomers()
          : await getCompanyPartners();

      setClients(
        data.map((client: any) => ({
          id: client.id,
          name: client.name,
          webSite: client.webSite,
          filePath: client.filePath,
        }))
      );
    } catch (error) {
      console.error("Ошибка загрузки данных о клиентах:", error);
    }
  };

  useEffect(() => {
    fetchClients(activeTab);
  }, [activeTab]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,

    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <h3
            className={`${styles.tab} ${
              activeTab === "Mijozlarimiz" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Mijozlarimiz")}
          >
            Mijozlarimiz
          </h3>
          <h3
            className={`${styles.tab} ${
              activeTab === "Hamkorlarimiz" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Hamkorlarimiz")}
          >
            Hamkorlarimiz
          </h3>
        </div>

        <div className={styles.slickContainer}>
          {clients.length > 0 ? (
            <Slider {...settings}>
              {clients.map((client) => (
                <div key={client.id} className={styles.clientCard}>
                  <a
                    href={client.webSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={client.filePath || "/assets/placeholder.svg"}
                      alt={client.name}
                      width={200}
                      height={200}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          ) : (
            <p className={styles.noData}>Нет данных для отображения</p>
          )}
        </div>
      </Container>
    </div>
  );
};
