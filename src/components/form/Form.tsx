"use client";
import React from "react";
import styles from "./form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <h1 className={"text-white font-bold text-[24px] text-center pt-5"}>
        ОСТАВЬТЕ ОНЛАЙН ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ
      </h1>
      <div className={styles.inputgroup}>
        <input
          className={
            "w-[284px] py-4 px-3 rounded-[8px] text-[16px] font-bold placeholder:text-[#C9C2C2] mx-6"
          }
          type="text"
          placeholder={"Ваше имя"}
        />
        <input
          className={
            "w-[284px] py-4 px-3 rounded-[8px] text-[16px] font-bold   mx-6 placeholder:text-[#C9C2C2]"
          }
          type="text"
          placeholder={"Ваш телефон"}
        />
      </div>
      <div className={styles.checkboxgroup}>
        <label
          className={
            "mt-6 font-bold text-[16px] text-white pl-2 flex text-center mx-32"
          }
        >
          <input type="checkbox" className={"mx-4"} />Я даю согласие на
          обработку ООО РЕВАС содержащихся в анкете моих персональных данных,
          подтверждаю, что ознакомился с политикой конфиденциальности и согласен
          с ней.
        </label>
      </div>
      <div className={styles.submitbutton}>
        <button
          className={
            "bg-white font-bold text-[16px] text-[#1E2D55] w-[332px] h-[61px] rounded-[8px] mt-12 hover:bg-gray-300"
          }
          type={"submit"}
        >
          ЗАКАЗАТЬ ЗВОНОК
        </button>
      </div>
    </form>
  );
};

export default Form;
