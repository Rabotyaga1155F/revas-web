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
      onClick={handleButtonClick}
      className={
        "font-bold text-[16px] text-white bg-[#1E2D55] text-center px-3 py-4 rounded-[16px] hover:bg-blue-900"
      }
    >
      Оставить заявку
    </button>
  );
};

export default HeaderButton;
