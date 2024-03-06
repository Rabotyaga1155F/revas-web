import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import header from "@/assets/images/header.jpg";
import Services from "@/components/services/Services";
import Puzzle from "@/components/puzzle/Puzzle";
import Map from "@/components/map/Map";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <div className={"mx-80"}>
      <Header />
      <Image
        className={"w-full h-[210px] mt-3"}
        src={header}
        alt={"DownHeader"}
      />
      <main>
        <Services />
        <Puzzle />
        <Map />
        <Form />
      </main>
      <Footer />
    </div>
  );
}
