'use client'

import {useEffect, useRef} from "react";
import gsap from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import LottieAnimation from "@/components/animations/animationLottie";

import GreenFabricAnimation from "@/assets/Animations/greenFabric.json";
import {VerticalDividerDashed} from "@/components/generalComponents/divider";
import GreetingsComponent from "@/components/aboutPage/greetingsComponent";
import EquipeMain from "@/components/equipePage/equipeMain";

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
            {opacity: 0, y: -50},
            {opacity: 1, y: 0, duration: .8, ease: "power2.out"},
        ).fromTo(
            greetingBannerRef.current,
            {opacity: 0, x: -500},
            {opacity: 1, x: 0, duration: .9, ease: "power2.out"},
        );

    }, []);

    return (
        <>
            <div ref={aboutTitleRef}
                 className="flex flex-col justify-center items-center gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4">
                <div ref={aboutTitleRef}
                     className="flex flex-col justify-center items-center gap-2 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-4">
                    <h1 className="font-catilde text-Black_Jiquiri text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl">Sobre
                        o Projeto</h1>
                    <p className="font-poppins font-light text-center text-Gray_Jiquiri text-lg w-64 md:text-xl md:w-72 lg:text-lg lg:w-72 xl:text-xl xl:w-72 2xl:text-xl 2xl:w-80 ">Nossa
                        História 🌿 </p>
                </div>

                <div>
                    <LottieAnimation
                        animationData={GreenFabricAnimation}
                        loop
                        autoPlay
                        className="w-[80vw] md:w-[48vw] lg:w-[38vw] xl:w-[35vw] 2xl:w-[33vw] h-auto"
                    />
                </div>

                <div
                    className="flex flex-col justify-center items-center w-[80%] md:w-[60%] lg:w-[40%] xl:w-[40%] 2xl:w-[35%]">
                    <p className="font-poppins font-light text-center text-black text-base md:text-xl lg:text-base xl:text-lg 2xl:text-lg">O
                        projeto nasceu a partir da constatação da necessidade de melhorias no sistema de irrigação do
                        jardim do <span className='font-medium'>NEAB</span>, espaço voltado ao cultivo de espécies
                        tradicionais das culturas afro-brasileiras e quilombolas, com forte valor histórico, simbólico e
                        acadêmico.
                        <br/>
                        <br/>
                        Identificando a dificuldade no manejo da água, especialmente no período seco, a equipe formada
                        por docentes e discentes das Faculdades de Computação e Pedagogia da UFPA, em parceria com
                        colaboradores da UEPA, desenvolveu uma proposta que une o conhecimento técnico à preservação da
                        cultura tradicional e ao compromisso com os Objetivos de Desenvolvimento Sustentável da ONU, em
                        especial o ODS 11 – “Cidades e Comunidades Sustentáveis”.
                        <br/>
                        <br/>
                        <span className='font-extralight'>
                            A construção do sistema envolve prototipagem com arduínos, testes em laboratório, desenvolvimento de API e interface web, oficinas educativas e seminários para a comunidade acadêmica e externa.
                        </span>
                    </p>

                </div>
            </div>

            <EquipeMain/>
            
            <div
                className="absolute top-[25%] right-[3%] md:top-[30%] md:right-[3.5%] lg:top-[30%] lg:right-[3.5%] xl:top-[35%] xl:right-[3.5%] 2xl:top-[55%] 2xl:right-[3.5%]">
                <VerticalDividerDashed/>
            </div>

            <div ref={greetingBannerRef}
                 className="flex flex-col w-screen justify-center items-center shadow-sm bg-Dark_Green_Jiquiri py-2 gap-12 md:pt-4 md:pb-4 md:gap-6 lg:pt-6 lg:pb-6 lg:gap-12 xl:pt-6 xl:pb-6 xl:gap-12 2xl:pt-6 2xl:pb-8 2xl:gap-12">
                <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-2 xl:gap-2 2xl:gap-2">
                    <h1 className="font-catilde text-White_Jiquiri text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Agradecimentos</h1>
                    <p className="text-White_Jiquiri font-poppins text-center font-light text-sm w-80 md:text-lg md:w-80 lg:text-base lg:w-80 xl:text-lg xl:w-2/3 2xl:text-xl 2xl:w-2/3">O
                        Projeto Jiquiri só se tornou realidade graças ao empenho e colaboração de uma equipe diversa e
                        dedicada, composta por:
                    </p>
                </div>

                <GreetingsComponent/>
            </div>
        </>
    )
}