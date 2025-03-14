"use client"

import * as React from "react"
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
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { weatherData } from "@/constants/weatherData";
import { colors } from "@/styles/colors"
import { ThermometerSun } from "lucide-react"


const chartConfig = {
    date: {
        label: "Data",
    },
    temperature: {
        label: "Temperatura",
        color: colors.Orange_Jiquiri,
    },
    humidity: {
        label: "Umidade",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function AreaChartComponent() {
    const [timeRange, setTimeRange] = React.useState("90d")

    const filteredData = weatherData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date("2024-06-30")
        let daysToSubtract = 90
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
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
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                        className="w-[160px] rounded-xl sm:ml-auto text-White_Jiquiri"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Últimos 3 meses" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="90d" className="rounded-lg">
                            Últimos 3 meses
                        </SelectItem>
                        <SelectItem value="30d" className="rounded-lg">
                            Últimos 30 Dias
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            Últimos 7 Dias
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-temperature)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-temperature)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillHumidity" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-humidity)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-humidity)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("pt-BR", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("pt-BR", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }}
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="temperature"
                            type="natural"
                            fill="url(#fillTemperature)"
                            stroke="var(--color-temperature)"
                            stackId="a"
                        />
                        <Area
                            dataKey="humidity"
                            type="natural"
                            fill="url(#fillHumidity)"
                            stroke="var(--color-humidity)"
                            stackId="a"
                        />
                        <ChartLegend className="text-White_Jiquiri" content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
