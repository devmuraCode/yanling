"use client"
import Aos from "aos";
import 'aos/dist/aos.css';

import Image from "next/image";
import Container from "../../../../components/Container";
import styled from "./AboutComponents.module.scss";


import bg from "@/assets/yanlingoffice.jpg";
import { useEffect } from "react";
export const AboutComponent = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, []);

  return (
    <div className={styled.wrapper}>
      <Container>
        <div>
          <h2>About Us</h2>
          <hr />
          <p>
            YANLING Industrial Computer Technology (Shenzhen) Co., Ltd
            established in 2000, is headquartered in Shenzhen —a special
            economic zone at the forefront of China's reform and opening up.
            YANLING is a new type of IT High-Tech enterprise approved and
            registered by relevant state departments, and it is also a
            integrated trade and production, resource-based enterprise including
            R&D, design, production, manufacturing, and sales.
          </p>
        </div>
        <div className={styled.content}>
          <Image src={bg} alt="" />
          <div className={styled.content_text}>
            <ul>
              <li>
                <span>
                  YANLING focuses on the R&D and manufacturing of fanless
                  industrial pc
                </span>
                , industrial touch panel pc, embedded fanless computer, mini pc,
                network server, motherboard, aluminum chassis and etc, and also
                provides OEM&ODM services.
              </li>
              <li>
                <span>
                  Products have been widely used in many fields such as energy
                </span>
                , medical, education, telecommunications, multimedia, network
                security, transportation, finance, electric power, environmental
                protection, automation equipment, etc.
              </li>
              <li>
                <span>
                  YANLING has obtained a number of utility model patents and
                  appearance design patents
                </span>
                , and has passed ISO9001, CCC, CE, FCC, ROHS, TUV,
                certifications and other qualification certifications. YANLING
                also has many brands such as YANLING, Iwill, minisys, and XSK.
              </li>
              <li>
                <span>
                  We have established long-term cooperative relations with many
                  well-known companies with strong strength
                </span>
                , reasonable prices, excellent services, and rich experience in
                R&D and manufacturing. The products are sold all over the world,
                and the OEM & ODM business has involved Southeast Asia, the
                Middle East, Europe, America, South Africa and other overseas
                countries and regions.
              </li>
            </ul>
          </div>
        </div>
        <div className={styled.card_group}>
          <div className={styled.card_info} data-aos="fade-left">
            <div>Total Area◥</div>
            <div>
              <h3>6000+ Square Meters</h3>
            </div>
          </div>
          <div className={styled.card_info} data-aos="fade-left">
            <div>Experience◥</div>
            <div>
              <h3>15+ Year</h3>
            </div>
          </div>
          <div className={styled.card_info} data-aos="fade-left">
            <div>Staff◥</div>
            <div>
              <h3>200+Individual</h3>
            </div>
          </div>
          <div className={styled.card_info} data-aos="fade-left">
            <div>Brand◥</div>
            <div>
              <h3>4 Individual</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
