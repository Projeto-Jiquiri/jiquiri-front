'use client';

import { useState } from "react";
import { colors } from "@/styles/colors";
import { Cloudy, CornerLeftDown, CornerRightDown, Droplet, Thermometer } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { ptBR } from "date-fns/locale"
import LottieAnimation from "../animations/animationLottie";

import walkingPlant from "@/assets/Animations/walkingPlant.json";
import teapot from "@/assets/Animations/robot.json";


export default function CalendarComponent() {
    const [date, setDate] = useState<Date | undefined>(new Date())


    return (
        <div className="flex flex-col justify-center items-center xl:gap-16 2xl:gap-24">
            <div className="flex justify-center items-center xl:ml-10 xl:gap-60 2xl:ml-28 2xl:gap-80">
                <div className="flex justify-center items-center xl:w-48 xl:gap-2 2xl:w-48 2xl:gap-2">
                    <h5 className="font-poppins font-light text-center tracking-wide text-Gray_Jiquiri xl:text-lg 2xl:text-lg">Busque uma data <span className="font-medium tracking-wide font-poppins">Específica</span></h5>
                    <CornerRightDown className="size-8" color={colors.Gray_Jiquiri} />
                </div>
                <div className="flex justify-center items-center xl:w-60 xl:gap-2 2xl:w-80 2xl:gap-2">
                    <CornerLeftDown className="size-8" color={colors.Gray_Jiquiri} />
                    <h5 className="font-poppins font-light text-center tracking-wide text-Gray_Jiquiri xl:text-lg 2xl:text-lg">Veja como estava os dados no <span className="font-medium tracking-wide font-poppins">passado.</span></h5>
                </div>
            </div>

            <div className="flex justify-center items-center gap-36 2xl:gap-40">
                <LottieAnimation
                    animationData={walkingPlant}
                    className="xl:size-48 2xl:size-60"
                    autoPlay
                    loop
                />

                <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={date}
                    onSelect={setDate}
                    className="rounded-xl border bg-black"
                />

                <LottieAnimation
                    animationData={teapot}
                    className="xl:size-48 2xl:size-60"
                    autoPlay
                    loop
                />
            </div>

            <div className="flex justify-center items-center xl:gap-40 2xl:gap-48">
                <div className="flex flex-col justify-center text-center items-center xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                    <h2 className="font-catilde font-light text-Gray_Jiquiri xl:text-xl 2xl:text-2xl">Umidade Relativa do solo</h2>
                    <div className="flex justify-center items-center xl:gap-2 2xl:gap-2">
                        <span className="font-poppins text-Light_Green_Jiquiri font-semibold xl:text-xl 2xl:text-2xl">38%</span>
                        <Droplet className="xl:size-5 2xl:size-5" color={colors.Light_Green_Jiquiri} />
                    </div>
                </div>

                <div className="flex flex-col justify-center text-center items-center xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                    <h2 className="font-catilde font-light text-Gray_Jiquiri xl:text-xl 2xl:text-2xl">Temperatura média do Dia</h2>
                    <div className="flex justify-center items-center xl:gap-2 2xl:gap-2">
                        <span className="font-poppins text-Orange_Jiquiri font-semibold xl:text-xl 2xl:text-2xl">36 ºC</span>
                        <Thermometer className="xl:size-5 2xl:size-5" color={colors.Orange_Jiquiri} />
                    </div>
                </div>

                <div className="flex flex-col justify-center text-center items-center xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                    <h2 className="font-catilde font-light text-Gray_Jiquiri xl:text-xl 2xl:text-2xl">Umidade Relativa do AR</h2>
                    <div className="flex justify-center items-center xl:gap-2 2xl:gap-2">
                        <span className="font-poppins text-Light_Green_Jiquiri font-semibold xl:text-xl 2xl:text-2xl">32%</span>
                        <Cloudy className="xl:size-5 2xl:size-5" color={colors.Light_Green_Jiquiri} />
                    </div>
                </div>
            </div>
        </div>
    )
}