import React, { FC } from "react";
import ServicesItem from "@/components/services/services-item/ServicesItem";
import snyatphoto from "@/assets/images/snyat_photo.jpg";
import sdatphoto from "@/assets/images/sdat_photo.jpg";
import prodatphoto from "@/assets/images/prodat_photo.jpg";
import buyphoto from "@/assets/images/buy_photo.jpg";

const Services: FC = () => {
  return (
    <div className={"flex md:flex-row smob:flex-col justify-between mt-14"}>
      <ServicesItem serviceName={"СНЯТЬ"} image={snyatphoto} />
      <ServicesItem serviceName={"СДАТЬ"} image={sdatphoto} />
      <ServicesItem serviceName={"ПРОДАТЬ"} image={prodatphoto} />
      <ServicesItem serviceName={"КУПИТЬ"} image={buyphoto} />
    </div>
  );
};

export default Services;
