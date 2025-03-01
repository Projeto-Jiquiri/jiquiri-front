
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

                <div className="flex flex-col flex-1 justify-center items-center xl:mt-14 xl:gap-14 2xl:mt-16 2xl:gap-16">
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="font-poppins font-extralight text-Black_Jiquiri xl:text-3xl 2xl:text-4xl">O que é</h3>
                        <h1 className="font-catilde text-Black_Jiquiri xl:text-7xl xl:-mt-3 2xl:text-8xl 2xl:-mt-4">Projeto Jiquiri?</h1>
                    </div>

                    <div>
                        <LottieAnimation
                            animationData={teapot}
                            loop
                            autoPlay
                            className="xl:w-[24vw] 2xl:w-[20vw] h-auto"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center xl:gap-6 2xl:gap-8">
                        <h2 className="font-poppins text-Black_Jiquiri text-center xl:w-[55%] xl:text-xl 2xl:w-[50%] 2xl:text-2xl">Lorem ipsum dolor sit amet consectetur.</h2>
                        <p className="font-poppins text-Black_Jiquiri text-center font-extralight xl:w-[40vw] xl:text-lg 2xl:w-[35vw] 2xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                            <br />
                            <br />
                            Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                        </p>
                    </div>

                    <div className="flex justify-center items-center bg-Dark_Green_Jiquiri w-screen shadow xl:gap-36 xl:py-6 2xl:gap-40 2xl:py-8">
                        <div className="flex flex-col justify-center items-center xl:gap-6 2xl:gap-8">
                            <h3 className="font-poppins text-White_Jiquiri text-center xl:text-lg xl:w-72 2xl:text-xl 2xl:w-80">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="font-poppins font-extralight text-White_Jiquiri text-center xl:text-base xl:w-80 2xl:text-lg 2xl:w-96">
                                Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                                <br />
                                <br />
                                Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim. Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                            </p>
                        </div>

                        <Image
                            alt="Divisor Vertical"
                            src={divisorVertical}
                            className="xl:w-2.5 xl:h-[20vw] 2xl:w-3 2xl:h-[20vw]"
                        />

                        <div className="flex justify-center items-center">
                            <Image
                                alt="componentes"
                                src={componentesImage}
                                className="xl:w-[24vw] 2xl:w-[20vw] h-auto"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center xl:gap-36 xl:mt-6 2xl:gap-40 2xl:mt-8">
                        <div className="flex justify-center items-center">
                            <Image
                                alt="exemploIMG"
                                src={projetoJiquiriExemplo}
                                className="xl:w-[24vw] 2xl:w-[20vw] h-auto"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center xl:gap-6 2xl:gap-8">
                            <h3 className="font-poppins text-Black_Jiquiri text-center xl:text-xl xl:w-80 2xl:text-2xl 2xl:w-96">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="font-poppins font-extralight text-Black_Jiquiri text-center xl:text-base xl:w-80 2xl:text-lg 2xl:w-96">
                                Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                                <br />
                                <br />
                                Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                            </p>
                        </div>
                    </div>

                </div>

                <DefaultFooter />

                <div className="absolute xl:top-[30%] xl:right-[3%] 2xl:top-[35%] 2xl:right-[3.5%]">
                    <VerticalDividerDashed />
                </div>
            </main>
        </div>
    )
}