'use client'
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface TechCubeProps {
    title?: string;
    image: string | StaticImageData;
    url: string;
    borderHighlighter?: boolean;
    alt: string;
}

export default function TechCube({ title, image, alt, url, borderHighlighter }: TechCubeProps) {
    return (
        <Link target="_blank" href={url}>
            <div className="flex flex-col justify-center items-center hover-card border-2 border-slate-800 bg-Black_Jiquiri shadow-sm rounded-xl size-28 p-6 gap-4 md:size-36 md:p-6 md:gap-4 lg:size-24 lg:p-7 lg:gap-2 xl:size-28 xl:p-9 xl:gap-3 2xl:size-32 2xl:p-10 2xl:gap-4">
                <Image
                    alt={alt}
                    src={image}
                    className={`size-10 md:size-14 lg:size-10 xl:size-12 2xl:size-14 ${borderHighlighter ? 'border-2 border-slate-400 rounded-full' : null}`}
                />

                {title && <h3 className="font-poppins text-White_Jiquiri font-mediu text-center leading-4 text-sm md:leading-5 md:text-base lg:leading-4 lg:text-sm xl:leading-5 xl:text-base 2xl:leading-5 2xl:text-xl">{title}</h3>}
            </div>
        </Link>
    )
}