import Image from "next/image";
import DefaultFooter from "@/components/defaultFooter";
import { VerticalDividerDashed } from "@/components/divider";
import Header from "@/components/header";
import TechCube from "@/components/techCube";

import horizontalDividerDashed from "@/assets/SVG/DividerHorizontalDashedGray.svg";
import equipeImage from '@/assets/PNG/equipe.png';
import reactLogo from '@/assets/SVG/reactLogo.svg';
import nextLogo from '@/assets/SVG/next.svg';
import tailwindLogo from '@/assets/SVG/tailwind.svg';
import tsLogo from '@/assets/SVG/tsLogo.svg';
import figmaLogo from '@/assets/SVG/figma.svg';
import tanstackQueryLogo from '@/assets/PNG/tanstackquery.png';
import pythonLogo from '@/assets/SVG/python-logo.svg';
import flaskLogo from '@/assets/PNG/flaskLogo.png';
// import gsapLogo from '@/assets/SVG/gsapLogo.svg';


export default function EquipePage() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center">
                <Header />

                <div className="flex flex-1 flex-col justify-center items-center lg:mt-10 lg:gap-12 xl:mt-14 xl:gap-14 2xl:mt-16 2xl:gap-16">
                    <div className="flex flex-col justify-center items-center lg:gap-6 xl:gap-8 2xl:gap-10">
                        <h1 className="font-catilde text-Black_Jiquiri lg:text-5xl xl:text-6xl 2xl:text-7xl">Equipe</h1>

                        <div className="flex flex-col justify-center items-center lg:gap-6 xl:gap-8 2xl:gap-8">
                            <h3 className="font-poppins text-Black_Jiquiri text-center lg:w-80 lg:text-lg xl:text-xl xl:w-96 2xl:text-2xl 2xl:w-96">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="font-poppins text-Black_Jiquiri font-extralight text-center lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                                Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                                <br />
                                <br />
                                Porttitor tristique blandit proin commodo bibendum commodo integer. Enim at praesent arcu proin arcu viverra mattis. Elit mauris aliquet nisl etiam enim.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Image
                            alt="Equipe"
                            src={equipeImage}
                            className="lg:w-[45vw] xl:w-[40vw] 2xl:w-[38vw] 2xl:h-auto"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center lg:gap-4 xl:gap-4 2xl:gap-8">
                        <h3 className="font-catilde font-semibold text-center text-Black_Jiquiri lg:w-72 lg:text-xl xl:w-80 xl:text-2xl 2xl:w-80 2xl:text-3xl">Tecnologias Utilizadas no Projeto</h3>
                        <p className="font-poppins text-Black_Jiquiri font-extralight text-center lg:w-[40vw] lg:text-lg xl:w-[40vw] xl:text-xl 2xl:w-[35vw] 2xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                            Porttitor tristique blandit proin commodo bibendum commodo integer
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center lg:gap-12 xl:gap-14 2xl:gap-16">
                        <div className="flex flex-col justify-center items-center lg:gap-6 xl:gap-8 2xl:gap-10">
                            <h4 className="font-catilde text-Black_Jiquiri lg:text-xl xl:text-2xl 2xl:text-3xl">Front-end</h4>
                            <div className="grid lg:grid-cols-3 xl:grid-cols-3 lg:gap-8 xl:gap-10 2xl:grid-cols-3 2xl:gap-10">
                                <TechCube title="React" image={reactLogo} url="https://react.dev/" alt="React Logo" />
                                <TechCube title="Next" image={nextLogo} url="https://nextjs.org/" borderHighlighter alt="Next Logo" />
                                <TechCube title="Tailwind" image={tailwindLogo} url="https://tailwindcss.com/" alt="Tailwind Logo" />
                                <TechCube title="TypeScript" image={tsLogo} url="https://www.typescriptlang.org/" alt="Typescript Logo" />
                                <TechCube title="Figma" image={figmaLogo} url="https://www.figma.com/" alt="Figma Logo" />
                                <TechCube title="Tanstack Query" image={tanstackQueryLogo} url="https://tanstack.com/query/latest" alt="Tanstack Logo" />
                                {/* <TechCube image={gsapLogo} url="https://gsap.com/" alt="Gsap Logo" /> */}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center lg:gap-6 xl:gap-8 2xl:gap-10">
                            <h4 className="font-catilde text-Black_Jiquiri lg:text-xl xl:text-2xl 2xl:text-3xl">Back-end</h4>
                            <div className="grid lg:grid-cols-3 xl:grid-cols-3 lg:gap-8 xl:gap-10 2xl:grid-cols-3 2xl:gap-10">
                                <TechCube title="Python" image={pythonLogo} url="https://www.python.org/" alt="Python Logo" />
                                <TechCube title="Flask" image={flaskLogo} url="https://flask.palletsprojects.com/en/stable/" alt="Flask Logo" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-screen ">
                        <Image
                            src={horizontalDividerDashed}
                            alt="horizontal divider"
                            className="w-[60%] h-2 lg:w-[35%] lg:h-2 xl:w-[40%] xl:h-2 2xl:w-[30%] 2xl:h-1 select-none"
                            draggable={false}

                        />
                    </div>

                </div>

                <DefaultFooter />

                <div className="absolute lg:top-[35%] lg:left-[3.5%] xl:top-[35%] xl:left-[3.5%] 2xl:top-[35%] 2xl:left-[3.5%]">
                    <VerticalDividerDashed />
                </div>
            </main>
        </div>
    )
}