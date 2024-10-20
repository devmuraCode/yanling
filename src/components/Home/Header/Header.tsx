"use client";
import Image from "next/image";

import styled from "./Header.module.scss";

import banner_1 from "@/assets/header_slide_1.jpg";
import banner_2 from "@/assets/header_slide_2.jpg";
import banner_3 from "@/assets/header_slide_3.jpg";

export const Header = () => {
  return (
    <div className={styled.wrapper}>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src={banner_2} alt="banner_3" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src={banner_1} alt="banner_3" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src={banner_3} alt="banner_3" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
