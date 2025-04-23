'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BarChartComponent } from "@/components/generalComponents/charts/barChart";
import { MiniBarComponent } from "@/components/generalComponents/charts/miniBarChart";
import { AreaChartComponent } from "@/components/generalComponents/charts/areaChart";
import { RadarChartComponent } from "@/components/generalComponents/charts/radarChart";
import divisorVertical from "@/assets/SVG/dividerVerticalGray.svg";

gsap.registerPlugin(ScrollTrigger);

export default function ChartsComponent() {

    const titleRef = useRef<HTMLHeadingElement>(null);
    const topChartsRef = useRef<HTMLDivElement>(null);
    const bottomChartsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: topChartsRef.current,
                start: "top 80%",
                end: "bottom 20%",
            },
        });
        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.5 }
        ).fromTo(
            topChartsRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: .6 },
        ).fromTo(
            bottomChartsRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: .7 },
        );
    }, []);

    return (
        <div className="flex flex-col justify-center  items-center gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-24">
            <div ref={titleRef} className="flex flex-col justify-center items-center gap-2 md-gap-4 lg:gap-2 xl:gap-2 2xl:gap-4">
                <h1 className="font-catilde text-Black_Jiquiri text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Relatórios</h1>
                <p className="font-poppins font-light text-center text-Gray_Jiquiri text-lg w-72 md:text-xl md:w-80 lg:text-lg lg:w-80 xl:text-lg xl:w-80 2xl:text-xl 2xl:w-80 ">Acompanhe os dados históricos do projeto Jiquiri.</p>
            </div>

            <div className="flex flex-col justify-center items-center w-screen xl:px-32 xl:gap-14 2xl:px-40 2xl:gap-16">
                <div ref={topChartsRef} className="flex flex-row w-full justify-start items-start max-xl:justify-center max-xl:items-center max-xl:flex-col lg:gap-4 xl:gap-4 2xl:gap-6">
                    <AreaChartComponent />
                    <div>
                        <Image
                            alt="Divisor Vertical"
                            src={divisorVertical}
                            className="max-xl:rotate-90 max-xl:-my-28 w-[2.5vw] h-[65vw] md:w-[3vw] md:h-[35vw] lg:w-3 lg:h-[20vw] xl:w-2 xl:h-[24vw] 2xl:w-[.7vw] 2xl:h-[15vw] opacity-80"
                        />
                    </div>

                    <div className="flex max-xl:w-screen flex-col lg:flex-row max-xl:justify-center max-xl:items-center gap-4 md:gap-6 lg:gap-8 xl:gap-4 2xl:gap-6 ">
                        <MiniBarComponent />
                        <div>
                            <Image
                                alt="Divisor Vertical"
                                src={divisorVertical}
                                className="visible max-xl:hidden xl:w-2 xl:h-[24vw] 2xl:w-3 2xl:h-[15vw] opacity-80"
                            />
                        </div>
                        <RadarChartComponent />
                    </div>
                    <div>
                        <Image
                            alt="Divisor Vertical"
                            src={divisorVertical}
                            className="visible max-xl:rotate-90 max-xl:-my-28 w-[2.5vw] h-[65vw] md:w-[3vw] md:h-[35vw] xl:hidden 2xl:hidden xl:w-2 xl:h-[24vw] 2xl:w-3 2xl:h-[15vw] opacity-80"
                        />
                    </div>
                </div>

                <div ref={bottomChartsRef} className="flex w-screen justify-center items-center">
                    <BarChartComponent />
                </div>
            </div>
        </div>
    )
}