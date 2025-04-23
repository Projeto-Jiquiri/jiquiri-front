'use client'
import Image from "next/image";

import Header from "@/components/generalComponents/header";

import horizontalDividerDashed from "@/assets/SVG/DividerHorizontalDashedGray.svg";

import CalendarComponent from "@/components/generalComponents/calendarComponent";
import DefaultFooter from "@/components/generalComponents/defaultFooter";
import { VerticalDividerDashed } from "@/components/generalComponents/divider";
import ChartsComponent from "@/components/relatoriosPage/chartsComponent";


export default function Relatorios() {

    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-16">
                <Header />

                <ChartsComponent />

                <div className="flex justify-center items-center 2xl:w-screen ">
                    <Image
                        src={horizontalDividerDashed}
                        alt="horizontal divider"
                        className="w-[60%] h-2 md:w-[50%] md:h-2 lg:w-[40%] lg:h-2 xl:w-[50%] xl:h-2 2xl:w-[50%] 2xl:h-1 select-none"
                        draggable={false}

                    />
                </div>

                <div>
                    <CalendarComponent />
                </div>


                <div className="flex justify-center items-center w-screen ">
                    <Image
                        src={horizontalDividerDashed}
                        alt="horizontal divider"
                        className="w-[60%] h-2 lg:w-[40%] lg:h-2 xl:w-[40%] xl:h-2 2xl:w-[30%] 2xl:h-1 select-none"
                        draggable={false}

                    />
                </div>


                <DefaultFooter />

                <div className="absolute top-[60%] right-[2%] md:top-[60%] md:right-[2%] lg:top-[77%] lg:right-[3.5%] xl:top-[55%] xl:right-[3.5%] 2xl:top-[55%] 2xl:right-[3.5%]">
                    <VerticalDividerDashed />
                </div>

            </main>
        </div>
    )
}