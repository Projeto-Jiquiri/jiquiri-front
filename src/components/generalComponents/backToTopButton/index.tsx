'use client'
import {useEffect, useState} from "react";
import {ArrowUp} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return visible ? (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-10 opacity-75 right-10 z-50 p-3 rounded-full bg-transparent border-[1.5px] border-White_Jiquiri text-white shadow-lg hover:bg-Light_Green_Jiquiri transition"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={24} className='text-Black_Jiquiri'/>
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Voltar ao topo</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>


    ) : null;
}