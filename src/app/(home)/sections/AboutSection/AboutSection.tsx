"use client";
import layer from "@/assets/layer.svg";

import Image from "next/image";
import Container from "../../../../components/Container";
import styled from "./AboutSection.module.scss";
import para from "@/assets/para.svg";
import hotel from "@/assets/hotel.svg";

export const AboutSection = () => {
  return (
    <div className={styled.wrapper}>
      <Container>
        <div className={styled.container}>
          <div className={styled.content}>
            <h1>Biz haqimizda</h1>
            <div className={styled.body}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                est sapien, tincidunt vitae semper vel, mattis in magna. Morbi
                consectetur massa nisl. Cras et lobortis arcu. Nullam feugiat et
                libero et pharetra. Phasellus sed mollis enim. In vitae luctus
                lorem. Sed sagittis risus sed tortor molestie scelerisque. Duis
                malesuada sit amet quam quis semper.
              </p>
              <div className={styled.item}>
                <Image src={layer} width={500} height={500} alt="" />
                <div>
                  <h2>O‘rnatish</h2>
                  <p>
                    Sizning hududingizga mos ravishda professional o‘rnatish.
                  </p>
                </div>
              </div>

              <div className={styled.item}>
                <Image src={layer} width={500} height={500} alt="" />
                <div>
                  <h2>Texnik xizmat</h2>
                  <p>
                    {" "}
                    Optimal ishlash uchun muntazam tekshiruvlar va texnik xizmat
                    ko‘rsatish.
                  </p>
                </div>
              </div>

              <div className={styled.item}>
                <Image src={layer} width={500} height={500} alt="" />
                <div>
                  <h2>Moslashtirish</h2>
                  <p>Sizning o‘ziga xos ehtiyojlaringiz uchun yechimlar.</p>
                </div>
              </div>
              <button className={styled.btn}>Batafsil o’qish</button>
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
