import React, { useEffect, useState } from "react";

const CREATE_CLIENT_TT_SET_MAP_DATA = "CREATE_CLIENT_TT_SET_MAP_DATA";

const areEqual = (prevProps: any, nextProps: any) => {
  return prevProps.address === nextProps.address;
};

type TGeoPositionType = [number, number];

export type TMapDataIncome = {
  centerCoords: [number, number];
  pmCoords: [number, number];
};

export type TMapDataAddress = {
  region?: {
    mapValue: string;
  };
  district?: {
    mapValue: string;
  };
  street?: string;
  house?: string;
};

export type TMapProps = {
  address?: TMapDataAddress;
  mapData?: TMapDataIncome;
  onMapDataIncome?: (data: TMapDataIncome) => void;
  onClose?: () => void;
  height?: number;
};

export const YandexMap = React.memo((props: TMapProps) => {
  const { address, mapData, onMapDataIncome, onClose, height = 600 } = props;
  const [currentGeoPosition, setCurrentGeoPosition] =
    useState<TGeoPositionType | null>(null);

  const [renderIframe, setRenderIframe] = useState(false);
  const [loadingIframe, setLoadingIframe] = useState(true);

  useEffect(() => {
    setRenderIframe(false);
    // @ts-ignore
    const eventMethod: any = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    const eventer: any = window[eventMethod];
    const messageEvent =
      eventMethod === "attachEvent" ? "onmessage" : "message";

    const onMessageCome = (e: {
      data: { action: { type: string; data: TMapDataIncome } };
    }) => {
      if (e.data && e.data.action) {
        if (e.data.action.type === CREATE_CLIENT_TT_SET_MAP_DATA) {
          onMapDataIncome && onMapDataIncome(e.data.action.data);
        }
      }
    };
    eventer(messageEvent, onMessageCome, false);

    setTimeout(() => {
      // Решение проблемы с торможением всплытия модалки
      setRenderIframe(true);
    }, 200);

    return () => {
      // @ts-ignore
      window.removeEventListener(messageEvent, onMessageCome);
    };
  }, [mapData]);

  const { region, district, street, house } = address || {};
  const searchAddress = `Узбекистан, ${region ? region.mapValue : ""}${
    district ? ", " + district.mapValue : ""
  }${street ? ", " + street : ""}${house ? ", " + house : ""}`;

  const pmCoords = currentGeoPosition?.length
    ? currentGeoPosition
    : mapData?.pmCoords
    ? mapData.pmCoords
    : "";
  const centerCoords = currentGeoPosition?.length
    ? currentGeoPosition
    : mapData?.centerCoords
    ? mapData.centerCoords
    : "";

  let zoom = 10;
  if (pmCoords) {
    zoom = 18;
  } else {
    if (district) {
      zoom = 13;
      if (street) {
        zoom = 15;
        if (house) {
          zoom = 17;
        }
      }
    }
  }

  const onLoad = () => {
    setLoadingIframe(false);
  };

  return (
    <>
      <div>
        <div className={"mapContainer"}>
          {renderIframe && (
            <iframe
              onLoad={onLoad}
              src={`https://support24.uz/ya-map?${
                centerCoords
                  ? "&centerCoords=" + centerCoords
                  : "search=" + searchAddress
              }&zoom=${zoom}&pmCoords=${centerCoords}`}
              width="100%"
              height={`${height}px`}
            />
          )}
          {loadingIframe && (
            <div className="abs-loader">
              <h1>Загрузка....</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}, areEqual);
