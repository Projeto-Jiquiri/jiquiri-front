import Image from "next/image";
import DefaultFooter from "@/components/defaultFooter";
import { VerticalDividerDashed } from "@/components/divider";
import Header from "@/components/header";
import TechCube from "@/components/techCube";

import equipeImage from '@/assets/PNG/equipe.png';
import reactLogo from '@/assets/SVG/reactLogo.svg';

export default function EquipePage() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center">
                <Header />

                <div className="flex flex-1 flex-col justify-center items-center 2xl:mt-16 2xl:gap-16">
                    <div className="flex flex-col justify-center items-center 2xl:gap-10">
                        <h1 className="font-catilde text-Black_Jiquiri 2xl:text-7xl">Equipe</h1>

                        <div className="flex flex-col justify-center items-center 2xl:gap-8">
                            <h3 className="font-poppins text-Black_Jiquiri text-center 2xl:text-2xl 2xl:w-96">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="font-poppins text-Black_Jiquiri font-extralight text-center 2xl:w-[35vw] 2xl:text-xl">
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
                            className="2xl:w-[38vw] 2xl:h-auto"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center 2xl:gap-8">
                        <h3 className="font-catilde font-semibold text-center text-Black_Jiquiri 2xl:w-80 2xl:text-3xl">Tecnologias Utilizadas no Projeto</h3>
                        <p className="font-poppins text-Black_Jiquiri font-extralight text-center 2xl:w-[35vw] 2xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur. Morbi maecenas est nisi pellentesque sit nisl. Morbi faucibus blandit turpis nec duis ut pellentesque venenatis tellus.
                            Porttitor tristique blandit proin commodo bibendum commodo integer
                        </p>
                    </div>

                    <div className="grid 2xl:grid-cols-3 2xl:gap-10">
                        <TechCube title="React" image={reactLogo} alt="React Logo" />
                        <TechCube title="React" image={reactLogo} alt="React Logo" />
                        <TechCube title="React" image={reactLogo} alt="React Logo" />
                        <TechCube title="React" image={reactLogo} alt="React Logo" />
                        <TechCube title="React" image={reactLogo} alt="React Logo" />
                    </div>

                </div>
              
                <DefaultFooter />

                <div className="absolute 2xl:top-[35%] 2xl:left-[3.5%]">
                    <VerticalDividerDashed />
                </div>
            </main>
        </div>
    )
}