import React, { FC } from "react";
import Image from "next/image";

interface IServicesItemProps {
  serviceName: string;
  image: any;
}

const ServicesItem: FC<IServicesItemProps> = ({ serviceName, image }) => {
  return (
    <div className={"w-[295px] bg-[#E5EEF3]"}>
      <Image className={"w-[295px] h-[223px]"} src={image} alt={"Photo"} />
      <h1 className={"text-[#1E2D55] text-[25px] font-bold text-center mt-2"}>
        {serviceName}
      </h1>
      <section className={"pb-6"}>
        <h3 className={"my-1 ml-4 text-[#303C62] font-medium"}>Студии</h3>
        <h3 className={"my-1 ml-4 text-[#303C62] font-medium"}>
          1-комнатные квартиры
        </h3>
        <h3 className={"my-1 ml-4 text-[#303C62] font-medium"}>
          2-комнатные квартиры
        </h3>
        <h3 className={"my-1 ml-4 text-[#303C62] font-medium"}>
          3-комнатные квартиры
        </h3>
        <h3 className={"my-1 ml-4 text-[#303C62] font-medium"}>
          4-комнатные квартиры
        </h3>
      </section>
    </div>
  );
};

export default ServicesItem;
