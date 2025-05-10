'use client';

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";

import logo from '@/assets/PNG/logo.png';
import { colors } from "@/styles/colors";
import MenuSheetMobile from "./sheetMenu";

import Logo from '@/assets/PNG/logo.png';
import ChatSheetMenu from "../chatSheetMenu";


export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <header className="flex flex-1 w-screen justify-between items-center max-lg:hidden lg:h-20 xl:h-24 2xl:h-20 lg:py-1 xl:py-2 2xl:py-1 lg:px-6 xl:px-8 2xl:px-8">
                <Link href="/" className="hover-card">
                    <Image src={logo} alt="Logo Jiquiri" className="lg:size-16 xl:size-16 2xl:size-16 select-none" draggable={false} />
                </Link>

                <div className="flex flex-1 justify-end items-center select-none lg:gap-12 xl:gap-14 2xl:gap-16 ">
                    <div className="flex justify-center items-center lg:gap-14 xl:gap-16 2xl:gap-20">
                        <Link href="/" className={`text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg ${pathname === '/' ? 'opacity-75 underline underline-offset-4' : ''}`}>Inicio</Link>
                        <Link href="/projeto-jiquiri" className={`text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg ${pathname === '/projeto-jiquiri' ? 'opacity-75 underline underline-offset-4' : ''}`}>Projeto Jiquiri?</Link>
                        <Link href="/relatorios" className={`text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg ${pathname === '/relatorios' ? 'opacity-75 underline underline-offset-4' : ''}`}>Relatórios</Link>
                        <Link href="/equipe" className={`text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg ${pathname === '/equipe' ? 'opacity-75 underline underline-offset-4' : ''}`}>Equipe</Link>
                        <Link href="/sobre" className={`text-Gray_Jiquiri font-poppins tracking-wide text-center hover:text-Black_Jiquiri p-2 hover-card hover:underline lg:text-sm xl:text-base 2xl:text-lg ${pathname === '/sobre' ? 'opacity-75 underline underline-offset-4' : ''}`}>Sobre</Link>
                    </div>

                    <div className="flex justify-center items-center lg:gap-4 xl:gap-4 2xl:gap-6">
                        <div className="flex justify-center items-center lg:gap-2 xl:gap-4 2xl:gap-6">
                            <Link href="https://" target="_blank" className="p-2">
                                <Instagram className="lg:size-5 xl:size-5 2xl:size-6 hover-card" color={colors.Gray_Jiquiri} />
                            </Link>
                            <Link href="https://github.com/Projeto-Jiquiri" target="_blank" className="p-2">
                                <Github className="lg:size-5 xl:size-5 2xl:size-6 hover-card" color={colors.Gray_Jiquiri} />
                            </Link>
                        </div>

                        <div className="flex justify-center items-center">
                            <ChatSheetMenu />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-lg:flex flex-1 hidden justify-between pt-2 p-4 items-center w-screen max-lg:visible">
                <Link href="/" className="hover-card">
                    <Image
                        alt="Logo"
                        src={Logo}
                        className="w-14 h-14 md:w-16 md:h-16"

                    />
                </Link>
                <MenuSheetMobile />
            </div>
        </>
    )
}