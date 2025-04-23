import Header from "@/components/generalComponents/header";
import TitleHome from "@/components/homepage/titleHome";

import HomeBanner from "@/components/homepage/homeBanner";
import DefaultFooter from "@/components/generalComponents/defaultFooter";
import ImageHero from "@/components/homepage/homeBanner/imageHero";



export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center overflow-hidden">
      <main className="flex flex-col justify-center items-center">
        <Header />

        <TitleHome />

        <ImageHero />

        <HomeBanner />

        <DefaultFooter />
      </main>
    </div>
  );
}