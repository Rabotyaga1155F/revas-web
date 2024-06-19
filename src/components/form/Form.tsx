"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendMessageToEmail } from "@/utils/send-mail/serverActions";
import { UserForm } from "@/types/user-form.types";

const Form = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [isFormSend, setIsFormSend] = useState<boolean>(false);
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<UserForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    try {
      sendMessageToEmail(`Имя - ${Name} \nНомер телефона - ${Phone}`);
      setIsFormSend(true);
      setName("");
      setPhone("");
      reset();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      {!isFormSend ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          id={"form"}
          className={styles.form}
        >
          <h1
            className={
              "text-white font-bold md:text-[24px] smob:text-[14px] px-3 text-center pt-5"
            }
          >
            ОСТАВЬТЕ ОНЛАЙН ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ
          </h1>
          <div className={styles.inputgroup}>
            <div className={"text-center"}>
              <input
                className={
                  " mx-3 py-4 px-3 rounded-[8px] text-[16px] font-bold placeholder:text-[#C9C2C2] "
                }
                type="text"
                placeholder={"Ваше имя"}
                {...register("Name", {
                  required: true,
                })}
                onChange={(event) => setName(event.target.value)}
              />
              <p className={"text-left ml-8 mt-2 text-red-600"}>
                {errors.Name && <span>Это поле обязательно</span>}
              </p>
            </div>

            <div className={""}>
              <input
                className={
                  "mx-3 py-4 px-3 rounded-[8px] text-[16px] font-bold placeholder:text-[#C9C2C2] "
                }
                type="text"
                placeholder={"Ваш телефон"}
                {...register("Phone", {
                  required: {
                    value: true,
                    message: "Это поле обязательно",
                  },
                  pattern: {
                    value: /^(?:\+7|8)\d{10}$/,
                    message: "Неверный номер",
                  },
                })}
                onChange={(event) => setPhone(event.target.value)}
              />
              <p className={"text-left ml-8 mt-2 text-red-600"}>
                {errors?.Phone && <span>{errors?.Phone.message}</span>}
              </p>
            </div>
          </div>
          <div className={styles.checkboxgroup}>
            <label
              className={
                "pt-6 font-bold  text-white pl-2 flex text-center mx-32 md:mx-16 smob:mx-4 smob:text-[10px] md:text-[16px]"
              }
            >
              <input
                required={true}
                type="checkbox"
                className={"mx-4 md:mx-2"}
              />
              Я даю согласие на обработку ООО РЕВАС содержащихся в анкете моих
              персональных данных, подтверждаю, что ознакомился с политикой
              конфиденциальности и согласен с ней.
            </label>
          </div>
          <div className={styles.submitbutton}>
            <button
              disabled={!isValid}
              className={
                "bg-white font-bold text-[16px] text-[#1E2D55] smob:py-4 smob:px-10 md:py-4 md:px-14 rounded-[8px] mt-12  hover:bg-gray-300 cursor-pointer"
              }
              type={"submit"}
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.form}>
          <h1
            className={
              "flex justify-center mt-12 text-white font-bold text-[24px]"
            }
          >
            Спасибо, ожидайте звонка сотрудника
          </h1>
        </div>
      )}
    </>
  );
};

export default Form;
