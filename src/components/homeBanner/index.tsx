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
        <div className="flex flex-1 flex-col justify-center items-center bg-Dark_Green_Jiquiri lg:mt-12 xl:mt-6 2xl:mt-8">
            <div className="flex flex-1 justify-center items-center w-screen lg:p-12 lg:gap-16 xl:p-14 xl:gap-16 2xl:p-16 2xl:gap-20">
                <div className="flex justify-center items-center lg:gap-12 xl:gap-14 2xl:gap-16">
                    <p className=" text-White_Jiquiri font-poppins font-light text-center lg:text-sm xl:text-base lg:w-52 xl:w-56 2xl:text-lg 2xl:w-60">Lorem ipsum dolor sit amet consectetur. Quis lorem massa tempus neque fringilla. Malesuada vulputate cursus interdum nunc sapien nunc.</p>

                    <Image
                        src={dividerComponent}
                        alt="dividerComponent"
                        className="lg:w-2 xl:w-2 2xl:w-2 h-auto select-none"
                        draggable={false}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-0">
                    <Image
                        src={logo}
                        alt="logo-banner"
                        className="lg:w-[80%] xl:w-[50%] 2xl:w-[50%] h-auto select-none"
                        draggable={false}
                    />
                    <h3 className="text-White_Jiquiri font-catilde tracking-wider lg:text-3xl xl:text-4xl 2xl:text-4xl">JIQUIRI</h3>
                </div>

                <div className="flex justify-center items-center lg:gap-12 xl:gap-14 2xl:gap-16">
                    <Image
                        src={dividerComponent}
                        alt="dividerComponent"
                        className="lg:w-2 xl:w-2 2xl:w-2 h-auto select-none"
                        draggable={false}
                    />

                    <p className="text-White_Jiquiri font-poppins text-center font-extralight tracking-wide lg:text-sm xl:text-base lg:w-48 xl:w-56 2xl:text-lg 2xl:w-60">
                        Av. dos Universitários, s/n
                        Jaderlândia, Castanhal
                        PA, 68746-630
                    </p>
                </div>

            </div>

            <Image
                src={horizontalDividerDashed}
                alt="horizontal divider"
                className="lg:w-[40%] xl:w-[50%] 2xl:w-[50%] h-1 select-none"
                draggable={false}

            />

            <div className="flex justify-center items-center lg:gap-16 lg:p-10 xl:gap-20 xl:p-14 2xl:gap-24 2xl:p-16">
                <Button variant='outline' onClick={() => router.push('/projeto-jiquiri')} className="bg-White_Jiquiri hover-card border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg text-center leading-5 shadow tracking-wider font-semibold text-wrap font-catilde rounded-full lg:w-52 xl:w-56 lg:h-12 xl:h-12 2xl:w-60 2xl:h-14">Descubra o Projeto Jiquiri</Button>
                <Button variant='outline' onClick={() => router.push('/relatorios')} className="bg-White_Jiquiri hover-card border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg text-center leading-5 shadow tracking-wider font-semibold text-wrap font-catilde rounded-full lg:w-52 xl:w-56 lg:h-12 xl:h-12 2xl:w-60 2xl:h-14">Veja os últimos Relatórios</Button>
                <Button variant='outline' onClick={() => router.push('/sobre')} className="bg-White_Jiquiri hover-card border-Black_Jiquiri border-2 text-Gray_Jiquiri text-lg text-center leading-5 shadow tracking-wider font-semibold text-wrap font-catilde rounded-full lg:w-52 xl:w-56 lg:h-12 xl:h-12 2xl:w-60 2xl:h-14">Detalhes do Projeto Jiquiri</Button>
            </div>

        </div>
    )
}