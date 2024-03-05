import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import header from "@/assets/images/header.jpg";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div className={"mx-60"}>
      <Header />
      <Image className={"w-full h-[210px]"} src={header} alt={"DownHeader"} />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
