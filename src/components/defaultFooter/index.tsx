'use client';

import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";
import { Brush, Github, Instagram } from "lucide-react";

import plantInfinityAnimation from '@/assets/Animations/plantInfinity.json';
import { colors } from "@/styles/colors";
import UFPALogo from "@/assets/SVG/UFPA_Logo.svg";
import UFPAQuilombo from "@/assets/SVG/UniversidadeDoQuilombo.svg"
import JiquiriLogo from "@/assets/PNG/logo.png";


const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function DefaultFooter({ someFooter }: { someFooter?: boolean }) {
    return (
        <div className="flex flex-1 flex-col justify-center items-center gap-16 md:gap-16 lg:gap-20 lg:mt-16 xl:gap-24 mt-14 xl:mt-20 2xl:gap-28 2xl:mt-24">
            {someFooter ?
                null
                :

                <div className="flex flex-col gap-8 md:gap-14 lg:gap-12 xl:gap-14 2xl:gap-16 justify-center items-center">
                    <Lottie
                        animationData={plantInfinityAnimation}
                        autoPlay
                        loop
                        className="size-32 md:size-36 lg:size-32 xl:size-36 2xl:size-40"
                    />

                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-8 justify-center items-center">
                        <div className="flex gap-16 md:gap-20 lg:gap-12 xl:gap-14 2xl:gap-16 justify-center items-center">
                            <Link href="https://" target="_blank" className="p-2">
                                <Instagram color={colors.Black_Jiquiri} className="size-6 md:size-6 lg:size-4 xl:size-5 2xl:size-6 hover-card" />
                            </Link>

                            <Link href="https://" target="_blank" className="p-2">
                                <Github color={colors.Black_Jiquiri} className="size-6 md:size-6 lg:size-4 xl:size-5 2xl:size-6 hover-card" />
                            </Link>
                        </div>

                        <div>
                            <h5 className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-poppins font-light text-black text-center tracking-wider">
                                Av. dos Universitários, s/n  Jaderlândia,
                                <p className="font-poppins font-normal">Castanhal, PA</p>
                                68746-630
                            </h5>
                        </div>

                        <div className="flex justify-center items-center gap-16 md:gap-24 lg:gap-32 xl:gap-36 2xl:gap-40">
                            <Image
                                alt="UFPA Logo"
                                src={UFPALogo}
                                className="size-16 md:size-24 lg:size-24 xl:size-28 2xl:size-32 select-none"
                                draggable={false}
                            />

                            <div className="flex flex-col justify-center items-center" draggable={false}>
                                <Image
                                    alt="UFPA Logo"
                                    src={JiquiriLogo}
                                    className="size-16 md:size-20 lg:size-14 xl:size-16 2xl:size-20 select-none"
                                    draggable={false}
                                />
                                <h5 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-catilde font-semibold text-Black_Jiquiri text-center tracking-wider select-none">JIQUIRI</h5>
                            </div>

                            <Image
                                alt="UFPA Quilombo Logo"
                                src={UFPAQuilombo}
                                className="size-16 md:size-24 lg:size-24 xl:size-28 2xl:size-32 select-none"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>}

            <footer className="flex w-screen justify-between max-md:justify-center items-center opacity-80 px-2 py-2 md:px-4 md:my-1 lg:px-4 lg:py-2 xl:px-6 xl:py-2 2xl:px-8 2xl:py-2 ">
                <p className="visible max-md:hidden text-Gray_Jiquiri text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm font-light font-poppins tracking-wider">campuscastanhal.ufpa.br</p>
                <p className="text-Gray_Jiquiri text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm font-light font-poppins tracking-wider">© {new Date().getFullYear()} - Todos os Direitos Reservados - Projeto Jiquiri</p>
                <div className="flex visible max-md:hidden justify-center items-center gap-2 opacity-50">
                    <Brush className="md:size-3 lg:size-2 xl:size-3 2xl:size-4" color={colors.Gray_Jiquiri} />
                    <p className="text-Gray_Jiquiri text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm font-light font-poppins tracking-wider">_gus.dev</p>
                </div>
            </footer>
        </div>
    )
}