import React, { FC } from "react";
import ServicesItem from "@/components/services/services-item/ServicesItem";
import snyatphoto from "@/assets/images/snyat_photo.jpg";

const Services: FC = () => {
  return (
    <div className={"flex justify-between"}>
      <ServicesItem serviceName={"СНЯТЬ"} image={snyatphoto} />
      <ServicesItem serviceName={"СДАТЬ"} image={snyatphoto} />
      <ServicesItem serviceName={"ПРОДАТЬ"} image={snyatphoto} />
      <ServicesItem serviceName={"КУПИТЬ"} image={snyatphoto} />
    </div>
  );
};

export default Services;
