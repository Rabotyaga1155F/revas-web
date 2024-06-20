import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import vk from "@/assets/images/vk.png";
import whatsapp from "@/assets/images/whatsapp.png";
import HeaderButton from "@/ui/HeaderButton";

const Header = () => {
  return (
    <header className={"flex items-center justify-between mt-2"}>
      <Image
        className={
          "md:w-[109px] md:h-[130px] smob:w-[80px] smob:h-[100px] bmob:w-[40px] bmob:h-[60px]"
        }
        src={logo}
        alt={"logo"}
      />
      <h1
        className={
          "text-[28px] font-bold text-[#1e2d55] xl:text-[36px] bmob:text-[12px] md:text-[26px] sm:text-[18px]  lg:text-[34px] smob:text-[14px] smob:mx-auto"
        }
      >
        Агентство Недвижимости РЕВАС
      </h1>

      <div className={"phone"}>
        <a href={"tel:+73432077015"} className={"text-[#1E2D55] text-[36px]"}>
          +7 (343) <span className={"font-bold"}>207-70-15</span>
        </a>
        <p className={"text-[#1E2D55]"}>ЖДЕМ ЗВОНКИ ЕЖЕДНЕВНО!</p>
      </div>
      <div className={"smob:hidden bmob:block bmob:visible"}>
        <div className={"flex items-center"}>
          <p
            className={
              "text-[#303C62] font-bold sm:text-[15px] sm:mr-5 smob:mr-3 smob:text-[10px]"
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
            className={
              "text-[#303C62] font-bold sm:text-[15px] smob:text-[10px]"
            }
          >
            +7 90 900 911 10
          </p>
          <a
            target={"_blank"}
            href="https://api.whatsapp.com/send/?phone=79090091110&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%0A%0A&type=phone_number&app_absent=0"
          >
            <Image
              className={"sm:w-[41px] sm:h-[39px] smob:w-[21px] smob:h-[23px]"}
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
