'use client'
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BotMessageSquare } from "lucide-react";
import { colors } from "@/styles/colors";
import Chatbot from "./chatbot";



export default function ChatSheetMenu() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <Sheet
            open={modalOpen}
            onOpenChange={setModalOpen}
        >
            <SheetTrigger asChild>
                <button className="flex justify-center items-center hover:opacity-90 gap-2 cursor-pointer bg-Black_Jiquiri rounded-full text-White_Jiquiri font-poppins font-semibold text-center py-1.5 px-6 shadow-sm lg:text-sm xl:text-base 2xl:text-lg">
                    Chat
                    <BotMessageSquare className="lg:size-5 xl:size-5 2xl:size-6" color={colors.White_Jiquiri} />
                </button>
            </SheetTrigger>
            <SheetContent className="2xl:min-w-xl ">
                <SheetHeader>
                    <SheetTitle className="font-poppins text-2xl flex justify-center items-center flex-row text-Black_Jiquiri gap-2">Pergunte ao Chat <BotMessageSquare className="lg:size-5 xl:size-5 2xl:size-6" color={colors.Black_Jiquiri} /></SheetTitle>
                    <SheetDescription asChild>
                        <Chatbot />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}