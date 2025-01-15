import Container from "@/components/Container";
import styles from "./AboutSection.module.scss";
import img from "@/assets/about_yanling.jpg";
import { FiTrendingUp } from "react-icons/fi";
import {
  FaServer,
  FaIndustry,
  FaWarehouse,
  FaStore,
  FaExpand,
  FaMedal,
} from "react-icons/fa";
import IconWrapper from "./IconWrapper";
import Image from "next/image";
import Link from "next/link";
export const AboutSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.titleContainer}>
          <Link href="/">Bosh sahifa /</Link>{" "}
          <Link href="/about">Biz haqimizda</Link>
        </div>
        <div>
          <Image src={img} className={styles.img} alt="" />
          <h1 className={styles.title}>Biz haqimizda</h1>
          <p className={styles.about}>
            YANLING Industrial Computer Technology (Shenzhen) Co., Ltd
            established in 2000, is headquartered in Shenzhen —a special
            economic zone at the forefront of China's reform and opening up.
            YANLING is a new type of IT High-Tech enterprise approved and
            registered by relevant state departments, and it is also a
            integrated trade and production, resource-based enterprise including
            R&D, design, production, manufacturing, and sales. YANLING focuses
            on the R&D and manufacturing of fanless industrial pc, industrial
            touch panel pc, embedded fanless computer, mini pc, network server,
            motherboard, aluminum chassis and etc, and also provides OEM&ODM
            services. Products have been widely used in many fields such as
            energy, medical, education, telecommunications, multimedia, network
            security, transportation, finance, electric power, environmental
            protection, automation equipment, etc. YANLING has obtained a number
            of utility model patents and appearance design patents, and has
            passed ISO9001, CCC, CE, FCC, ROHS, TUV, certifications and other
            qualification certifications. YANLING also has many brands such as
            YANLING, Iwill, minisys, and XSK. We have established long-term
            cooperative relations with many well-known companies with strong
            strength, reasonable prices, excellent services, and rich experience
            in R&D and manufacturing. The products are sold all over the world,
            and the OEM & ODM business has involved Southeast Asia, the Middle
            East, Europe, America, South Africa and other overseas countries and
            regions.
          </p>
        </div>
      </Container>
    </div>
  );
};
