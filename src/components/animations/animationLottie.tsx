'use client';

import dynamic from "next/dynamic";

const LottieNoSSR = dynamic(() => import("lottie-react"), { ssr: false });


interface LottieAnimationProps {
    animationData: unknown;
    loop: boolean;
    autoPlay: boolean;
    className: string;
}

export default function LottieAnimation({ animationData, loop, autoPlay, className }: LottieAnimationProps) {
    return (
        <LottieNoSSR
            animationData={animationData}
            loop={loop}
            autoPlay={autoPlay}
            className={className}
        />
    )
}