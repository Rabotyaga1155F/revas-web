import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import vk from "@/assets/images/vk.png";
import whatsapp from "@/assets/images/whatsapp.png";
import HeaderButton from "@/ui/HeaderButton";

const Header = () => {
  return (
    <header className={"flex items-center justify-between mt-2"}>
      <Image width={109} height={130} src={logo} alt={"logo"} />
      <h1
        className={
          "text-[28px] font-bold text-[#1e2d55] xl:text-[36px] bmob:text-[20px] md:text-[26px]"
        }
      >
        Агенство Недвижимости РЕВАС
      </h1>
      <div className={"phone"}>
        <a href={"tel:+73432077015"} className={"text-[#1E2D55] text-[36px]"}>
          +7 (343) <span className={"font-bold"}>207-70-15</span>
        </a>
        <p className={"text-[#1E2D55]"}>ЖДЕМ ЗВОНКИ ЕЖЕДНЕВНО!</p>
      </div>
      <div>
        <div className={"flex items-center"}>
          <p className={"text-[#303C62] font-bold text-[15px] mr-3"}>
            Пишите нам в
          </p>
          <a target={"_blank"} href="https://vk.com/revas_n">
            <Image width={41} height={39} src={vk} alt={"Вк"} />
          </a>
        </div>
        <div className={"flex items-center"}>
          <p className={"text-[#303C62] font-bold text-[14px]"}>
            +7 90 900 911 10
          </p>
          <Image width={41} height={39} src={whatsapp} alt={"Whatsapp"} />
        </div>
        <div className={"rounded-[16px]"}>
          <HeaderButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
