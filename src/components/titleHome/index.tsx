'use client';

import Image from "next/image";
import dynamic from "next/dynamic";

import title from "@/assets/SVG/Title.svg";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import walkingPlant from "@/assets/Animations/walkingPlant.json";
import overgrowthBigPlant from "@/assets/Animations/overgrowthPlantBig.json";
import { useEffect, useState } from "react";


export default function TitleHome() {
    const [dpr, setDpr] = useState(() => window.devicePixelRatio || 1);

    useEffect(() => {
        const updateDpr = () => {
            setDpr(window.devicePixelRatio);
        };

        window.addEventListener("resize", updateDpr);
        return () => window.removeEventListener("resize", updateDpr);
    }, []);


    return (
        <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center 2xl:mt-20">
                    <Image
                        alt="title"
                        src={title}
                        className="2xl:h-[45vh] 2xl:w-[65vw] select-none z-0"
                        draggable={false}
                        priority
                    />
                </div>
            </div>

            <Lottie
                animationData={walkingPlant}
                autoPlay
                loop
                className={`absolute z-10 
                    ${dpr > 1 && dpr <= 1.5 ? "2xl:left-[11vw] 2xl:top-[45vh] 2xl:w-[24vw] 2xl:h-[24vh]" : "2xl:left-[10vw] 2xl:top-[40vh] 2xl:w-[25vw] 2xl:h-[25vh]"}`}
            />

            <Lottie
                animationData={overgrowthBigPlant}
                autoPlay
                loop={false}
                className={`absolute z-10 ${dpr > 1 && dpr <= 1.5 ? "right-[13vw] 2xl:top-[38vh] 2xl:w-[24vw] 2xl:h-[24vh]" : "right-[12vw] 2xl:top-[35vh] 2xl:w-[25vw] 2xl:h-[25vh] "}`}
            />


        </div>
    );
}