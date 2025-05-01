'use client';

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import dividerComponent from '@/assets/SVG/dividerComponent.svg';
import horizontalDividerDashed from '@/assets/SVG/DividerHorizontalDashed.svg';
import logo from '@/assets/PNG/logo.png';
import { Button } from "../../ui/button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function HomeBanner() {
    const router = useRouter();

    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const logoRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: buttonsRef.current,
                start: "top 90%",
                end: "bottom 20%",
                // scrub: true,
                // markers: false,
            },
        });

        tl.fromTo(
            leftTextRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
        ).fromTo(
            rightTextRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            "<"
        ).fromTo(
            logoRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "<"
        ).fromTo(
            buttonsRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "<"
        );
    }, []);

    return (
        <div className="flex flex-1 flex-col justify-center items-center bg-Dark_Green_Jiquiri mt-8 md:mt-8 lg:mt-12 xl:mt-6 2xl:mt-8">
            <div className="flex flex-1 flex-row max-md:flex-col justify-center items-center w-screen p-8 gap-12 md:p-6 md:gap-8 lg:p-12 lg:gap-16 xl:p-14 xl:gap-16 2xl:p-16 2xl:gap-20">
                <div ref={leftTextRef} className="flex flex-row max-md:flex-col justify-center items-center gap-0 md:gap-8 lg:gap-12 xl:gap-14 2xl:gap-16">
                    <p className=" text-White_Jiquiri font-poppins font-light text-center text-lg w-5/6 md:w-56 md:text-base lg:text-sm xl:text-base lg:w-52 xl:w-56 2xl:text-lg 2xl:w-60">Tecnologia que cultiva futuro: sustentabilidade, saberes ancestrais e inovação caminhando juntos.</p>

                    <Image
                        src={dividerComponent}
                        alt="dividerComponent"
                        className="visible max-md:hidden w-2 md:w-2 lg:w-2 xl:w-2 2xl:w-2 h-auto max-md:rotate-90 select-none"
                        draggable={false}
                    />
                </div>

                <div ref={logoRef} className="flex flex-col items-center justify-center gap-0">
                    <Image
                        src={logo}
                        alt="logo-banner"
                        className="w-[80%] md:w-[80%] lg:w-[80%] xl:w-[50%] 2xl:w-[50%] h-auto select-none"
                        draggable={false}
                    />
                    <h3 className="text-White_Jiquiri font-catilde tracking-wider text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">JIQUIRI</h3>
                </div>

                <div ref={rightTextRef} className="flex justify-center items-center flex-row max-md:flex-col gap-6 md:gap-6 lg:gap-12 xl:gap-14 2xl:gap-16">
                    <Image
                        src={dividerComponent}
                        alt="dividerComponent"
                        className="visible max-md:hidden w-2 md:w-2 lg:w-2 xl:w-2 2xl:w-2 h-auto max-md:rotate-90 select-none"
                        draggable={false}
                    />

                    <p className="text-White_Jiquiri font-poppins text-center font-extralight tracking-wide text-lg w-56 md:w-56 md:text-base lg:text-sm xl:text-base lg:w-48 xl:w-56 2xl:text-lg 2xl:w-60">
                        Av. dos Universitários, s/n
                        Jaderlândia, Castanhal
                        PA, 68746-630
                    </p>
                </div>

            </div>

            <Image
                src={horizontalDividerDashed}
                ref={logoRef}
                alt="horizontal divider"
                className="w-[80%] md:w-[75%] lg:w-[40%] xl:w-[50%] 2xl:w-[50%] h-1 select-none"
                draggable={false}

            />

            <div ref={buttonsRef} className="flex flex-row justify-center items-center max-md:flex-col gap-6 p-8 md:gap-6 md:p-10 lg:gap-16 lg:p-10 xl:gap-20 xl:p-14 2xl:gap-24 2xl:p-16">
                <Button variant='outline' onClick={() => router.push('/projeto-jiquiri')} className="bg-White_Jiquiri hover-card cursor-pointer border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg 2xl:text-lg xl:text-lg lg:text-lg md:text-sm text-center leading-5 shadow-sm tracking-wider font-semibold text-wrap font-catilde rounded-full w-68 h-14 md:w-56 md:h-16 lg:w-68 xl:w-68 lg:h-12 xl:h-12 2xl:w-68 2xl:h-14">Descubra o Projeto Jiquiri</Button>
                <Button variant='outline' onClick={() => router.push('/relatorios')} className="bg-White_Jiquiri hover-card cursor-pointer border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg 2xl:text-lg xl:text-lg lg:text-lg md:text-sm text-center leading-5 shadow-sm tracking-wider font-semibold text-wrap font-catilde rounded-full w-68 h-14 md:w-56 md:h-16 lg:w-68 xl:w-68 lg:h-12 xl:h-12 2xl:w-68 2xl:h-14">Veja os últimos Relatórios</Button>
                <Button variant='outline' onClick={() => router.push('/sobre')} className="bg-White_Jiquiri hover-card cursor-pointer border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg 2xl:text-lg xl:text-lg lg:text-lg md:text-sm text-center leading-5 shadow-sm tracking-wider font-semibold text-wrap font-catilde rounded-full w-68 h-14 md:w-56 md:h-16 lg:w-68 xl:w-68 lg:h-12 xl:h-12 2xl:w-68 2xl:h-14">Detalhes do Projeto Jiquiri</Button>
            </div>

        </div>
    )
}