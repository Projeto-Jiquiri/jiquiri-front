'use client'
import { useEffect } from "react";
import Image from "next/image";

import { AreaChartComponent } from "@/components/charts/areaChart";
import { RadarChartComponent } from "@/components/charts/radarChart";
import Header from "@/components/header";

import divisorVertical from "@/assets/SVG/dividerVerticalGray.svg";
import LottieAnimation from "@/components/animations/animationLottie";
import plantGrowth from "@/assets/Animations/overgrowthPlantSmall.json";
import horizontalDividerDashed from "@/assets/SVG/DividerHorizontalDashedGray.svg";
import { useDprStore } from "@/context/generalStore";
import { BarChartComponent } from "@/components/charts/barChart";
import { MiniBarComponent } from "@/components/charts/miniBarChart";
import CalendarComponent from "@/components/calendarComponent";
import DefaultFooter from "@/components/defaultFooter";
import { VerticalDividerDashed } from "@/components/divider";


export default function Relatorios() {
    const { dpr, setDpr } = useDprStore()

    useEffect(() => {
        const updateDpr = () => {
            setDpr(window.devicePixelRatio);
        };

        window.addEventListener("resize", updateDpr);
        return () => window.removeEventListener("resize", updateDpr);
    }, [dpr, setDpr]);


    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center xl:gap-16 2xl:gap-16">
                <Header />

                <div className="flex flex-col justify-center items-center xl:gap-16 2xl:gap-24">
                    <div className="flex flex-col justify-center items-center xl:gap-2 2xl:gap-4">
                        <h1 className="font-catilde text-Black_Jiquiri xl:text-6xl 2xl:text-7xl">Relatórios</h1>
                        <p className="font-poppins font-light text-center text-Gray_Jiquiri xl:text-lg xl:w-80 2xl:text-xl 2xl:w-80 ">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center w-screen xl:px-32 xl:gap-14 2xl:px-40 2xl:gap-16">
                        <div className="flex w-full justify-start items-start xl:gap-4 2xl:gap-6">
                            <AreaChartComponent />
                            <div>
                                <Image
                                    alt="Divisor Vertical"
                                    src={divisorVertical}
                                    className="xl:w-2 xl:h-[24vw] 2xl:w-3 2xl:h-[15vw] opacity-80"
                                />
                            </div>
                            <RadarChartComponent />
                            <div>
                                <Image
                                    alt="Divisor Vertical"
                                    src={divisorVertical}
                                    className="xl:w-2 xl:h-[24vw] 2xl:w-3 2xl:h-[15vw] opacity-80"
                                />
                            </div>
                            <MiniBarComponent />
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
                        className="xl:w-[50%] xl:h-2 2xl:w-[50%] 2xl:h-1 select-none"
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
                        className="xl:w-[40%] xl:h-2 2xl:w-[20%] 2xl:h-1 select-none"
                        draggable={false}

                    />
                </div>


                <DefaultFooter />

                <LottieAnimation
                    animationData={plantGrowth}
                    autoPlay
                    loop={false}
                    className={`absolute z-10 ${dpr > 1 && dpr <= 1.5 ? "right-[9vw] xl:top-[28vh] xl:w-[10vw] xl:right-[9vw] 2xl:top-[34vh] 2xl:w-[13vw] 2xl:h-[18vh]" : "right-[13vw] xl:top-[21.2vh] xl:w-[10vw] xl:h-[14vh] 2xl:top-[25vh] 2xl:w-[10vw] 2xl:h-[15vh] "}`}
                />

                <div className="absolute xl:top-[55%] xl:right-[3.5%] 2xl:top-[55%] 2xl:right-[3.5%]">
                    <VerticalDividerDashed />
                </div>

            </main>
        </div>
    )
}