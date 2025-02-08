'use client';

import dynamic from "next/dynamic";

import greenFabric from "@/assets/Animations/greenFabric.json";

const LottieNoSSR = dynamic(() => import("lottie-react"), { ssr: false });

export default function GreenFabricAnimation() {
    return (
        <LottieNoSSR
            animationData={greenFabric}
            loop
            autoPlay
            className="2xl:w-[40vw] 2xl:h-[30vw]"
        />
    )
}