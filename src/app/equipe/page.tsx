
import DefaultFooter from "@/components/generalComponents/defaultFooter";
import { VerticalDividerDashed } from "@/components/generalComponents/divider";
import EquipeMain from "@/components/equipePage/equipeMain";
import Header from "@/components/generalComponents/header";



export default function EquipePage() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center">
                <Header />

                <EquipeMain />

                <DefaultFooter />

                <div className="absolute top-[50%] left-[3.5%] md:top-[35%] md:left-[3.5%] lg:top-[35%] lg:left-[3.5%] xl:top-[35%] xl:left-[3.5%] 2xl:top-[35%] 2xl:left-[3.5%]">
                    <VerticalDividerDashed />
                </div>
            </main>
        </div>
    )
}