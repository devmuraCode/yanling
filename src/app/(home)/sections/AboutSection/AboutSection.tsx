"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../../../../components/Container";
import styled from "./AboutSection.module.scss";
import Link from "next/link";
import { getCompanyInfo, CompanyInfo } from "@/services/getCompanyInfo";
import layer from "@/assets/layer.svg";
import para from "@/assets/para.svg";
import hotel from "@/assets/hotel.svg";

export const AboutSection = () => {
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
    return <div className={styled.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styled.error}>{error}</div>;
  }

  if (!companyInfo) {
    return <div className={styled.error}>Нет данных для отображения.</div>;
  }

  return (
    <div className={styled.wrapper}>
      <Container>
        <div className={styled.container}>
          <div className={styled.content}>
            <h1>{companyInfo.name}</h1>
            <div className={styled.body}>
              <p>
                {companyInfo.description.length > 100
                  ? `${companyInfo.description.slice(0, 100)}...`
                  : companyInfo.description}{" "}
                <Link href="/about" className={styled.readMoreButton}>
                  Читать дальше
                </Link>
              </p>

              {companyInfo.characteristicDTOS.map((characteristic) => (
                <div key={characteristic.id} className={styled.item}>
                  <Image src={layer} width={500} height={500} alt="" />
                  <div>
                    <h2>{characteristic.title}</h2>
                    <p>{characteristic.subTitle}</p>
                  </div>
                </div>
              ))}

              <Link href={"/about"} className={styled.btn}>
                Batafsil o’qish
              </Link>
            </div>
          </div>
          <div className={styled.images}>
            <Image src={para} alt="" />
            <Image src={hotel} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};
