import React from "react";
import Image from "next/image";
import logoNew from "@/assets/images/logo-new.jpg";
import vk from "@/assets/images/vk.png";
import whatsapp from "@/assets/images/whatsapp.png";
import HeaderButton from "@/ui/HeaderButton";
import { roboto, robotoLight } from "@/assets/fonts";

const Header = () => {
  return (
    <header className={"flex items-center justify-between mt-2"}>
      <Image
        className={
          "md:w-[290px] md:h-[140px] smob:w-[120px] smob:h-[60px] bmob:w-[160px] bmob:h-[80px]"
        }
        src={logoNew}
        alt={"logo"}
      />
      {/*{*/}
      {/*  <h1*/}
      {/*    style={roboto.style}*/}
      {/*    className={*/}
      {/*      "text-orange text-[28px]  font-bold  xl:text-[26px] bmob:text-[12px] bbmob:text-[10px] md:text-[19px] sm:text-[18px]  lg:text-[34px] smob:text-[12px] smob:mx-auto"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    Агентство Недвижимости РЕВАС*/}
      {/*  </h1>*/}
      {/*}*/}

      <div className={"phone"}>
        <a
          style={roboto.style}
          href={"tel:+73432077015"}
          className={"text-orange text-[36px]"}
        >
          +7 (343) <span className={"font-bold"}>207-70-15</span>
        </a>
        <p className={"text-orange"} style={robotoLight.style}>
          ЖДЕМ ЗВОНКИ ЕЖЕДНЕВНО!
        </p>
      </div>
      <div>
        <div className={"flex items-center"}>
          <p
            style={robotoLight.style}
            className={
              " text-orange font-bold sm:text-[15px] sm:mr-5 smob:mr-3 smob:text-[7px]"
            }
          >
            Пишите нам в
          </p>
          <a target={"_blank"} href="https://vk.com/revas_n">
            <Image
              className={"sm:w-[41px] sm:h-[39px] smob:w-[21px] smob:h-[23px]"}
              src={vk}
              alt={"Вк"}
            />
          </a>
        </div>
        <div className={"flex items-center"}>
          <p
            style={robotoLight.style}
            className={"text-orange font-bold sm:text-[15px] smob:text-[7px]"}
          >
            +7 90 900 911 10
          </p>
          <a
            target={"_blank"}
            href="https://api.whatsapp.com/send/?phone=79090091110&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%0A%0A&type=phone_number&app_absent=0"
          >
            <Image
              className={
                "sm:w-[41px] sm:h-[39px] smob:w-[21px] smob:h-[23px] ml-1"
              }
              src={whatsapp}
              alt={"Whatsapp"}
            />
          </a>
        </div>
        <div className={"rounded-[16px] smob:hidden md:block md:visible"}>
          <HeaderButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
