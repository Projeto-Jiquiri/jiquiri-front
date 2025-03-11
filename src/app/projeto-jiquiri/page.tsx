
import Image from "next/image";

import Header from "@/components/header";
import LottieAnimation from "@/components/animations/animationLottie";

import teapot from '@/assets/Animations/teapot.json';
import componentesImage from '@/assets/PNG/components.png';
import divisorVertical from "@/assets/SVG/dividerComponent.svg";
import projetoJiquiriExemplo from "@/assets/PNG/projeto-jiquiri.png";
import DefaultFooter from "@/components/defaultFooter";
import { VerticalDividerDashed } from "@/components/divider";



export default function ProjetoJiquiriPage() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center">
                <Header />

                <div className="flex flex-col flex-1 justify-center items-center mt-6 gap-10 md:mt-6 md:gap-12 lg:mt-8 lg:gap-12 xl:mt-14 xl:gap-14 2xl:mt-16 2xl:gap-16">
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="font-poppins font-extralight text-Black_Jiquiri text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl">O que é</h3>
                        <h1 className="font-catilde text-Black_Jiquiri text-5xl -mt-2 md:text-7xl md:-mt-2 lg:text-7xl lg:-mt-3 xl:text-8xl xl:-mt-3 2xl:text-8xl 2xl:-mt-4">Projeto Jiquiri?</h1>
                    </div>

                    <div>
                        <LottieAnimation
                            animationData={teapot}
                            loop
                            autoPlay
                            className="w-[75vw] md:w-[50vw] lg:w-[25vw] xl:w-[24vw] 2xl:w-[20vw] h-auto"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-8 xl:gap-6 2xl:gap-8">
                        <h2 className="font-poppins text-Black_Jiquiri text-center w-[55%] text-xl md:w-[50%] md:text-2xl lg:w-[35%] lg:text-2xl xl:w-[55%] xl:text-xl 2xl:w-[50%] 2xl:text-2xl">Lorem ipsum dolor sit amet consectetur.</h2>
                        <p className="font-poppins text-Black_Jiquiri text-center font-extralight w-[75%] text-lg md:w-[60%] md:text-xl lg:text-lg lg:w-[80vw] xl:w-[40vw] xl:text-lg 2xl:w-[35vw] 2xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                            <br />
                            <br />
                            Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                        </p>
                    </div>

                    <div className="flex justify-center items-center flex-row max-md:flex-col-reverse bg-Dark_Green_Jiquiri w-screen shadow gap-12 py-8 md:gap-8 md:py-8 lg:gap-20 lg:py-8 xl:gap-36 xl:py-6 2xl:gap-40 2xl:py-8">
                        <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 xl:gap-6 2xl:gap-8">
                            <h3 className="font-poppins text-White_Jiquiri text-center text-lg w-64 md:text-lg md:w-64 lg:text-lg lg:w-80 xl:text-lg xl:w-72 2xl:text-xl 2xl:w-80">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="font-poppins font-extralight text-White_Jiquiri text-center text-base w-80 md:text-base md:w-72 lg:text-base lg:w-80 xl:text-base xl:w-80 2xl:text-lg 2xl:w-96">
                                Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                                <br />
                                <br />
                                Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim. Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                            </p>
                        </div>

                        <Image
                            alt="Divisor Vertical"
                            src={divisorVertical}
                            className="max-md:hidden w-2 md:w-2.5 lg:w-2.5 xl:w-2.5 xl:h-[20vw] 2xl:w-3 2xl:h-[20vw]"
                        />

                        <div className="flex justify-center items-center">
                            <Image
                                alt="componentes"
                                src={componentesImage}
                                className="w-[70vw] md:w-[40vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[20vw] h-auto"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center max-md:flex-col gap-16 mt-6 md:gap-16 md:mt-6 lg:gap-16 lg:mt-8 xl:gap-36 xl:mt-6 2xl:gap-40 2xl:mt-8">
                        <div className="flex justify-center items-center">
                            <Image
                                alt="exemploIMG"
                                src={projetoJiquiriExemplo}
                                className="w-[60vw] md:w-[40vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[20vw] h-auto"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:-gap-8 xl:gap-6 2xl:gap-8">
                            <h3 className="font-poppins text-Black_Jiquiri text-center text-lg w-80 md:text-lg lg:text-lg lg:w-80 md:w-72 xl:text-xl xl:w-80 2xl:text-2xl 2xl:w-96">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="font-poppins font-extralight text-Black_Jiquiri text-center text-base w-80 md:text-base md:w-72 lg:text-base lg:w-80 xl:text-base xl:w-80 2xl:text-lg 2xl:w-96">
                                Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                                <br />
                                <br />
                                Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                            </p>
                        </div>
                    </div>

                </div>

                <DefaultFooter />

                <div className="absolute visible max-md:hidden md:top-[30%] md:right-[3%] lg:top-[20%] lg:right-[3%] xl:top-[30%] xl:right-[3%] 2xl:top-[35%] 2xl:right-[3.5%]">
                    <VerticalDividerDashed />
                </div>
            </main>
        </div>
    )
}