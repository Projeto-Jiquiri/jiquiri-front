'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimation from "@/components/animations/animationLottie";

import GreenFabricAnimation from "@/assets/Animations/greenFabric.json";
import ProfYomara from "@/assets/PNG/Prof_yomara.png";
import ProfTiago from "@/assets/PNG/prof_Tiago.png";
import { VerticalDividerDashed } from "@/components/generalComponents/divider";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMain() {

    const aboutTitleRef = useRef<HTMLHeadingElement>(null);
    const greetingBannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: "top 80%",
                end: "bottom 20%",
            },
        });
        tl.fromTo(
            aboutTitleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: .8, ease: "power2.out" },
        ).fromTo(
            greetingBannerRef.current,
            { opacity: 0, x: -500 },
            { opacity: 1, x: 0, duration: .9, ease: "power2.out" },
        );

    }, []);

    return (
        <>
            <div ref={aboutTitleRef} className="flex flex-col justify-center items-center gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4">
                <div ref={aboutTitleRef} className="flex flex-col justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-4">
                    <h1 className="font-catilde text-Black_Jiquiri text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl">Sobre o Projeto</h1>
                    <p className="font-poppins font-light text-center text-Gray_Jiquiri text-lg w-64 md:text-xl md:w-72 lg:text-lg lg:w-72 xl:text-xl xl:w-72 2xl:text-xl 2xl:w-80 ">Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div >
                    <LottieAnimation
                        animationData={GreenFabricAnimation}
                        loop
                        autoPlay
                        className="w-[80vw] md:w-[48vw] lg:w-[38vw] xl:w-[35vw] 2xl:w-[33vw] h-auto"
                    />
                </div>

                <div className="flex flex-col justify-center items-center w-[80%] md:w-[60%] lg:w-[40%] xl:w-[40%] 2xl:w-[35%]">
                    <p className="font-poppins font-light text-center text-black text-base md:text-xl lg:text-base xl:text-lg 2xl:text-lg">Lorem ipsum dolor sit amet consectetur. Suscipit dictum eu suspendisse cras tellus lectus urna cras. Lectus nunc convallis dictum eget porta platea turpis tempor dignissim. Facilisi faucibus donec enim orci. Tempus aliquam tincidunt non eros massa pharetra. Neque metus et nisl ac eu odio.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur. Suscipit dictum eu suspendisse cras tellus lectus urna cras. Lectus nunc convallis dictum eget porta platea turpis tempor dignissim. Facilisi faucibus donec enim orci. Tempus aliquam tincidunt non eros massa pharetra. Neque metus et nisl ac eu odio.
                    </p>

                </div>
            </div>
            <div className="absolute top-[25%] right-[3%] md:top-[30%] md:right-[3.5%] lg:top-[30%] lg:right-[3.5%] xl:top-[35%] xl:right-[3.5%] 2xl:top-[55%] 2xl:right-[3.5%]">
                <VerticalDividerDashed />
            </div>

            <div ref={greetingBannerRef} className="flex flex-col w-screen justify-center items-center shadow-sm bg-Dark_Green_Jiquiri py-2 gap-8 md:pt-4 md:pb-4 md:gap-6 lg:pt-6 lg:pb-6 lg:gap-8 xl:pt-6 xl:pb-6 xl:gap-8 2xl:pt-6 2xl:pb-8 2xl:gap-8">
                <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-2 xl:gap-2 2xl:gap-2">
                    <h1 className="font-catilde text-White_Jiquiri text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Agradecimentos</h1>
                    <p className="text-White_Jiquiri font-poppins text-center font-light text-sm w-64 md:text-lg md:w-64 lg:text-base lg:w-64 xl:text-lg xl:w-72 2xl:text-xl 2xl:w-80">Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="flex justify-center items-center gap-16 md:gap-32 lg:gap-36 xl:gap-40 2xl:gap-48">
                    <div className="flex flex-col justify-center items-center gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4">
                        <h2 className="font-poppins font-light text-White_Jiquiri text-base md:text-xl lg:text-lg xl:text-lg 2xl:text-xl">Profª. Yomara</h2>
                        <Image
                            src={ProfYomara}
                            alt="Professora Yomara"
                            className="w-32 md:w-40 lg:w-44 xl:w-48 2xl:w-48 h-auto"
                        />
                        <Link href="https://" target="_blank" className="text-White_Jiquiri font-poppins font-light text-sm md:text-base lg:text-sm xl:text-sm 2xl:text-sm p-2 hover-card">@YomaraExemplo</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4">
                        <h2 className="font-poppins font-light text-White_Jiquiri text-base md:text-xl lg:text-lg xl:text-lg 2xl:text-xl">Prof. Thiago</h2>
                        <Image
                            src={ProfTiago}
                            alt="Professor Tiago"
                            className="w-32 md:w-40 lg:w-44 xl:w-48 2xl:w-48 h-auto"
                        />
                        <Link href="https://" target="_blank" className="text-White_Jiquiri font-poppins font-light text-sm md:text-base lg:text-sm xl:text-sm 2xl:text-sm p-2 hover-card">@ThiagoExemplo</Link>
                    </div>
                </div>
            </div>
        </>
    )
}