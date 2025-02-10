import Image from "next/image";
import Link from "next/link";

import DefaultFooter from "@/components/defaultFooter";
import { VerticalDividerDashed } from "@/components/divider";
import Header from "@/components/header";
import LottieAnimation from "@/components/animations/animationLottie";

import GreenFabricAnimation from "@/assets/Animations/greenFabric.json";
import ProfYomara from "@/assets/PNG/Prof_yomara.png";
import ProfTiago from "@/assets/PNG/prof_Tiago.png";


export default function SobrePage() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center 2xl:gap-16">
                <Header />

                <div className="flex flex-col justify-center items-center 2xl:gap-4">
                    <div className="flex flex-col justify-center items-center 2xl:gap-4">
                        <h1 className="font-catilde text-Black_Jiquiri 2xl:text-7xl">Sobre o Projeto</h1>
                        <p className="font-poppins font-light text-center text-Gray_Jiquiri 2xl:text-xl 2xl:w-80 ">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div>
                        <LottieAnimation
                            animationData={GreenFabricAnimation}
                            loop
                            autoPlay
                            className="2xl:w-[40vw] 2xl:h-[30vw]"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center 2xl:w-[35%]">
                        <p className="font-poppins font-light text-black 2xl:text-lg text-center">Lorem ipsum dolor sit amet consectetur. Suscipit dictum eu suspendisse cras tellus lectus urna cras. Lectus nunc convallis dictum eget porta platea turpis tempor dignissim. Facilisi faucibus donec enim orci. Tempus aliquam tincidunt non eros massa pharetra. Neque metus et nisl ac eu odio.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur. Suscipit dictum eu suspendisse cras tellus lectus urna cras. Lectus nunc convallis dictum eget porta platea turpis tempor dignissim. Facilisi faucibus donec enim orci. Tempus aliquam tincidunt non eros massa pharetra. Neque metus et nisl ac eu odio.
                        </p>

                    </div>
                </div>
                <div className="absolute 2xl:top-[55%] 2xl:right-[3.5%]">
                    <VerticalDividerDashed />
                </div>

                <div className="flex flex-col w-screen justify-center items-center shadow bg-Dark_Green_Jiquiri 2xl:pt-6 2xl:pb-8 2xl:gap-8">
                    <div className="flex flex-col justify-center items-center 2xl:gap-2">
                        <h1 className="font-catilde text-White_Jiquiri 2xl:text-5xl">Agradecimentos</h1>
                        <p className="text-White_Jiquiri font-poppins text-center font-light 2xl:text-xl 2xl:w-80">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="flex justify-center items-center 2xl:gap-48">
                        <div className="flex flex-col justify-center items-center 2xl:gap-4">
                            <h2 className="font-poppins font-light text-White_Jiquiri 2xl:text-xl">Profª. Yomara</h2>
                            <Image
                                src={ProfYomara}
                                alt="Professora Yomara"
                                className="2xl:w-48 2xl:h-auto"
                            />
                            <Link href="https://" target="_blank" className="text-White_Jiquiri font-poppins font-light 2xl:text-sm p-2 hover-card">@YomaraExemplo</Link>
                        </div>

                        <div className="flex flex-col justify-center items-center 2xl:gap-4">
                            <h2 className="font-poppins font-light text-White_Jiquiri 2xl:text-xl">Prof. Thiago</h2>
                            <Image
                                src={ProfTiago}
                                alt="Professor Tiago"
                                className="2xl:w-48 2xl:h-auto"
                            />
                            <Link href="https://" target="_blank" className="text-White_Jiquiri font-poppins font-light 2xl:text-sm p-2 hover-card">@ThiagoExemplo</Link>
                        </div>
                    </div>
                </div>

                <DefaultFooter />

            </main>
        </div>
    )
}