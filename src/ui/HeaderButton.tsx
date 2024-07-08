"use client";
import React from "react";

const handleButtonClick = () => {
  const formElement = document.getElementById("form");

  if (formElement) {
    formElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const HeaderButton = () => {
  return (
    <button
      style={{ background: "#F04D23" }}
      onClick={handleButtonClick}
      className={
        "font-bold text-[16px] text-white text-center px-3 py-4 rounded-[16px] hover:bg-orange-700"
      }
    >
      Оставить заявку
    </button>
  );
};

export default HeaderButton;
