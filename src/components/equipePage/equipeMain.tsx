'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import horizontalDividerDashed from "@/assets/SVG/DividerHorizontalDashedGray.svg";
import equipeImage from '@/assets/PNG/equipe.png';
import Techs from "./techs";


gsap.registerPlugin(ScrollTrigger);

export default function EquipeMain() {
    const equipeRef = useRef<HTMLDivElement>(null);
    const imageEquipeRef = useRef<HTMLDivElement>(null);
    const techsTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: equipeRef.current,
                start: "top 80%",
                end: "bottom 20%",
                // scrub: true,
                // markers: false,
            },
        });
        tl.fromTo(
            equipeRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        ).fromTo(
            imageEquipeRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.5"
        ).fromTo(
            techsTextRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        )

    }, []);

    return (
        <div className="flex flex-1 flex-col justify-center items-center mt-4 gap-8 md:mt-8 md:gap-10 lg:mt-10 lg:gap-12 xl:mt-14 xl:gap-14 2xl:mt-16 2xl:gap-16">
            <div ref={equipeRef} className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
                <h1 className="font-catilde text-Black_Jiquiri text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Equipe</h1>

                <div className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-8">
                    <h3 className="font-poppins text-Black_Jiquiri text-center w-60 text-base md:w-72 md:text-xl lg:w-80 lg:text-lg xl:text-xl xl:w-96 2xl:text-2xl 2xl:w-96">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className="font-poppins text-Black_Jiquiri font-extralight text-center w-[65vw] text-base md:w-[55vw] md:text-lg lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                        Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                        <br />
                        <br />
                        Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                    </p>
                </div>
            </div>

            <div ref={imageEquipeRef}>
                <Image
                    alt="Equipe"
                    src={equipeImage}
                    className="w-[75vw] md:w-[65vw] lg:w-[45vw] xl:w-[40vw] 2xl:w-[38vw] h-auto"
                />
            </div>

            <div ref={techsTextRef} className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-8">
                <h3 className="font-catilde font-semibold text-center text-Black_Jiquiri w-60 text-xl md:w-72 md:text-2xl lg:w-72 lg:text-xl xl:w-80 xl:text-2xl 2xl:w-80 2xl:text-3xl">Tecnologias Utilizadas no Projeto</h3>
                <p className="font-poppins text-Black_Jiquiri font-extralight text-center w-[65vw] text-base md:w-[60vw] md:text-xl lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                    Porttitor tristique blandit proin commodo bibendum commodo integer
                </p>
            </div>

            <Techs />

            <div className="flex justify-center items-center w-screen ">
                <Image
                    src={horizontalDividerDashed}
                    alt="horizontal divider"
                    className="w-[60%] h-2 lg:w-[35%] lg:h-2 xl:w-[40%] xl:h-2 2xl:w-[30%] 2xl:h-1 select-none"
                    draggable={false}

                />
            </div>

        </div>
    )
}