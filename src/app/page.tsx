import Image from "next/image";

import Header from "@/components/header";
import TitleHome from "@/components/titleHome";

import Hero from "@/assets/PNG/Hero.png";
import { VerticalDividerDashed } from "@/components/divider";
import HomeBanner from "@/components/homeBanner";
import DefaultFooter from "@/components/defaultFooter";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center overflow-hidden">
      <main className="flex flex-col justify-center items-center">
        <Header />

        <TitleHome />

        <div className="relative flex justify-center items-center xl:my-14 2xl:my-16 w-full">
          <div className="absolute xl:left-[3%] 2xl:left-[3.5%]">
            <VerticalDividerDashed />
          </div>
          <Image
            src={Hero}
            alt="Hero"
            priority
            className="xl:w-[50%] xl:h-[50%] 2xl:w-[45%] 2xl:h-[45%] select-none"
            draggable={false}
          />
        </div>

        <HomeBanner />

        <DefaultFooter />
      </main>
    </div>
  );
}