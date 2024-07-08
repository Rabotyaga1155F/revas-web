import React, { FC } from "react";
import Image from "next/image";
import { roboto, robotoLight } from "@/assets/fonts";

interface IServicesItemProps {
  serviceName: string;
  image: any;
}

const ServicesItem: FC<IServicesItemProps> = ({ serviceName, image }) => {
  return (
    <div
      className={
        "w-[295px] bg-[#E5EEF3] md:w-[160px]  lg:w-[200px] xl:w-[295px] smob:w-full  "
      }
    >
      <Image
        className={"md:w-[295px] md:h-[223px] smob:w-full smob:h-full"}
        src={image}
        alt={"Photo"}
      />
      <h1
        style={roboto.style}
        className={"text-orange text-[25px] font-bold text-center mt-2"}
      >
        {serviceName}
      </h1>
      <section className={"pb-6"}>
        <h3
          style={robotoLight.style}
          className={
            "md:my-1 text-center smob:font-bold smob:text-[20px] text-orange-white md:font-medium md:text-[16px] pt-6"
          }
        >
          Студии
        </h3>
        <h3
          style={robotoLight.style}
          className={
            "md:my-1 text-center smob:font-bold smob:text-[20px] md:font-medium md:text-[16px] text-orange-white font-medium"
          }
        >
          1 - комнатные квартиры
        </h3>
        <h3
          style={robotoLight.style}
          className={
            "md:my-1  text-center smob:font-bold smob:text-[20px] md:font-medium md:text-[16px] text-orange-white font-medium"
          }
        >
          2 - комнатные квартиры
        </h3>
        <h3
          style={robotoLight.style}
          className={
            "md:my-1  text-center smob:font-bold smob:text-[20px] md:font-medium md:text-[16px] text-orange-white font-medium"
          }
        >
          3 - комнатные квартиры
        </h3>
        <h3
          style={robotoLight.style}
          className={
            "md:my-1 text-center smob:font-bold smob:text-[20px] md:font-medium md:text-[16px] text-orange-white font-medium"
          }
        >
          4 - комнатные квартиры
        </h3>
      </section>
    </div>
  );
};

export default ServicesItem;
