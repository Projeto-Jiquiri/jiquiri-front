"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import { weatherData } from "@/constants/weatherData"
import { Droplet } from "lucide-react"
import { colors } from "@/styles/colors"


const chartConfig = {
    views: {
        label: "Valor: ",
    },
    temperature: {
        label: "Temperatura",
        color: colors.Orange_Jiquiri,
    },
    humidity: {
        label: "Umidade",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function BarChartComponent() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("temperature")

    const total = React.useMemo(
        () => ({
            temperature: weatherData.reduce((acc, curr) => acc + curr.temperature, 0),
            humidity: weatherData.reduce((acc, curr) => acc + curr.humidity, 0),
        }),
        []
    )

    return (
        <Card className="shadow-lg w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col text-White_Jiquiri justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex items-center gap-2">
                        Barras - Dados/Dia
                        <Droplet color={colors.White_Jiquiri} className="size-5" />
                    </CardTitle>
                    <CardDescription>
                        Gráfico de barras com dados de temperatura e umidade por dia.
                    </CardDescription>
                </div>
                <div className="flex">
                    {["temperature", "humidity"].map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg font-bold leading-none sm:text-3xl">
                                    {total[key as keyof typeof total].toLocaleString()}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={weatherData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
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
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("pt-BR", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
