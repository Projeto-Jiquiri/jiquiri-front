import Image from "next/image";


interface TechCubeProps {
    title: string;
    image: string;
    alt: string;
}

export default function TechCube({ title, image, alt }: TechCubeProps) {
    return (
        <div className="flex flex-col justify-center items-center border-2 border-slate-600 bg-Black_Jiquiri shadow rounded-xl 2xl:size-32 2xl:p-8 2xl:gap-4">
            <Image
                alt={alt}
                src={image}
                className="2xl:size-14"
            />

            <h3 className="font-poppins text-White_Jiquiri font-medium text-center 2xl:text-xl">{title}</h3>
        </div>
    )
}