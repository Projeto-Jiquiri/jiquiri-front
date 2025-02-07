
import Image from "next/image";

import Header from "@/components/header";
import TitleHome from "@/components/titleHome";

import Hero from "@/assets/PNG/Hero.png";
import { VerticalDividerDashed } from "@/components/divider";
import HomeBanner from "@/components/homeBanner";


export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <main className="flex flex-col justify-center items-center">
        <Header />

        <TitleHome />

        <div className="flex justify-center items-center 2xl:my-16">
          <div className="absolute 2xl:left-[3.5%]">
            <VerticalDividerDashed />
          </div>
          <Image
            src={Hero}
            alt="Hero"
            priority
            className="2xl:w-[60%] 2xl:h-[60%] select-none"
            draggable={false}

          />
        </div>

        <HomeBanner />

      </main>
    </div>
  );
}
