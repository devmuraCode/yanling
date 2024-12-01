import React, { FC, useEffect } from "react";

interface YandexMapProps {
  latitude: string;
  longitude: string;
}

const YandexMap: FC<YandexMapProps> = ({ latitude, longitude }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map("yandex-map", {
            center: [parseFloat(latitude), parseFloat(longitude)],
            zoom: 15,
          });

          const placemark = new window.ymaps.Placemark(
            [parseFloat(latitude), parseFloat(longitude)],
            { balloonContent: "Компания" }
          );

          map.geoObjects.add(placemark);
        });
      } else {
        console.error("Yandex Maps API failed to load.");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [latitude, longitude]);

  return <div id="yandex-map" style={{ width: "100%", height: "200px" }} />;
};

export default YandexMap;
