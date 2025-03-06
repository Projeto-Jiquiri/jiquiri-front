'use client'

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Github, HomeIcon, Info, Instagram, Menu, NotebookText, TreeDeciduous, Users } from "lucide-react";

import Logo from "@/assets/PNG/logo.png";
import { colors } from "@/styles/colors";

export default function MenuSheetMobile() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <Sheet open={modalOpen} onOpenChange={setModalOpen}>
            <SheetTrigger>
                <Menu size={28} color={colors.Black_Jiquiri} />
            </SheetTrigger>
            <SheetContent className="w-[200px] md:w-[300px] bg-White_Jiquiri text-Black_Jiquiri border-l-Gray_Jiquiri" side='left'>
                <SheetHeader className="flex flex-1 flex-col items-center justify-center border-b-[1px] pb-4 border-Gray_Jiquiri/35">
                    <Image src={Logo} alt="Logo" className="size-20 md:size-28" />
                    <SheetTitle className="font-Roc-Grotesk text-2xl text-Black_Jiquiri md:text-3xl my-2">Jiquiri</SheetTitle>
                    <SheetDescription className="flex flex-1 py-4 md:py-4 items-center justify-center gap-14">
                        <Link href="http://" target="_blank" rel="noopener noreferrer">
                            <Instagram className="size-5 md:size-7" color={colors.Gray_Jiquiri} />
                        </Link>
                        <Link href="http://" target="_blank" rel="noopener noreferrer">
                            <Github className="size-5 md:size-7" color={colors.Gray_Jiquiri} />
                        </Link>
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 mt-8 md:mt-10 flex-col justify-center items-center gap-8 md:gap-10">
                    <Link onClickCapture={() => setModalOpen(false)} href="/" className="flex flex-1 active:bg-Gray_Jiquiri/5 px-16 md:px-28 py-1 md:py-4 justify-center items-center gap-2 md:gap-3">
                        <HomeIcon size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins text-lg md:text-xl">Início</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/projeto-jiquiri" className="flex flex-1 active:bg-Gray_Jiquiri/5 px-14 md:px-22 py-1 md:py-4 justify-center items-center gap-2 md:gap-3">
                        <TreeDeciduous size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins text-lg md:text-xl">Jiquiri?</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/relatorios" className="flex flex-1 active:bg-Gray_Jiquiri/5 px-14 md:px-22 py-1 md:py-4 justify-center items-center gap-2 md:gap-3">
                        <NotebookText size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins text-lg md:text-xl">Relatórios</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/equipe" className="flex flex-1 active:bg-Gray_Jiquiri/5 px-14 md:px-22 py-1 md:py-4 justify-center items-center gap-2 md:gap-3">
                        <Users size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins text-lg md:text-xl">Equipe</h3>
                    </Link>
                    <Link onClickCapture={() => setModalOpen(false)} href="/sobre" className="flex flex-1 active:bg-Gray_Jiquiri/5 px-14 md:px-22 py-1 md:py-4 justify-center items-center gap-2 md:gap-3">
                        <Info size={20} color={colors.Black_Jiquiri} />
                        <h3 className="font-poppins text-lg md:text-xl">Sobre</h3>
                    </Link>
                </div>
            </SheetContent>
        </Sheet >

    )
}