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
                <div className="flex flex-col justify-center items-center mt-0 md:mt-4 lg:mt-12 xl:mt-14 2xl:mt-20">
                    <Image
                        alt="title"
                        src={title}
                        className="h-[20vh] w-[40vh]  md:h-[20vh] md:w-[80vw]  lg:h-[45vh] lg:w-[75vw]  xl:h-[50vh] xl:w-[70vw]  2xl:h-[45vh] 2xl:w-[65vw] select-none z-0"
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
                    ${dpr > 1 && dpr <= 1.5 ?
                        "top-[22vh] left-[0vw] h-[13vh] w-[33vw]  md:top-[18vh] md:left-[-4vw] md:h-[15vh] md:w-[35vw] lg:top-[40vh] lg:left-[10vw] lg:w-[15vw] lg:h-[25vh]  xl:top-[45vh] xl:left-[10vw] xl:w-[14vw] xl:h-[24vh]  2xl:left-[16vw] 2xl:top-[45vh] 2xl:w-[14vw] 2xl:h-[24vh]"

                        :

                        "top-[22vh] left-[0vw] h-[13vh] w-[33vw]  md:top-[18vh] md:left-[-4vw] md:h-[15vh] md:w-[35vw]  lg:left-[8vw] lg:top-[32vh] lg:h-[25vh] lg:w-[15vw]  xl:left-[10vw] xl:top-[40vh] xl:w-[15vw] xl:h-[25vh]  2xl:w-[15vw] 2xl:left-[15vw] 2xl:top-[40vh] 2xl:h-[25vh]"
                    }`}
            />

            <Lottie
                animationData={vasoPlanta}
                autoPlay
                onClick={() => setVasoPlantaAnimationPlay(!vasoPlantaAnimationPlay)}
                loop={vasoPlantaAnimationPlay}
                className={`absolute z-10 ${dpr > 1 && dpr <= 1.5 ?
                    "right-[3vw] top-[22vh] h-[10vh] w-[30vw]  md:right-[3vw] md:top-[22vh] md:h-[13vh] md:w-[33vw]  lg:right-[10vw] lg:top-[48vh] lg:w-[16vw] lg:h-[25vh]  xl:top-[59vh] xl:w-[14vw] xl:h-[24vh]  2xl:top-[53vh] 2xl:w-[14vw] 2xl:h-[24vh]"

                    :

                    "right-[3vw] top-[22vh] h-[10vh] w-[30vw]  md:right-[3vw] md:top-[22vh] md:h-[13vh] md:w-[33vw]  lg:right-[7vw] lg:top-[42vh] lg:w-[16vw] lg:h-[25vh]  xl:right-[10vw] xl:top-[50vh] xl:h-[25vh] xl:w-[15vw]  2xl:right-[14vw] 2xl:top-[50vh] 2xl:w-[15vw] 2xl:h-[25vh]"
                    }`}
            />

        </div>
    );
}