'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { VerticalDividerDashed } from "../../divider"
import Hero from "@/assets/PNG/Hero.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageHero() {

    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%",
                end: "bottom 20%",
                // scrub: true,
                // markers: false,
            },
        });

        tl.fromTo(
            imageRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    }, []);

    return (
        <div ref={imageRef} className="relative flex justify-center items-center w-full my-16 md:my-16 lg:my-12 xl:my-14 2xl:my-16">
            <div className="absolute left-[3%] md:left-[3%] lg:left-[3%] xl:left-[3%] 2xl:left-[3.5%]">
                <VerticalDividerDashed />
            </div>
            <Image
                src={Hero}
                alt="Hero"
                priority
                className="w-[80%] h-[80%] md:w-[80%] md:h-[80%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%] 2xl:w-[45%] 2xl:h-[45%] select-none"
                draggable={false}

            />

        </div>
    )
}