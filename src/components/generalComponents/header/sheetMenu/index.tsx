'use client'

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet"
import { Github, HomeIcon, Info, Instagram, Menu, NotebookText, TreeDeciduous, Users } from "lucide-react";

import Logo from "@/assets/PNG/logo.png";
import { colors } from "@/styles/colors";
import ChatSheetMenu from "../../chatSheetMenu";

export default function MenuSheetMobile() {
    const [modalOpen, setModalOpen] = useState(false)
    const pathname = usePathname()

    return (
        <Sheet open={modalOpen} onOpenChange={setModalOpen}>
            <SheetTrigger className="hover-card">
                <Menu size={28} color={colors.Black_Jiquiri} />
            </SheetTrigger>
            <SheetContent className="w-[200px] md:w-[300px] bg-White_Jiquiri text-Black_Jiquiri border-l-Gray_Jiquiri" side='right'>
                <SheetHeader className="flex flex-col items-center justify-center border-b-[1.5px] pb-2 border-Gray_Jiquiri/10">
                    <Image src={Logo} alt="Logo" className="size-20 md:size-28" />
                    <SheetTitle className="font-catilde text-2xl text-Black_Jiquiri md:text-3xl">Jiquiri</SheetTitle>
                    <SheetDescription className="flex flex-1 py-4 md:py-4 items-center justify-center gap-10 md:gap-14">
                        <Link href="http://" target="_blank" rel="noopener noreferrer" className="hover-card p-2">
                            <Instagram className="size-5 md:size-7" color={colors.Gray_Jiquiri} />
                        </Link>
                        <Link href="https://github.com/Projeto-Jiquiri" target="_blank" rel="noopener noreferrer" className="hover-card p-2">
                            <Github className="size-5 md:size-7" color={colors.Gray_Jiquiri} />
                        </Link>
                    </SheetDescription>
                </SheetHeader>
                <div className="flex mt-2 md:mt-8 flex-col justify-center items-start gap-6 md:gap-10">
                    <Link onClickCapture={() => setModalOpen(false)} href="/" className={`flex w-full flex-1 active:bg-Gray_Jiquiri/5 px-10 md:px-20 py-2 md:py-4 justify-start items-center gap-2 md:gap-3 ${pathname === '/' ? 'bg-Gray_Jiquiri/5 opacity-65' : ''}`} >
                        <HomeIcon size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins font-medium text-lg md:text-2xl tracking-wide ">Início</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/projeto-jiquiri" className={`flex w-full flex-1 active:bg-Gray_Jiquiri/5 px-10 md:px-20 py-2 md:py-4 justify-start items-center gap-2 md:gap-3 ${pathname === '/projeto-jiquiri' ? 'bg-Gray_Jiquiri/5 opacity-65' : ''}`} >
                        <TreeDeciduous size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins font-medium text-lg md:text-2xl tracking-wide ">Jiquiri?</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/relatorios" className={`flex w-full flex-1 active:bg-Gray_Jiquiri/5 px-10 md:px-20 py-2 md:py-4 justify-start items-center gap-2 md:gap-3 ${pathname === '/relatorios' ? 'bg-Gray_Jiquiri/5 opacity-65' : ''}`} >
                        <NotebookText size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins font-medium text-lg md:text-2xl tracking-wide ">Relatórios</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/equipe" className={`flex w-full flex-1 active:bg-Gray_Jiquiri/5 px-10 md:px-20 py-2 md:py-4 justify-start items-center gap-2 md:gap-3 ${pathname === '/equipe' ? 'bg-Gray_Jiquiri/5 opacity-65' : ''}`} >
                        <Users size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins font-medium text-lg md:text-2xl tracking-wide ">Equipe</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/sobre" className={`flex w-full flex-1 active:bg-Gray_Jiquiri/5 px-10 md:px-20 py-2 md:py-4 justify-start items-center gap-2 md:gap-3 ${pathname === '/sobre' ? 'bg-Gray_Jiquiri/5 opacity-65' : ''}`} >
                        <Info size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins font-medium text-lg md:text-2xl tracking-wide ">Sobre</h3>
                    </Link>
                </div>
                <SheetFooter>
                    <ChatSheetMenu />
                </SheetFooter>
            </SheetContent>
        </Sheet >

    )
}