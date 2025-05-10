'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { colors } from "@/styles/colors";
import { Cloudy, CornerLeftDown, CornerRightDown, Droplet, Thermometer } from "lucide-react";
import LottieAnimation from "../../animations/animationLottie";

import walkingPlant from "@/assets/Animations/walkingPlant.json";
import teapot from "@/assets/Animations/robot.json";
import { CalendarDatePick } from "../../ui/calendar";
import { useWeeklyAverages } from "@/services/API/adapters/useWeekAverages";
import { Skeleton } from "@/components/ui/skeleton";

gsap.registerPlugin(ScrollTrigger);

export default function CalendarComponent() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const { data, isLoading } = useWeeklyAverages({ specificDate: selectedDate ? selectedDate.toLocaleDateString('pt-BR') : undefined })

    const rightTextRef = useRef<HTMLDivElement>(null);
    const leftTextRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("Dados:", data)
    }, [data])

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: calendarRef.current,
                start: "top 120%",
                end: "top 30%",
            },
        });
        tl.fromTo(
            leftTextRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: .2 }
        ).fromTo(
            rightTextRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: .3 },
        ).fromTo(
            calendarRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: .4 },
        ).fromTo(
            resultRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: .5 },
        );
    }, [])


    const handleDateChange = (date: Date | undefined) => {
        if (date) {
            setSelectedDate(date)
        } else {
            setSelectedDate(null)
        }
    }

    const selectedData = data ? data[0] : null;

    return (
        <div className="flex flex-col justify-center items-center gap-12 md:gap-12 lg:gap-16 xl:gap-16 2xl:gap-24">
            <div className="flex justify-center items-center md:ml-20 md:gap-20 lg:ml-16 lg:gap-28 xl:ml-10 xl:gap-60 2xl:ml-28 2xl:gap-80">
                <div ref={leftTextRef} className="flex justify-center items-center w-48 gap-2 md:w-48 md:gap-2 lg:w-56 lg:gap-8 xl:w-48 xl:gap-2 2xl:w-48 2xl:gap-2">
                    <h5 className="font-poppins font-light text-center tracking-wide text-Gray_Jiquiri md:text-lg text-base lg:text-lg xl:text-lg 2xl:text-lg">Busque uma data <span className="font-medium tracking-wide font-poppins">Específica</span></h5>
                    <CornerRightDown className="size-8" color={colors.Gray_Jiquiri} />
                </div>
                <div ref={rightTextRef} className="flex max-md:hidden visible justify-center  items-center md:w-72 md:gap-8 lg:w-72 lg:gap-8 xl:w-60 xl:gap-2 2xl:w-80 2xl:gap-2">
                    <CornerLeftDown className="size-8" color={colors.Gray_Jiquiri} />
                    <h5 className="font-poppins font-light text-center tracking-wide text-Gray_Jiquiri md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Veja como estava os dados no <span className="font-medium tracking-wide font-poppins">passado.</span></h5>
                </div>
            </div>

            <div ref={calendarRef} className="flex justify-center items-center gap-36 md:gap-24 2xl:gap-40">
                <LottieAnimation
                    animationData={walkingPlant}
                    className="visible max-md:hidden md:size-40 lg:size-40 xl:size-48 2xl:size-60"
                    autoPlay
                    loop
                />

                <CalendarDatePick
                    onDateChange={handleDateChange}
                />

                <LottieAnimation
                    animationData={teapot}
                    className="visible max-md:hidden md:size-40 lg:size-40 xl:size-48 2xl:size-60"
                    autoPlay
                    loop
                />
            </div>

            <div ref={resultRef} className="flex flex-row max-md:flex-col justify-center items-center gap-8 md:gap-20 lg:gap-40 xl:gap-40 2xl:gap-56">
                <div className="flex justify-center items-center gap-8 md:gap-20">
                    <div className="flex flex-col justify-center text-center items-center w-40 gap-4 md:w-40 md:gap-4 lg:w-36 lg:gap-4 xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                        <h2 className="font-catilde font-light text-Gray_Jiquiri text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">Umidade Relativa do solo</h2>
                        <div className="flex justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
                            {isLoading ? (
                                <Skeleton className="w-12 h-6 rounded-md bg-Gray_Jiquiri" />
                            ) : selectedData?.avgSoilHumidity != null ? (
                                <span className="font-poppins text-Light_Green_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">{`${selectedData.avgSoilHumidity}%`}</span>
                            ) : (
                                <span className="font-poppins text-Light_Green_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">--</span>
                            )}
                            <Droplet className="size-5 md:size-6 lg:size-4 xl:size-5 2xl:size-5" color={colors.Light_Green_Jiquiri} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center text-center items-center w-40 gap-4 md:w-40 md:gap-4 lg:w-36 lg:gap-4 xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4">
                        <h2 className="font-catilde font-light text-Gray_Jiquiri text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">Temperatura média do Dia</h2>
                        <div className="flex justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
                            {isLoading ? (
                                <Skeleton className="w-14 h-6 rounded-md bg-Gray_Jiquiri" />
                            ) : selectedData?.avgTemperature != null ? (
                                <span className="font-poppins text-Orange_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">{`${selectedData.avgTemperature} ºC`}</span>
                            ) : (
                                <span className="font-poppins text-Orange_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">--</span>
                            )}
                            <Thermometer className="size-5 md:size-6 lg:size-4 xl:size-5 2xl:size-5" color={colors.Orange_Jiquiri} />
                        </div>
                    </div>
                </div>

                <div ref={resultRef} className="flex flex-col justify-center text-center items-center w-40 gap-4 md:w-40 md:gap-4 lg:w-36 lg:gap-4 xl:w-40 xl:gap-4 2xl:w-48 2xl:gap-4 lg:-ml-20 xl:-ml-24 2xl:-ml-32">
                    <h2 className="font-catilde font-light text-Gray_Jiquiri text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">Umidade Relativa do AR</h2>
                    <div className="flex justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
                        {isLoading ? (
                            <Skeleton className="w-12 h-6 rounded-md bg-Gray_Jiquiri" />
                        ) : selectedData?.avgAirHumidity != null ? (
                            <span className="font-poppins text-Light_Green_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">{`${selectedData.avgAirHumidity}%`}</span>
                        ) : (
                            <span className="font-poppins text-Light_Green_Jiquiri font-semibold text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">--</span>
                        )}
                        <Cloudy className="size-5 md:size-6 lg:size-4 xl:size-5 2xl:size-5" color={colors.Light_Green_Jiquiri} />
                    </div>
                </div>
            </div>
        </div>
    );
}
