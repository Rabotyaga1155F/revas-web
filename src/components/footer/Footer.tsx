"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import vk from "@/assets/images/vk.png";
import whatsapp from "@/assets/images/whatsapp.png";
import arrow from "@/assets/images/arrow.svg";

const handleUpButton = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className={"bg-[#ECEAE9] h-[280px] block"}>
      <div className={"mx-80 pt-6 flex md:mx-10 lg:mx-40 smob:mx-6 "}>
        <div className={"w-[150px] "}>
          <Image className={"w-[150px] h-[180px]"} src={logo} alt={"LOGO"} />
          <div className={"flex justify-around mt-2"}>
            <a target={"_blank"} href="https://vk.com/revas_n">
              <Image className={"w-[41px] h-[41px]"} src={vk} alt={"VK"} />
            </a>
            <Image
              className={"w-[41px] h-[41px]"}
              src={whatsapp}
              alt={"WhatsApp"}
            />
          </div>
        </div>
        <div className={"flex flex-col mx-auto"}>
          <h1 className={"mx-auto font-bold text-[#1E2D55]"}>Телефон</h1>
          <a
            href={"tel:+73432077015"}
            className={"mx-auto font-medium text-[30px] text-[#1E2D55] mt-2"}
          >
            +7 (343) 207-70-15
          </a>
          <h1 className={"mx-auto font-bold text-[#1E2D55] mt-2"}>Email</h1>
          <a
            href={"mailto:revas1805@bk.ru"}
            className={"mx-auto font-medium text-[30px] text-[#1E2D55] mt-2"}
          >
            revas1805@bk.ru
          </a>
          <h1 className={"mx-auto font-bold text-[#1E2D55] mt-10"}>
            Агентство Недвижимости РЕВАС
          </h1>
        </div>

        <div className={"w-[135px]"}></div>
        <div className={"pt-44"}>
          <button
            onClick={() => handleUpButton()}
            className={
              "h-[54px] w-[62px] bg-[#1E2D55] rounded-[8px] absolute right-10 hover:bg-blue-900 smob:w-0 sm:w-[62px]"
            }
          >
            <Image className={"mx-auto"} src={arrow} alt={"Arrow"} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
