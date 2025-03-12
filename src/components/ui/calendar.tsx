import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";

import "react-day-picker/style.css";

export function CalendarDatePick() {
    const [selected, setSelected] = useState<Date>();
    const defaultClassNames = getDefaultClassNames();

    return (
        <DayPicker
            animate
            mode="single"
            locale={ptBR}
            selected={selected}
            onSelect={setSelected}
            classNames={{
                today: `border-White_Jiquiri text-white bg-slate-500/40 rounded-full`,
                selected: `bg-White_Jiquiri font-bold text-Black_Jiquiri border-slate-500 rounded-full`,
                root: `${defaultClassNames.root} shadow-lg p-5 bg-black rounded-xl shadow-lg`,
                chevron: `fill-White_Jiquiri`,

            }}

        />
    );
}