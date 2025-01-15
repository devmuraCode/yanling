"use client";
import { useEffect, useState } from "react";
import styles from "./ClientsSection.module.scss";
import Container from "@/components/Container";
import Image from "next/image";
import { getCompanyPartners } from "@/services/getCompanyPartners";
import { getCompanyCustomers } from "@/services/getCompanyCustomers";

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
        data.map(({ id, name, webSite, filePath }: any) => ({
          id,
          name,
          webSite,
          filePath,
        }))
      );
    } catch (error) {
      console.error("Ошибка загрузки данных о клиентах:", error);
    }
  };

  useEffect(() => {
    fetchClients(activeTab);
  }, [activeTab]);

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

        <div className={styles.logos}>
          {clients.length > 0 ? (
            clients.map((client) => (
              <a
                key={client.id}
                href={client.webSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={client.filePath || "/assets/placeholder.svg"}
                  alt={client.name}
                  width={100}
                  height={100}
                />
              </a>
            ))
          ) : (
            <p>Загрузка клиентов...</p>
          )}
        </div>
      </Container>
    </div>
  );
};
