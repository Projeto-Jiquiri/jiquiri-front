import Image from "next/image";

import verticalDividerDashed from "@/assets/SVG/line_vertical.svg";


export function VerticalDividerDashed() {
    return (
        <Image
            src={verticalDividerDashed}
            alt="Vertical Divider Dashed"
            className="w-[.28vw] h-[30vh] md:w-[.9vw] md:h-[40vh] lg:w-[.09vw] xl:w-[1vw] xl:h-[55vh] 2xl:w-[1vw] 2xl:h-[60vh] select-none"
            draggable={false}
        />
    )
}