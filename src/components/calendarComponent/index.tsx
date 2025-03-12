'use client';

import { colors } from "@/styles/colors";
import { Cloudy, CornerLeftDown, CornerRightDown, Droplet, Thermometer } from "lucide-react";
import LottieAnimation from "../animations/animationLottie";

import walkingPlant from "@/assets/Animations/walkingPlant.json";
import teapot from "@/assets/Animations/robot.json";
import { CalendarDatePick } from "../ui/calendar";


export default function CalendarComponent() {

    return (
        <div className="flex flex-col justify-center items-center gap-12 md:gap-12 lg:gap-16 xl:gap-16 2xl:gap-24">
            <div className="flex justify-center items-center md:ml-20 md:gap-20 lg:ml-16 lg:gap-28 xl:ml-10 xl:gap-60 2xl:ml-28 2xl:gap-80">
                <div className="flex justify-center items-center w-48 gap-2 md:w-48 md:gap-2 lg:w-56 lg:gap-8 xl:w-48 xl:gap-2 2xl:w-48 2xl:gap-2">
                    <h5 className="font-poppins font-light text-center tracking-wide text-Gray_Jiquiri md:text-lg text-base lg:text-lg xl:text-lg 2xl:text-lg">Busque uma data <span className="font-medium tracking-wide font-poppins">Específica</span></h5>
                    <CornerRightDown className="size-8" color={colors.Gray_Jiquiri} />
                </div>
                <div className="flex max-md:hidden visible justify-center  items-center md:w-72 md:gap-8 lg:w-72 lg:gap-8 xl:w-60 xl:gap-2 2xl:w-80 2xl:gap-2">
                    <CornerLeftDown className="size-8" color={colors.Gray_Jiquiri} />
                    <h5 className="font-poppins font-light text-center tracking-wide text-Gray_Jiquiri md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Veja como estava os dados no <span className="font-medium tracking-wide font-poppins">passado.</span></h5>
                </div>
            </div>

            <div className="flex justify-center items-center gap-36 md:gap-24 2xl:gap-40">
                <LottieAnimation
                    animationData={walkingPlant}
                    className="visible max-md:hidden md:size-40 lg:size-40 xl:size-48 2xl:size-60"
                    autoPlay
                    loop
                />

                <CalendarDatePick

                />

                <LottieAnimation
                    animationData={teapot}
                    className="visible max-md:hidden md:size-40 lg:size-40 xl:size-48 2xl:size-60"
                    autoPlay
                    loop
                />
            </div>

            <div className="flex flex-row max-md:flex-col justify-center items-center gap-8 md:gap-20 lg:gap-40 xl:gap-40 2xl:gap-48">
                <div className="flex justify-center items-center gap-8 md:gap-20">
                    <div className="flex flex-col justify-center text-center items-center w-40 gap-4 md:w-40 md:gap-4 lg:w-36 lg:gap-4 xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                        <h2 className="font-catilde font-light text-Gray_Jiquiri text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">Umidade Relativa do solo</h2>
                        <div className="flex justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
                            <span className="font-poppins text-Light_Green_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">38%</span>
                            <Droplet className="size-5 md:size-6 lg:size-4 xl:size-5 2xl:size-5" color={colors.Light_Green_Jiquiri} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center text-center items-center w-40 gap-4 md:w-40 md:gap-4 lg:w-36 lg:gap-4 xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                        <h2 className="font-catilde font-light text-Gray_Jiquiri text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">Temperatura média do Dia</h2>
                        <div className="flex justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
                            <span className="font-poppins text-Orange_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">36 ºC</span>
                            <Thermometer className="size-5 md:size-6 lg:size-4 xl:size-5 2xl:size-5" color={colors.Orange_Jiquiri} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center text-center items-center w-40 gap-4 md:w-40 md:gap-4 lg:w-36 lg:gap-4 xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                    <h2 className="font-catilde font-light text-Gray_Jiquiri text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">Umidade Relativa do AR</h2>
                    <div className="flex justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
                        <span className="font-poppins text-Light_Green_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">32%</span>
                        <Cloudy className="size-5 md:size-6 lg:size-4 xl:size-5 2xl:size-5" color={colors.Light_Green_Jiquiri} />
                    </div>
                </div>
            </div>
        </div>
    )
}