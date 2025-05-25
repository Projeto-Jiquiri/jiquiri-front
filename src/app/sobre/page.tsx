import Header from "@/components/generalComponents/header";
import DefaultFooter from "@/components/generalComponents/defaultFooter";
import Techs from "@/components/equipePage/techs";
import AboutMain from "@/components/aboutPage/aboutMain";


export default function SobrePage() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center gap-8 md:gap-8 lg:gap-12 xl:gap-14 2xl:gap-16">
                <Header/>

                <AboutMain/>

                <Techs/>

                <DefaultFooter/>

            </main>
        </div>
    )
}