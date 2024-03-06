import React from "react";

const Form = () => {
  return (
    <form className={"bg-[#1E2D55] h-[407px] mt-36"}>
      <h1 className={"text-white font-bold text-[24px] text-center pt-5"}>
        ОСТАВЬТЕ ОНЛАЙН ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ
      </h1>
      <div className={"flex justify-center mt-12"}>
        <input
          className={
            "w-[284px] py-4 px-3 rounded-[8px] text-[16px] font-bold text-[#C9C2C2] mx-6"
          }
          type="text"
          placeholder={"Ваше имя"}
        />
        <input
          className={
            "w-[284px] py-4 px-3 rounded-[8px] text-[16px] font-bold text-[#C9C2C2] mx-6"
          }
          type="text"
          placeholder={"Ваш телефон"}
        />
      </div>
      <h2 className={"font-bold text-[16px] text-white text-start mx-72 mt-12"}>
        Я даю согласие на обработку ООО РЕВАС содержащихся в анкете моих
        персональных данных, подтверждаю, что ознакомился с политикой
        конфиденциальности и согласен с ней.
      </h2>
      <div className={"flex justify-center mt-8"}>
        <button
          type={"submit"}
          className={
            "bg-white font-bold text-[16px] text-[#1E2D55] w-[332px] h-[61px] rounded-[8px]"
          }
        >
          ЗАКАЗАТЬ ЗВОНОК{" "}
        </button>
      </div>
    </form>
  );
};

export default Form;
