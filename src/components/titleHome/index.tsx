'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import title from "@/assets/SVG/Title.svg";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import walkingPlant from "@/assets/Animations/walkingPlant.json";
import vasoPlanta from "@/assets/Animations/plantaVasoPendurado.json";

import { useDprStore } from "@/context/generalStore";


export default function TitleHome() {
    const { dpr, setDpr } = useDprStore();

    const [walkingAnimationPlay, setwalkingAnimationPlay] = useState(true);
    const [vasoPlantaAnimationPlay, setVasoPlantaAnimationPlay] = useState(true);

    useEffect(() => {
        const updateDpr = () => {
            setDpr(window.devicePixelRatio);
        };

        window.addEventListener("resize", updateDpr);
        return () => window.removeEventListener("resize", updateDpr);
    }, [dpr, setDpr]);




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
                onClick={() => setwalkingAnimationPlay(!walkingAnimationPlay)}
                loop={walkingAnimationPlay}
                className={`absolute z-10 
                    ${dpr > 1 && dpr <= 1.5 ? "2xl:left-[16vw] 2xl:top-[45vh] 2xl:w-[14vw] 2xl:h-[24vh]" : "2xl:left-[15vw] 2xl:top-[40vh] 2xl:w-[15vw] 2xl:h-[25vh]"}`}
            />

            <Lottie
                animationData={vasoPlanta}
                autoPlay
                onClick={() => setVasoPlantaAnimationPlay(!vasoPlantaAnimationPlay)}
                loop={vasoPlantaAnimationPlay}
                className={`absolute z-10 ${dpr > 1 && dpr <= 1.5 ? "right-[16vw] 2xl:top-[53vh] 2xl:w-[14vw] 2xl:h-[24vh]" : "right-[15vw] 2xl:top-[50vh] 2xl:w-[15vw] 2xl:h-[25vh] "}`}
            />


        </div>
    );
}