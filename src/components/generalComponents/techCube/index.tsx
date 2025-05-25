'use client'
import {useRef} from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface TechCubeProps {
    title?: string;
    image: string | StaticImageData;
    url: string;
    borderHighlighter?: boolean;
    alt: string;
}

export default function TechCube({title, image, alt, url, borderHighlighter}: TechCubeProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Ajustes para efeito mais pronunciado
        const angleY = (x - centerX) / 8;  // Divisor menor = inclinação maior
        const angleX = (centerY - y) / 5;  // Divisor menor = inclinação maior
        const posY = (centerY - y) / 20;
        const posX = (x - centerX) / 20;

        card.style.transform = `
            perspective(800px) 
            rotateX(${angleX}deg) 
            rotateY(${angleY}deg) 
            translateX(${posX}px) 
            translateY(${posY}px)
        `;
        card.style.boxShadow = `
            ${-posX * 2}px ${posY * 2}px 20px rgba(0, 0, 0, 0.3),
            inset 0 0 30px rgba(255, 255, 255, 0.1)
        `;
        card.style.transition = 'transform 0.05s ease-out, box-shadow 0.05s ease-out';
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateX(0) translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), box-shadow 0.3s ease-out';
    };

    return (
        <Link target="_blank" href={url} className="group">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="flex flex-col justify-center items-center border-2 border-slate-800 bg-Black_Jiquiri shadow-sm rounded-xl size-28 p-6 gap-4 md:size-36 md:p-6 md:gap-4 lg:size-24 lg:p-7 lg:gap-2 xl:size-28 xl:p-9 xl:gap-3 2xl:size-32 2xl:p-10 2xl:gap-4
                           transition-all duration-100 ease-out
                           group-hover:shadow-lg group-hover:border-slate-500"
            >
                <Image
                    alt={alt}
                    src={image}
                    className={`size-10 md:size-14 lg:size-10 xl:size-12 2xl:size-14 transition-transform duration-300 ease-out ${
                        borderHighlighter ? 'border-2 border-slate-400 rounded-full group-hover:scale-110' : 'group-hover:scale-105'
                    }`}
                />

                {title && (
                    <h3 className="font-poppins text-White_Jiquiri font-medium text-center leading-4 text-sm md:leading-5 md:text-base lg:leading-4 lg:text-sm xl:leading-5 xl:text-base 2xl:leading-5 2xl:text-xl
                                  transition-transform duration-300 ease-out group-hover:scale-105">
                        {title}
                    </h3>
                )}
            </div>
        </Link>
    )
}