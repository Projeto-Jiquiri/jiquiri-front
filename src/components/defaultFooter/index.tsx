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
        <div className="flex flex-1 flex-col justify-center items-center xl:gap-24 xl:mt-20 2xl:gap-28 2xl:mt-24">
            {someFooter ?
                null
                :

                <div className="flex flex-col xl:gap-14 2xl:gap-16 justify-center items-center">
                    <Lottie
                        animationData={plantInfinityAnimation}
                        autoPlay
                        loop
                        className="xl:size-36 2xl:size-40"
                    />

                    <div className="flex flex-col xl:gap-6 2xl:gap-8 justify-center items-center">
                        <div className="flex xl:gap-14 2xl:gap-16 justify-center items-center">
                            <Link href="https://" target="_blank" className="p-2">
                                <Instagram color={colors.Black_Jiquiri} className="xl:size-5 2xl:size-6 hover-card" />
                            </Link>

                            <Link href="https://" target="_blank" className="p-2">
                                <Github color={colors.Black_Jiquiri} className="xl:size-5 2xl:size-6 hover-card" />
                            </Link>
                        </div>

                        <div>
                            <h5 className="xl:text-base 2xl:text-lg font-poppins font-light text-black text-center tracking-wider">
                                Av. dos Universitários, s/n  Jaderlândia,
                                <p className="font-poppins font-normal">Castanhal, PA</p>
                                68746-630
                            </h5>
                        </div>

                        <div className="flex justify-center items-center xl:gap-36 2xl:gap-40">
                            <Image
                                alt="UFPA Logo"
                                src={UFPALogo}
                                className="xl:size-28 2xl:size-32 select-none"
                                draggable={false}
                            />

                            <div className="flex flex-col justify-center items-center" draggable={false}>
                                <Image
                                    alt="UFPA Logo"
                                    src={JiquiriLogo}
                                    className="xl:size-16 2xl:size-20 select-none"
                                    draggable={false}
                                />
                                <h5 className="xl:text-4xl 2xl:text-5xl font-catilde font-semibold text-Black_Jiquiri text-center tracking-wider select-none">JIQUIRI</h5>
                            </div>

                            <Image
                                alt="UFPA Quilombo Logo"
                                src={UFPAQuilombo}
                                className="xl:size-28 2xl:size-32 select-none"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>}

            <footer className="flex w-screen justify-between items-center opacity-80 xl:px-6 xl:py-2 2xl:px-8 2xl:py-2 ">
                <p className="text-Gray_Jiquiri xl:text-sm 2xl:text-sm font-light font-poppins tracking-wider">campuscastanhal.ufpa.br</p>
                <p className="text-Gray_Jiquiri xl:text-sm 2xl:text-sm font-light font-poppins tracking-wider">© {new Date().getFullYear()} - Todos os Direitos Reservados - Projeto Jiquiri</p>
                <div className="flex justify-center items-center gap-2 opacity-50">
                    <Brush className="xl:size-3 2xl:size-4" color={colors.Gray_Jiquiri} />
                    <p className="text-Gray_Jiquiri xl:text-sm 2xl:text-sm font-light font-poppins tracking-wider">_gus.dev</p>
                </div>
            </footer>
        </div>
    )
}