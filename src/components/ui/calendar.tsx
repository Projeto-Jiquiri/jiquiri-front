import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";

import "react-day-picker/style.css";

interface CalendarProps {
    onDateChange?: (date: Date | undefined) => void;
}

export function CalendarDatePick({ onDateChange }: CalendarProps) {
    const [date, setDate] = useState<Date>()
    const defaultClassNames = getDefaultClassNames();

    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        if (onDateChange) {
            onDateChange(selectedDate);
        }
    };

    return (
        <DayPicker
            animate
            mode="single"
            selected={date}
            locale={ptBR}
            onSelect={handleSelect}
            disabled={{ after: new Date() }}
            classNames={{
                today: `border-White_Jiquiri text-white bg-slate-500/40 rounded-full`,
                selected: `bg-White_Jiquiri font-bold text-Black_Jiquiri border-slate-500 rounded-full`,
                root: `${defaultClassNames.root} shadow-lg p-5 bg-black rounded-xl shadow-lg`,
                chevron: `fill-White_Jiquiri`,
            }}
        />
    );
}