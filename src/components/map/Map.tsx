import React from "react";
import Image from "next/image";
import mapImage from "@/assets/images/map-image.jpeg";

const Map = () => {
  return (
    <div>
      <h1 className={"text-[#1E2D55] text-center font-bold text-[36px] mt-24"}>
        НАШ ОФИС
      </h1>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7de0c7955e93a12f4d9028de8c20692931a23f2d2b2d6d1d09b254b48295535b&amp;source=constructor"
        width="100%"
        height="400"
      ></iframe>

      <div className={"mt-6"}>
        <div className={"flex"}>
          <Image width={190} height={115} src={mapImage} alt={"Image"} />
          <div className={"ml-2"}>
            <h3 className={"text-[14px] text-black"}>
              Свердловская обл, Екатеринбург, ул. Большакова 153б, офис 301
            </h3>
            <h3 className={"text-[14px] text-black mt-2"}>
              ПН-ПТ 09:00 - 19:00, СБ-ВС 09:00 - 18:00
            </h3>
            <h3 className={"text-[14px] text-black mt-5"}>+7 343 207 70 15</h3>
            <h3 className={"text-[14px] text-black mt-1.5"}>revas1805@bk.ru</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
