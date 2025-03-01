'use client';

import Image from "next/image";
import Link from "next/link";
import { BotMessageSquare, Github, Instagram } from "lucide-react";

import logo from '@/assets/PNG/logo.png';
import { colors } from "@/styles/colors";


export default function Header() {
    return (
        <header className="flex flex-1 w-screen justify-between items-center lg:h-20 xl:h-24 2xl:h-20 lg:py-1 xl:py-2 2xl:py-1 lg:px-6 xl:px-8 2xl:px-8">
            <Link href="/" className="hover-card">
                <Image src={logo} alt="Logo Jiquiri" className="lg:size-16 xl:size-16 2xl:size-16 select-none" draggable={false} />
            </Link>

            <div className="flex flex-1 justify-end items-center select-none lg:gap-12 xl:gap-14 2xl:gap-16 ">
                <div className="flex justify-center items-center lg:gap-14 xl:gap-16 2xl:gap-20">
                    <Link href="/" className="text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg">Inicio</Link>
                    <Link href="/projeto-jiquiri" className="text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg">Projeto Jiquiri?</Link>
                    <Link href="/relatorios" className="text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg">Relatórios</Link>
                    <Link href="/equipe" className="text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg">Equipe</Link>
                    <Link href="/sobre" className="text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg">Sobre</Link>
                </div>

                <div className="flex justify-center items-center lg:gap-4 xl:gap-4 2xl:gap-6">
                    <div className="flex justify-center items-center lg:gap-2 xl:gap-4 2xl:gap-6">
                        <Link href="https://" target="_blank" className="p-2">
                            <Instagram className="lg:size-5 xl:size-5 2xl:size-6 hover-card" color={colors.Gray_Jiquiri} />
                        </Link>
                        <Link href="https://" target="_blank" className="p-2">
                            <Github className="lg:size-5 xl:size-5 2xl:size-6 hover-card" color={colors.Gray_Jiquiri} />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center hover:opacity-90 gap-2 bg-Black_Jiquiri rounded-full text-White_Jiquiri font-poppins font-semibold text-center py-1.5 px-6 shadow lg:text-sm xl:text-base 2xl:text-lg">
                            Chat
                            <BotMessageSquare className="lg:size-5 xl:size-5 2xl:size-6" color={colors.White_Jiquiri} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}