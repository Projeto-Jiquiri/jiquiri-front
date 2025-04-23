'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TechCube from "@/components/techCube";
import reactLogo from '@/assets/SVG/reactLogo.svg';
import nextLogo from '@/assets/SVG/next.svg';
import tailwindLogo from '@/assets/SVG/tailwind.svg';
import tsLogo from '@/assets/SVG/tsLogo.svg';
import figmaLogo from '@/assets/SVG/figma.svg';
import tanstackQueryLogo from '@/assets/PNG/tanstackquery.png';
import pythonLogo from '@/assets/SVG/python-logo.svg';
import flaskLogo from '@/assets/PNG/flaskLogo.png';
import gsapLogo from '@/assets/SVG/gsapLogo.svg';
import awsLogo from '@/assets/SVG/aws-logo.svg';
import zustandLogo from '@/assets/SVG/zustand-logo.svg';
import lottieLogo from '@/assets/SVG/lottie-logo.svg';
import rechartsLogo from '@/assets/PNG/recharts.png';
import lucideLogo from '@/assets/SVG/lucide-logo.svg';
import shadcnLogo from '@/assets/PNG/shadcn.png';

gsap.registerPlugin(ScrollTrigger);

export default function Techs() {
    const frontendRef = useRef<HTMLDivElement>(null);
    const backendRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: frontendRef.current,
                start: "top 80%",
                end: "bottom 20%",
                // scrub: true,
                // markers: false,
            },
        });
        tl.fromTo(
            frontendRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        ).fromTo(
            backendRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        )

    }, []);


    return (
        <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
            <div ref={frontendRef} className="flex flex-col justify-center items-center gap-6 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10">
                <h4 className="font-catilde text-Black_Jiquiri text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl">Front-end</h4>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 lg:gap-8 xl:gap-10 2xl:grid-cols-3 2xl:gap-10">
                    <TechCube title="React" image={reactLogo} url="https://react.dev/" alt="React Logo" />
                    <TechCube title="Next" image={nextLogo} url="https://nextjs.org/" borderHighlighter alt="Next Logo" />
                    <TechCube title="Tailwind" image={tailwindLogo} url="https://tailwindcss.com/" alt="Tailwind Logo" />
                    <TechCube title="TypeScript" image={tsLogo} url="https://www.typescriptlang.org/" alt="Typescript Logo" />
                    <TechCube title="Figma" image={figmaLogo} url="https://www.figma.com/" alt="Figma Logo" />
                    <TechCube title="Tanstack Query" image={tanstackQueryLogo} url="https://tanstack.com/query/latest" alt="Tanstack Logo" />
                    <TechCube image={gsapLogo} url="https://gsap.com/" alt="Gsap Logo" />
                    <TechCube title="Zustand" image={zustandLogo} url="https://zustand-demo.pmnd.rs/" alt="Zustand Logo" />
                    <TechCube title="Lottie" image={lottieLogo} url="https://lottiefiles.com/" alt="Lottie Logo" />
                    <TechCube title="Recharts" image={rechartsLogo} url="https://recharts.org/en-US/" alt="Recharts Logo" />
                    <TechCube title="Lucide" image={lucideLogo} url="https://lucide.dev/" alt="Lucide Logo" />
                    <TechCube title="Shadcn" image={shadcnLogo} url="https://ui.shadcn.com/" alt="Shadcn Logo" />
                </div>
            </div>

            <div ref={backendRef} className="flex flex-col justify-center items-center gap-6 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10">
                <h4 className="font-catilde text-Black_Jiquiri text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl">Back-end</h4>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 lg:gap-8 xl:gap-10 2xl:grid-cols-3 2xl:gap-10">
                    <TechCube title="Python" image={pythonLogo} url="https://www.python.org/" alt="Python Logo" />
                    <TechCube title="Flask" image={flaskLogo} url="https://flask.palletsprojects.com/en/stable/" alt="Flask Logo" />
                    <TechCube title="AWS" image={awsLogo} url="https://aws.amazon.com" alt="AWS Logo" />
                </div>
            </div>
        </div>
    )
}