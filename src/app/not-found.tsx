'use client';

import dynamic from "next/dynamic"

import robot from '@/assets/Animations/robot.json';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-1 flex-col justify-center items-center h-screen 2xl:gap-8">
            <h1 className="font-poppins font-light text-Black_Jiquiri 2xl:text-3xl">Ops... Parece que você se perdeu.</h1>
            <Button onClick={() => router.replace('/')} className="2xl:text-lg font-poppins">Voltar para o início</Button>
            <Lottie
                animationData={robot}
                loop
                autoplay
                className="2xl:size-80"
            />
        </div>
    )
}