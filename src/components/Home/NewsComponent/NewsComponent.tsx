import Image from "next/image";
import Container from "../../Container";
import styled from "./NewsComponent.module.scss";

import news_1 from "@/assets/news_1.jpg";
import news_2 from "@/assets/news_2.jpg";
import news_3 from "@/assets/news_3.jpg";

export const NewsComponent = () => {
  return (
    <div className={styled.wrapper}>
      <Container>
        <div>
          <h2>News</h2>
          <hr />
        </div>

        <div className={styled.card_group}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <div className="overflow-hidden">
              <Image
                className="transform transition-transform duration-300 hover:scale-110"
                src={news_1}
                alt=""
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2">
                Yanling at Computex 2024
              </div>
              <p className="text-gray-700 text-sm">
                On June 4, COMPUTEX 2024 Taipei International Computer Show
                kicked off...
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="overflow-hidden">
              <Image
                className="transform transition-transform duration-300 hover:scale-110"
                src={news_2}
                alt=""
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2">
                Meeting US In Computex Taipei
              </div>
              <p className="text-gray-700 text-sm">
                Join Yanling at Computex Taipei 2024, meet the Yanling team...
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="overflow-hidden">
              <Image
                className="transform transition-transform duration-300 hover:scale-110"
                src={news_3}
                alt=""
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2">
                Holiday of International Labor Day
              </div>
              <p className="text-gray-700 text-sm">
                Dear Friends, We will be on a short vacation from 1st to 5th
                May...
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
