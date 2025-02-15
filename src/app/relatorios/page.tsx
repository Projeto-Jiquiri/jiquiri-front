'use client'
import { useEffect } from "react";
import Image from "next/image";

import { AreaChartComponent } from "@/components/charts/areaChart";
import { RadarChartComponent } from "@/components/charts/radarChart";
import Header from "@/components/header";

import divisorVertical from "@/assets/SVG/dividerVerticalGray.svg";
import LottieAnimation from "@/components/animations/animationLottie";
import plantGrowth from "@/assets/Animations/overgrowthPlantSmall.json";
import { useDprStore } from "@/context/generalStore";
import { BarChartComponent } from "@/components/charts/barChart";
import { MiniBarComponent } from "@/components/charts/miniBarChart";


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
            <main className="flex flex-col justify-center items-center 2xl:gap-16">
                <Header />

                <div className="flex flex-col justify-center items-center 2xl:gap-24">
                    <div className="flex flex-col justify-center items-center 2xl:gap-4">
                        <h1 className="font-catilde text-Black_Jiquiri 2xl:text-7xl">Relatórios</h1>
                        <p className="font-poppins font-light text-center text-Gray_Jiquiri 2xl:text-xl 2xl:w-80 ">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center 2xl:gap-16">
                        <div className="flex w-screen justify-center items-center 2xl:gap-6">
                            <AreaChartComponent />
                            <div>
                                <Image
                                    alt="Divisor Vertical"
                                    src={divisorVertical}
                                    className="2xl:w-3 2xl:h-[15vw] opacity-80"
                                />
                            </div>
                            <RadarChartComponent />
                        </div>

                        <div className="flex w-screen justify-center items-center 2xl:gap-6">
                            <BarChartComponent />
                            <MiniBarComponent />
                        </div>
                    </div>


                </div>

                <LottieAnimation
                    animationData={plantGrowth}
                    autoPlay
                    loop={false}
                    className={`absolute z-10 ${dpr > 1 && dpr <= 1.5 ? "right-[9vw] 2xl:top-[36.6vh] 2xl:w-[13vw] 2xl:h-[18vh]" : "right-[13vw] 2xl:top-[26.8vh] 2xl:w-[10vw] 2xl:h-[15vh] "}`}
                />
            </main>
        </div>
    )
}