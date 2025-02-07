import Image from "next/image";

import verticalDividerDashed from "@/assets/SVG/line_vertical.svg";


export function VerticalDividerDashed() {
    return (
        <Image
            src={verticalDividerDashed}
            alt="Vertical Divider Dashed"
            className="2xl:w-[2px] 2xl:h-[550px] select-none"
            draggable={false}
        />
    )
}