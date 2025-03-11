import Image from "next/image";

import { AreaChartComponent } from "@/components/charts/areaChart";
import { RadarChartComponent } from "@/components/charts/radarChart";
import Header from "@/components/header";

import divisorVertical from "@/assets/SVG/dividerVerticalGray.svg";
import horizontalDividerDashed from "@/assets/SVG/DividerHorizontalDashedGray.svg";
import { BarChartComponent } from "@/components/charts/barChart";
import { MiniBarComponent } from "@/components/charts/miniBarChart";
import CalendarComponent from "@/components/calendarComponent";
import DefaultFooter from "@/components/defaultFooter";
import { VerticalDividerDashed } from "@/components/divider";


export default function Relatorios() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-16">
                <Header />

                <div className="flex flex-col justify-center items-center gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-24">
                    <div className="flex flex-col justify-center items-center gap-2 md-gap-4 lg:gap-2 xl:gap-2 2xl:gap-4">
                        <h1 className="font-catilde text-Black_Jiquiri text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Relatórios</h1>
                        <p className="font-poppins font-light text-center text-Gray_Jiquiri text-lg w-72 md:text-xl md:w-80 lg:text-lg lg:w-80 xl:text-lg xl:w-80 2xl:text-xl 2xl:w-80 ">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center w-screen xl:px-32 xl:gap-14 2xl:px-40 2xl:gap-16">
                        <div className="flex flex-row w-full justify-start items-start max-xl:justify-center max-xl:items-center max-xl:flex-col lg:gap-4 xl:gap-4 2xl:gap-6">
                            <AreaChartComponent />
                            <div>
                                <Image
                                    alt="Divisor Vertical"
                                    src={divisorVertical}
                                    className="max-xl:rotate-90 max-xl:-my-28 w-[2.5vw] h-[65vw] md:w-[3vw] md:h-[35vw] lg:w-3 lg:h-[20vw] xl:w-2 xl:h-[24vw] 2xl:w-[.7vw] 2xl:h-[15vw] opacity-80"
                                />
                            </div>

                            <div className="flex max-xl:w-screen flex-col lg:flex-row max-xl:justify-center max-xl:items-center gap-4 md:gap-6 lg:gap-8 xl:gap-4 2xl:gap-6 ">
                                <RadarChartComponent />
                                <div>
                                    <Image
                                        alt="Divisor Vertical"
                                        src={divisorVertical}
                                        className="visible max-xl:hidden xl:w-2 xl:h-[24vw] 2xl:w-3 2xl:h-[15vw] opacity-80"
                                    />
                                </div>
                                <MiniBarComponent />
                            </div>
                            <div>
                                <Image
                                    alt="Divisor Vertical"
                                    src={divisorVertical}
                                    className="visible max-xl:rotate-90 max-xl:-my-28 w-[2.5vw] h-[65vw] md:w-[3vw] md:h-[35vw] xl:hidden 2xl:hidden xl:w-2 xl:h-[24vw] 2xl:w-3 2xl:h-[15vw] opacity-80"
                                />
                            </div>
                        </div>

                        <div className="flex w-screen justify-center items-center">
                            <BarChartComponent />
                        </div>
                    </div>
                </div>

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