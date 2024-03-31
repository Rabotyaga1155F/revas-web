import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import header from "@/assets/images/header.jpg";
import Services from "@/components/services/Services";
import Puzzle from "@/components/puzzle/Puzzle";
import Map from "@/components/map/Map";
import Form from "@/components/form/Form";
import type { Metadata } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <div className={"wrapper"}>
      <Head>
        <title>Агентство недвижимости РЕВАС</title>
        <meta
          name="description"
          content="Надежное агентство РЕВАС поможет вам найти идеальное жилье. Широкий выбор квартир, домов и коммерческой недвижимости. Звоните для консультации!"
        />
      </Head>
      <div
        className={
          "  xl:mx-10 2xl:mx-32 3xl:mx-[300px] 4xl:mx-[400px] 5xl:mx-[500px]  bmob:mx-6"
        }
      >
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
      </div>
      <Footer />
    </div>
  );
}
