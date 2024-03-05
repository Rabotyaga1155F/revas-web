import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import vk from "@/assets/images/vk.png";
import whatsapp from "@/assets/images/whatsapp.png";

const Header = () => {
  return (
    <header className={"flex items-center justify-between mt-2"}>
      <Image width={109} height={130} src={logo} alt={"logo"} />
      <div>
        <p className={"text-[#1E2D55] text-[36px]"}>
          +7 (343) <span className={"font-bold"}>207-70-15</span>
        </p>
        <p className={"text-[#1E2D55]"}>ЖДЕМ ЗВОНКИ ЕЖЕДНЕВНО!</p>
      </div>
      <div>
        <div className={"flex items-center"}>
          <p className={"text-[#303C62] font-bold text-[15px] mr-3"}>
            Пишите нам в
          </p>
          <Image width={41} height={39} src={vk} alt={"Вк"} />
        </div>
        <div className={"flex items-center"}>
          <p className={"text-[#303C62] font-bold text-[14px]"}>
            +7 90 900 911 10
          </p>
          <Image width={41} height={39} src={whatsapp} alt={"Whatsapp"} />
        </div>
        <button
          className={
            "font-bold text-[16px] text-white bg-[#1E2D55] text-center px-3 py-4 rounded-[16px] hover:bg-blue-900"
          }
        >
          Оставить заявку
        </button>
      </div>
    </header>
  );
};

export default Header;
