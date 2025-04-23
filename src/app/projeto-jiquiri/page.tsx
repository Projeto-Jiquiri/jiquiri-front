


import Header from "@/components/header";

import DefaultFooter from "@/components/defaultFooter";
import { VerticalDividerDashed } from "@/components/divider";
import WhatIsJiquiri from "@/components/projetoJiquiriPage/whatIsJiquiri";



export default function ProjetoJiquiriPage() {
    return (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
            <main className="flex flex-col justify-center items-center">
                <Header />

                <WhatIsJiquiri />

                <DefaultFooter />

                <div className="absolute visible max-md:hidden md:top-[30%] md:right-[3%] lg:top-[20%] lg:right-[3%] xl:top-[30%] xl:right-[3%] 2xl:top-[35%] 2xl:right-[3.5%]">
                    <VerticalDividerDashed />
                </div>
            </main>
        </div>
    )
}