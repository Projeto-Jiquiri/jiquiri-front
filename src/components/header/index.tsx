'use client';

import Image from "next/image";
import Link from "next/link";
import { BotMessageSquare, Github, Instagram } from "lucide-react";

import logo from '@/assets/PNG/logo.png';
import { colors } from "@/styles/colors";


export default function Header() {
    return (
        <header className="flex flex-1 w-screen 2xl:h-20 justify-between items-center 2xl:py-1 2xl:px-8">
            <Link href="/" className="hover-card">
                <Image src={logo} alt="Logo Jiquiri" className="2xl:size-16 select-none" draggable={false} />
            </Link>

            <div className="flex flex-1 2xl:gap-16 justify-end items-center select-none">
                <div className="flex 2xl:gap-20 justify-center items-center">
                    <Link href="/" className="text-Gray_Jiquiri 2xl:text-lg font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline">Inicio</Link>
                    <Link href="/projeto-jiquiri" className="text-Gray_Jiquiri 2xl:text-lg font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline">Projeto Jiquiri?</Link>
                    <Link href="/relatorios" className="text-Gray_Jiquiri 2xl:text-lg font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline">Relatórios</Link>
                    <Link href="/equipe" className="text-Gray_Jiquiri 2xl:text-lg font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline">Equipe</Link>
                    <Link href="/sobre" className="text-Gray_Jiquiri 2xl:text-lg font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline">Sobre</Link>
                </div>

                <div className="flex 2xl:gap-6 justify-center items-center">
                    <div className="flex 2xl:gap-6 justify-center items-center">
                        <Link href="https://" target="_blank" className="p-2">
                            <Instagram className="2xl:size-6 hover-card" color={colors.Gray_Jiquiri} />
                        </Link>
                        <Link href="https://" target="_blank" className="p-2">
                            <Github className="2xl:size-6 hover-card" color={colors.Gray_Jiquiri} />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center hover:opacity-90 gap-2 2xl:text-lg bg-Black_Jiquiri rounded-full text-White_Jiquiri font-poppins font-semibold text-center py-1.5 px-6 shadow">
                            Chat
                            <BotMessageSquare className="2xl:size-6" color={colors.White_Jiquiri} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}