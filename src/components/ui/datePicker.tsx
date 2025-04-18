"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DayPicker, getDefaultClassNames } from "react-day-picker"
import { ptBR } from "react-day-picker/locale";

import "react-day-picker/style.css";

interface DatePickerProps {
    onDateChange?: (date: Date | undefined) => void;
}

export function DatePicker({ onDateChange }: DatePickerProps) {
    const [date, setDate] = React.useState<Date>()
    const [open, setOpen] = React.useState(false)
    const defaultClassNames = getDefaultClassNames();

    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        if (onDateChange) {
            onDateChange(selectedDate);
        }
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal bg-Black_Jiquiri",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "dd/MM/yyyy") : <span>Selecione uma Data</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
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
            </PopoverContent>
        </Popover>
    )
}