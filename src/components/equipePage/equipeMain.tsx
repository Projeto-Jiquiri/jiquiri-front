'use client'
import {useEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import horizontalDividerDashed from "@/assets/SVG/DividerHorizontalDashedGray.svg";
import equipeImage from '@/assets/PNG/equipe.png';


gsap.registerPlugin(ScrollTrigger);

export default function EquipeMain() {
    const equipeRef = useRef<HTMLDivElement>(null);
    const imageEquipeRef = useRef<HTMLDivElement>(null);
    const engRef = useRef<HTMLDivElement>(null);
    const pedRef = useRef<HTMLDivElement>(null);
    const bioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: equipeRef.current,
                start: "top 120%",
                end: "top 30%",
                // scrub: true,
                // markers: false,
            },
        });
        tl.fromTo(
            equipeRef.current,
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: .8, ease: "power2.out"}
        ).fromTo(
            imageEquipeRef.current,
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: 1, ease: "power2.out"},
            "-=0.5"
        ).fromTo(
            engRef.current,
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: 1, ease: "power2.out"},
            "-=0.5"
        ).fromTo(
            pedRef.current,
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: 1, ease: "power2.out"},
            "-=0.5"
        ).fromTo(
            bioRef.current,
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: 1, ease: "power2.out"},
            "-=0.5"
        )
    }, []);

    return (
        <div
            className="flex flex-1 flex-col justify-center items-center mt-4 gap-8 md:mt-8 md:gap-10 lg:mt-8 lg:gap-8 xl:mt-8 xl:gap-8 2xl:mt-8 2xl:gap-16">
            <div ref={equipeRef}
                 className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
                <h1 className="font-catilde text-Black_Jiquiri text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Equipe</h1>

                <div className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-8">
                    <h3 className="font-poppins text-Black_Jiquiri text-center w-60 text-base md:w-72 md:text-xl lg:w-80 lg:text-lg xl:text-xl xl:w-96 2xl:text-2xl 2xl:w-96">Saberes
                        que se Conectam 🤝</h3>
                    <p className="font-poppins text-Black_Jiquiri font-extralight text-center w-[65vw] text-base md:w-[55vw] md:text-lg lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                        O Projeto <span className="font-light">Jiquiri</span> é feito por pessoas de diferentes áreas
                        que trabalham juntas com um mesmo propósito: unir tecnologia, educação e cuidado com a terra.
                        Estudantes e professores dos cursos de <span
                        className="font-light">Engenharia da Computação</span> e <span
                        className="font-light">Pedagogia</span> da UFPA - Castanhal somam forças, trocam experiências e
                        constroem soluções que fazem sentido para as pessoas e para o meio ambiente.
                        <br/>
                        <br/>
                        Essa mistura de conhecimentos torna o projeto mais completo, mais humano e mais próximo das
                        realidades que queremos transformar.
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

            <div ref={engRef}
                 className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-8">
                <h3 className="font-poppins text-Black_Jiquiri text-center w-60 text-base md:w-72 md:text-xl lg:w-80 lg:text-lg xl:text-xl xl:w-96 2xl:text-2xl 2xl:w-96">Técnico
                    • Engenharia da Computação 🤖 </h3>
                <p className="font-poppins text-Black_Jiquiri font-extralight text-center w-[65vw] text-base md:w-[55vw] md:text-lg lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                    A equipe de engenharia é a espinha dorsal tecnológica do projeto <span
                    className="font-light">Jiquiri</span>. Formada por estudantes e profissionais da <span
                    className="font-light">Engenharia da Computação</span>, essa área foi responsável pelo
                    desenvolvimento dos sistemas de automação e sensoriamento ambiental.
                    <br/>
                    <br/>
                    Utilizando microcontroladores de baixo custo, como o <span className="font-light">Arduino</span>,
                    além de serviços em nuvem como a <span className="font-light">AWS</span>, a equipe construiu uma
                    estrutura robusta e escalável para a coleta, processamento e visualização de dados. A criação de um
                    sistema completo, que envolve tanto o <span className="font-light">back-end</span> para o
                    gerenciamento das informações quanto o <span className="font-light">front-end</span> para exibição
                    acessível e intuitiva dos dados, permite análises ambientais precisas e em tempo real. Essa
                    integração entre hardware, software e rede amplia o potencial de pesquisa interdisciplinar e
                    contribui diretamente para o desenvolvimento de soluções tecnológicas voltadas à sustentabilidade.
                </p>
            </div>

            <div ref={pedRef}
                 className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-8">
                <h3 className="font-poppins text-Black_Jiquiri text-center w-60 text-base md:w-72 md:text-xl lg:w-80 lg:text-lg xl:text-xl xl:w-96 2xl:text-2xl 2xl:w-96">Humanidades
                    • Pedagogia 🧑🏽‍🏫 </h3>
                <p className="font-poppins text-Black_Jiquiri font-extralight text-center w-[65vw] text-base md:w-[55vw] md:text-lg lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                    A equipe da pedagogia desenvolve a dimensão humanística do projeto, promovendo uma abordagem crítica
                    e sensível sobre os aspectos culturais, sociais e educativos envolvidos. Com foco nos estudos sobre
                    os povos quilombolas e seus modos de vida, essa área atua na valorização dos saberes tradicionais e
                    na produção de reflexões que conectam ciência, cultura e identidade.
                    <br/>
                    <br/>
                    A pedagogia contribui ainda na elaboração de metodologias e estratégias de divulgação que respeitam
                    e fortalecem o diálogo entre o conhecimento acadêmico e os saberes populares. Ao incorporar uma
                    perspectiva social ao projeto, essa área amplia o alcance e o significado do Jiquiri dentro e fora
                    do ambiente universitário, mostrando que inovação verdadeira também se constrói com escuta, respeito
                    e inclusão.
                </p>
            </div>

            <div ref={bioRef}
                 className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-8">
                <h3 className="font-poppins text-Black_Jiquiri text-center w-60 text-base md:w-72 md:text-xl lg:w-80 lg:text-lg xl:text-xl xl:w-96 2xl:text-2xl 2xl:w-96">Sustentabilidade
                    • Biologia 🌱 </h3>
                <p className="font-poppins text-Black_Jiquiri font-extralight text-center w-[65vw] text-base md:w-[55vw] md:text-lg lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                    A área de biologia tem papel fundamental na compreensão e análise dos impactos ecológicos
                    relacionados ao uso dos recursos naturais. A equipe contribui com uma visão crítica e científica
                    sobre o comportamento dos ecossistemas, avaliando os dados ambientais obtidos pelo sistema
                    automatizado e propondo interpretações que fortalecem o compromisso ambiental do projeto.
                    <br/>
                    <br/>
                    Essa integração entre tecnologia e ciência biológica permite uma análise profunda sobre temas como
                    conservação da água, equilíbrio do solo e microclimas locais. O trabalho da biologia, nesse
                    contexto, não só valida o uso dos dados coletados como também amplia sua relevância científica para
                    pesquisas voltadas à sustentabilidade e ao enfrentamento das mudanças climáticas.
                </p>
            </div>

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