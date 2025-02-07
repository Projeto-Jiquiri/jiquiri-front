'use client';

import Image from "next/image";
import dynamic from "next/dynamic";

import title from "@/assets/SVG/Title.svg";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import walkingPlant from "@/assets/Animations/walkingPlant.json";
import overgrowthBigPlant from "@/assets/Animations/overgrowthPlantBig.json";
import overgrowthSmallPlant from "@/assets/Animations/overgrowthPlantSmall.json";

export default function TitleHome() {
    return (
        <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center 2xl:mt-40">
                    <Image
                        alt="title"
                        src={title}
                        className="2xl:size-[100%] select-none z-0"
                        draggable={false}
                        priority
                    />
                </div>
            </div>

            <Lottie
                animationData={walkingPlant}
                autoPlay
                loop
                className="absolute 2xl:left-[10%] 2xl:top-[37%]  2xl:w-[25%] 2xl:h-[25%] z-10"
            />

            <Lottie
                animationData={overgrowthBigPlant}
                autoPlay
                loop={false}
                className="absolute 2xl:right-[12%] 2xl:top-[31%] 2xl:w-[25%] 2xl:h-[25%] z-10"
            />

            <Lottie
                animationData={overgrowthBigPlant}
                autoPlay
                loop={false}
                className="absolute 2xl:left-[30.5%] 2xl:top-[10.6%] 2xl:w-[14%] 2xl:h-[14%] z-10"
            />

            <Lottie
                animationData={overgrowthSmallPlant}
                autoPlay
                loop={false}
                className="absolute 2xl:right-[30.7%] 2xl:top-[24.4%] 2xl:w-[10%] 2xl:h-[10%] z-10"
            />
        </div>
    );
}