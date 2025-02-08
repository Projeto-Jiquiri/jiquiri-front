'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

import dividerComponent from '@/assets/SVG/dividerComponent.svg';
import horizontalDividerDashed from '@/assets/SVG/DividerHorizontalDashed.svg';
import logo from '@/assets/PNG/logo.png';
import { Button } from "../ui/button";

export default function HomeBanner() {
    const router = useRouter();

    return (
        <div className="flex flex-1 flex-col justify-center items-center 2xl:mt-8 bg-Dark_Green_Jiquiri">
            <div className="flex flex-1 justify-center items-center 2xl:w-screen 2xl:p-16 2xl:gap-20">
                <div className="flex justify-center items-center 2xl:gap-16">
                    <p className=" text-White_Jiquiri font-poppins font-light 2xl:text-lg 2xl:w-60 text-center">Lorem ipsum dolor sit amet consectetur. Quis lorem massa tempus neque fringilla. Malesuada vulputate cursus interdum nunc sapien nunc.</p>

                    <Image
                        src={dividerComponent}
                        alt="dividerComponent"
                        className="2xl:w-2 2xl:h-auto select-none"
                        draggable={false}
                    />
                </div>

                <div className="flex flex-col items-center justify-center 2xl:gap-0">
                    <Image
                        src={logo}
                        alt="logo-banner"
                        className="2xl:w-[50%] 2xl:h-auto select-none"
                        draggable={false}
                    />
                    <h3 className="text-White_Jiquiri font-catilde tracking-wider 2xl:text-4xl">JIQUIRI</h3>
                </div>

                <div className="flex justify-center items-center 2xl:gap-16">
                    <Image
                        src={dividerComponent}
                        alt="dividerComponent"
                        className="2xl:w-2 2xl:h-auto select-none"
                        draggable={false}
                    />

                    <p className="text-White_Jiquiri font-poppins 2xl:w-60 text-center 2xl:text-lg font-extralight tracking-wide">
                        Av. dos Universitários, s/n
                        Jaderlândia, Castanhal
                        PA, 68746-630
                    </p>
                </div>

            </div>

            <Image
                src={horizontalDividerDashed}
                alt="horizontal divider"
                className="2xl:w-[50%] 2xl:h-1 select-none"
                draggable={false}

            />

            <div className="flex justify-center items-center 2xl:gap-24 2xl:p-16">
                <Button variant='outline' onClick={() => router.push('/projeto-jiquiri')} className="bg-White_Jiquiri hover-card border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg text-center leading-5 shadow tracking-wider font-semibold 2xl:w-60 text-wrap 2xl:h-14 font-catilde rounded-full">Descubra o Projeto Jiquiri</Button>
                <Button variant='outline' onClick={() => router.push('/relatorios')} className="bg-White_Jiquiri hover-card border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg text-center leading-5 shadow tracking-wider font-semibold 2xl:w-60 text-wrap 2xl:h-14 font-catilde rounded-full">Veja os últimos Relatórios</Button>
                <Button variant='outline' onClick={() => router.push('/sobre')} className="bg-White_Jiquiri hover-card border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg text-center leading-5 shadow tracking-wider font-semibold 2xl:w-60 text-wrap 2xl:h-14 font-catilde rounded-full">Detalhes do Projeto Jiquiri</Button>
            </div>

        </div>
    )
}