import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import LottieAnimation from "@/components/animations/animationLottie";
import plant from '@/assets/Animations/walkingPlant.json';

type greetingsProfileProps = {
    name: string;
    description?: string;
    image?: StaticImageData | string;
    link?: string;
};

export default function GreetingsProfile({link, name, image, description}: greetingsProfileProps) {
    return (
        <div
            className="flex flex-col items-center gap-2 md:gap-3 px-2"
            aria-label={`Profile: ${name}`}
        >
            <h2 className="font-poppins font-medium text-White_Jiquiri text-base md:text-xl text-center">
                {name}
            </h2>
            {description && (
                <p className="text-White_Jiquiri/90 font-poppins text-xs md:text-sm text-center">
                    {description}
                </p>
            )}
            <div
                className="w-32 md:w-40 lg:w-44 xl:w-48 2xl:w-48 aspect-square flex items-center justify-center relative">
                {image ? (
                    typeof image === "string" ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            style={{objectFit: "cover"}}
                            sizes="(max-width: 768px) 8rem, (max-width: 1200px) 11rem, 12rem"
                            className="rounded-full border-2 border-White_Jiquiri"
                            draggable={false}
                            priority={false}
                        />
                    ) : (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            style={{objectFit: "contain"}}
                            sizes="(max-width: 768px) 8rem, (max-width: 1200px) 11rem, 12rem"
                            className="rounded-full border-2 border-White_Jiquiri"
                            priority={false}
                            draggable={false}
                        />
                    )
                ) : (
                    <LottieAnimation
                        animationData={plant}
                        loop
                        autoPlay
                        className="w-full h-full"
                    />
                )}
            </div>
            {link && (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-White_Jiquiri font-poppins font-light italic text-xs md:text-sm px-3 py-1 rounded hover:bg-Light_Green_Jiquiri transition"
                >
                    {link}
                </Link>
            )}
        </div>
    );
}