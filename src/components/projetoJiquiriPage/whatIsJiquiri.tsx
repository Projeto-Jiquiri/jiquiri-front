'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import LottieAnimation from "@/components/animations/animationLottie";

import teapot from '@/assets/Animations/teapot.json';
import componentesImage from '@/assets/PNG/components.png';
import divisorVertical from "@/assets/SVG/dividerComponent.svg";
import projetoJiquiriExemplo from "@/assets/PNG/projeto-jiquiri.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsJiquiri() {

    const whatIsJiquiriRef = useRef<HTMLDivElement>(null);
    const greenBannerRef = useRef<HTMLDivElement>(null);
    const whatIsJiquiriFooterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: whatIsJiquiriRef.current,
                start: "top 70%",
                end: "bottom 20%",
                markers: false
            },
        });
        tl.fromTo(
            whatIsJiquiriRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        ).fromTo(
            greenBannerRef.current,
            { opacity: 0, x: 500 },
            { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
        ).fromTo(
            whatIsJiquiriFooterRef.current,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.5"
        );

    }, []);

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-10 md:gap-12 lg:gap-12 xl:gap-14 2xl:gap-16">
            <div ref={whatIsJiquiriRef} className="flex flex-col justify-center items-center mt-6 gap-10 md:mt-6 md:gap-12 lg:mt-8 lg:gap-12 xl:mt-14 xl:gap-14 2xl:mt-16 2xl:gap-16 ">
                <div className="flex flex-col justify-center items-start">
                    <h3 className="font-poppins font-extralight text-Black_Jiquiri text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl">O que é</h3>
                    <h1 className="font-catilde text-Black_Jiquiri text-5xl -mt-2 md:text-7xl md:-mt-2 lg:text-7xl lg:-mt-3 xl:text-8xl xl:-mt-3 2xl:text-8xl 2xl:-mt-4">Projeto Jiquiri?</h1>
                </div>

                <div>
                    <LottieAnimation
                        animationData={teapot}
                        loop
                        autoPlay
                        className="w-[75vw] md:w-[50vw] lg:w-[25vw] xl:w-[24vw] 2xl:w-[20vw] h-auto"
                    />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-8 xl:gap-6 2xl:gap-8">
                    <h2 className="font-poppins text-Black_Jiquiri text-center w-[55%] text-xl md:w-[50%] md:text-2xl lg:w-[35%] lg:text-2xl xl:w-[55%] xl:text-xl 2xl:w-[50%] 2xl:text-2xl">Tecnologia e Tradição 🍃</h2>
                    <p className="font-poppins text-Black_Jiquiri text-center font-extralight w-[75%] text-lg md:w-[60%] md:text-xl lg:text-lg lg:w-[80vw] xl:w-[40vw] xl:text-lg 2xl:w-[35vw] 2xl:text-xl">
                        O Projeto <span className="font-light">Jiquiri</span> nasce do encontro entre inovação tecnológica e saberes tradicionais, promovendo uma ponte sólida entre sustentabilidade, respeito cultural e inclusão social. Idealizado em parceria com o <span className="font-light">NEAB (Núcleo de Estudos Afro-Brasileiros)</span> e com foco nas comunidades quilombolas, Jiquiri vai muito além da automação de canteiros: ele propõe um modelo de convivência harmônica entre natureza e tecnologia, onde o respeito aos costumes ancestrais é tão essencial quanto a busca por eficiência e preservação.
                        <br />
                        <br />
                        Ao captar dados de temperatura, umidade do solo e do ar, e transformá-los em informação acessível por meio de um sistema intuitivo e bonito, criamos uma ferramenta poderosa que auxilia no manejo da terra e fortalece o protagonismo dessas comunidades, sem substituir seus modos de vida, mas sim valorizando-os.
                    </p>
                </div>
            </div>

            <div ref={greenBannerRef} className="flex justify-center items-center flex-row max-md:flex-col-reverse bg-Dark_Green_Jiquiri w-screen shadow-sm gap-12 py-8 md:gap-8 md:py-8 lg:gap-20 lg:py-8 xl:gap-36 xl:py-6 2xl:gap-40 2xl:py-8">
                <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 xl:gap-6 2xl:gap-8">
                    <h3 className="font-poppins text-White_Jiquiri text-center text-lg w-64 md:text-lg md:w-64 lg:text-lg lg:w-80 xl:text-lg xl:w-72 2xl:text-xl 2xl:w-80">Automação Sustentável com Arduino e Sensores 🌱</h3>
                    <p className="font-poppins font-extralight text-White_Jiquiri text-center text-base w-80 md:text-base md:w-72 lg:text-base lg:w-80 xl:text-base xl:w-80 2xl:text-lg 2xl:w-96">
                        Em um momento crítico para o planeta, onde a escassez de água e a degradação ambiental ameaçam ecossistemas inteiros, o <span className="font-lig">Jiquiri</span> surge como uma resposta prática e acessível. Por meio de sensores e um sistema inteligente de monitoramento, é possível reduzir drasticamente o desperdício de água com irrigação automatizada e baseada em dados reais do ambiente.
                        <br />
                        <br />
                        Isso não só preserva recursos naturais como também potencializa a produtividade da terra, sem a necessidade de investimentos altos ou tecnologias de difícil acesso. Ao utilizar microcontroladores como o <span className="font-light">Arduino</span>, conseguimos baratear a solução e simplificar a instalação, tornando-a acessível e viável de forma eficiente e sustentável.
                    </p>
                </div>

                <Image
                    alt="Divisor Vertical"
                    src={divisorVertical}
                    className="max-md:hidden w-2 md:w-2.5 lg:w-2.5 xl:w-2.5 xl:h-[20vw] 2xl:w-3 2xl:h-[20vw]"
                />

                <div className="flex justify-center items-center">
                    <Image
                        alt="componentes"
                        src={componentesImage}
                        className="w-[70vw] md:w-[40vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[20vw] h-auto"
                    />
                </div>
            </div>

            <div ref={whatIsJiquiriFooterRef} className="flex flex-row justify-center items-center max-md:flex-col gap-16 mt-6 md:gap-16 md:mt-6 lg:gap-16 lg:mt-8 xl:gap-36 xl:mt-6 2xl:gap-40 2xl:mt-8">
                <div className="flex justify-center items-center">
                    <Image
                        alt="exemploIMG"
                        src={projetoJiquiriExemplo}
                        className="w-[60vw] md:w-[40vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[20vw] h-auto"
                    />
                </div>

                <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:-gap-8 xl:gap-6 2xl:gap-8">
                    <h3 className="font-poppins text-Black_Jiquiri text-center text-lg w-80 md:text-lg lg:text-lg lg:w-80 md:w-72 xl:text-xl xl:w-80 2xl:text-2xl 2xl:w-96">Plantando Inovação, Cultivando Cultura 🌍</h3>
                    <p className="font-poppins font-extralight text-Black_Jiquiri text-center text-base w-80 md:text-base md:w-72 lg:text-base lg:w-80 xl:text-base xl:w-80 2xl:text-lg 2xl:w-96">
                        Além dos impactos ambientais e econômicos, o Jiquiri reforça a importância do diálogo entre o conhecimento científico e os saberes tradicionais. As comunidades quilombolas carregam em seus modos de vida um profundo respeito à terra, às águas e ao tempo da natureza. O projeto busca registrar, valorizar e apresentar esses costumes em sua essência, promovendo a convivência e o aprendizado mútuo entre culturas.
                        <br />
                        <br />
                        Ao integrar tecnologia com identidade cultural, mostramos que inovação não é apenas sobre o futuro — é também sobre preservar o passado e reconhecer que a verdadeira sustentabilidade só acontece quando respeitamos quem cuida da terra há gerações. O Jiquiri é, portanto, uma semente plantada com ciência, cultura e propósito.
                    </p>
                </div>
            </div>

        </div>
    )
}