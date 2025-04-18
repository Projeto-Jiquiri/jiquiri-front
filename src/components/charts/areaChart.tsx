"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { colors } from "@/styles/colors"
import { ArrowDownLeftFromCircle, ThermometerSun } from "lucide-react"
import { FilterType, useFilteredRecords } from "@/services/API/adaptersApiData"
import { hourLabelMap } from "@/constants/hourLabelMap"
import { DatePicker } from "../ui/datePicker"

const chartConfig = {
    date: {
        label: "Data",
    },
    temperature: {
        label: "Temperatura",
        color: colors.Orange_Jiquiri,
    },
    airHumidity: {
        label: "Umidade/Ar",
        color: colors.Light_Green_Jiquiri,
    },
    soilHumidity: {
        label: "Umidade/Solo",
        color: colors.Dark_Green_Jiquiri,
    },
} satisfies ChartConfig

function hasColor(config: { label: string } | { label: string; color: string }): config is { label: string; color: string } {
    return "color" in config
}

export function AreaChartComponent() {
    const [timeRange, setTimeRange] = useState<FilterType>("yesterday")
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const { data, isLoading, message, error, isError } = useFilteredRecords(
        selectedDate || timeRange
    )

    useEffect(() => {
        console.log("Dados filtrados:", data)
    }, [data])

    const handleDateChange = (date: Date | undefined) => {
        if (date) {
            setSelectedDate(date)
        } else {
            setSelectedDate(null)
        }
    }

    const handleTimeRangeChange = (value: string) => {
        setTimeRange(value as FilterType)
        if (value !== "specific") {
            setSelectedDate(null)
        }
    }

    const chartData = data.temperature.map((tempEntry) => {
        const humidityEntry = data.air_humidity.find(
            (h) => h.hour === tempEntry.hour && h.date === tempEntry.date
        )

        const soilHumidityEntry = data.soil_humidity.find(
            (s) => s.hour === tempEntry.hour && s.date === tempEntry.date
        )

        return {
            hour: tempEntry.hour ?? null,
            temperature: tempEntry.value ?? null,
            airHumidity: humidityEntry?.value ?? null,
            soilHumidity: soilHumidityEntry?.value ?? null,
            date: tempEntry.date ?? null,
        }
    })

    return (
        <Card className="w-11/12 md:11/12 lg:w-10/12 xl:w-6/12 2xl:w-7/12 shadow-lg">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-White_Jiquiri text-center sm:text-left">
                    <CardTitle className="flex items-center gap-2">
                        Temperatura e Umidade
                        <ThermometerSun color={colors.White_Jiquiri} className="size-5" />
                    </CardTitle>
                    <CardDescription>
                        Temperatura e umidade registradas nos últimos meses.
                    </CardDescription>
                </div>
                <Select
                    value={timeRange.toString()}
                    onValueChange={handleTimeRangeChange}
                >
                    <SelectTrigger
                        className="w-[160px] rounded-xl sm:ml-auto text-White_Jiquiri"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Ontem" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="yesterday" className="rounded-lg">
                            Ontem
                        </SelectItem>
                        <SelectItem value="today" className="rounded-lg">
                            Hoje
                        </SelectItem>
                        <SelectItem value="specific" className="rounded-lg">
                            Específico
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                {isLoading && (
                    <div className="flex flex-col h-full w-full items-center justify-center">
                        <p className="text-White_Jiquiri">Carregando...</p>
                    </div>
                )}
                {message && (
                    <div className="flex flex-col gap-8 h-full w-full items-center justify-center">
                        <p className="text-White_Jiquiri text-center">{message}</p>
                        <a
                            className="flex justify-center items-center gap-2 text-Light_Green_Jiquiri font-light hover:underline"
                            href="http://"
                        >
                            Saiba Mais
                            <ArrowDownLeftFromCircle color={colors.Light_Green_Jiquiri} className="size-4" />
                        </a>
                    </div>
                )}
                {isError && (
                    <div className="flex h-full w-full items-center justify-center">
                        <p className="text-White_Jiquiri text-center">
                            Erro ao carregar os dados: <br /> {error?.message}
                        </p>
                    </div>
                )}
                {timeRange === "specific" && (
                    <div className="flex flex-col h-full w-full items-center justify-center gap-2 mb-4">
                        <DatePicker onDateChange={handleDateChange} />
                    </div>
                )}
                {(!isLoading && !isError && (!message || (timeRange === "specific" && selectedDate))) && (
                    <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={chartConfig.temperature.color} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={chartConfig.temperature.color} stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="fillAirHumidity" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={chartConfig.airHumidity.color} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={chartConfig.airHumidity.color} stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="fillSoilHumidity" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={chartConfig.soilHumidity.color} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={chartConfig.soilHumidity.color} stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="hour"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value: keyof typeof hourLabelMap) =>
                                    hourLabelMap[value] || value
                                }
                            />

                            <ChartTooltip
                                cursor
                                content={({ label, payload }) => (
                                    <div className="rounded-lg bg-Black_Jiquiri/90 p-4 text-sm text-white shadow-md space-y-2">
                                        <p className="text-base font-semibold">
                                            {hourLabelMap[label as keyof typeof hourLabelMap] || label}
                                        </p>
                                        {payload?.map((entry, index) => {
                                            const config = chartConfig[entry.dataKey as keyof typeof chartConfig]

                                            const value = Number(entry.value).toFixed(2)
                                            let unit = ""

                                            if (entry.dataKey === "temperature") unit = "º"
                                            else if (
                                                entry.dataKey === "airHumidity" ||
                                                entry.dataKey === "soilHumidity"
                                            )
                                                unit = "%"

                                            return (
                                                <div key={index} className="flex justify-between gap-8">
                                                    <span className="flex items-center gap-2">
                                                        {hasColor(config) && (
                                                            <span
                                                                className="inline-block size-3 rounded-sm"
                                                                style={{ backgroundColor: config.color }}
                                                            />
                                                        )}
                                                        {config.label}
                                                    </span>
                                                    <span className="tabular-nums">
                                                        {value}
                                                        {unit}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            />

                            <Area
                                dataKey="temperature"
                                type="natural"
                                fill="url(#fillTemperature)"
                                stroke={chartConfig.temperature.color}
                                stackId="a"
                            />
                            <Area
                                dataKey="airHumidity"
                                type="natural"
                                fill="url(#fillAirHumidity)"
                                stroke={chartConfig.airHumidity.color}
                                stackId="a"
                            />
                            <Area
                                dataKey="soilHumidity"
                                type="natural"
                                fill="url(#fillSoilHumidity)"
                                stroke={chartConfig.soilHumidity.color}
                                stackId="a"
                            />
                            <ChartLegend className="text-White_Jiquiri" content={<ChartLegendContent />} />
                        </AreaChart>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    )
}