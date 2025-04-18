"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { format, parse } from 'date-fns' // Importar a função format

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

import { Droplet } from "lucide-react"
import { colors } from "@/styles/colors"
import { useDaysAveragesForOneMonth } from "@/services/API/adapters/useDailyAveragesForDays"

const chartConfig = {
    temperature_avg: {
        label: "Temperatura",
        color: colors.Orange_Jiquiri,
    },
    airHumidity_avg: {
        label: "Umidade/Ar",
        color: colors.Light_Green_Jiquiri,
    },
    soilHumidity_avg: {
        label: "Umidade/Solo",
        color: colors.Dark_Green_Jiquiri,
    },
} satisfies ChartConfig

export function BarChartComponent() {
    const { averages, isLoading, message, isError, error } = useDaysAveragesForOneMonth("previous")
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("temperature_avg")
    const [interval, setInterval] = React.useState<number>(0)  // Estado para o intervalo

    React.useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            if (windowWidth <= 768) {
                setInterval(4)
            } else {
                setInterval(0)
            }
        }

        handleResize() // Chama a função no início
        window.addEventListener("resize", handleResize)  // Ouve mudanças no tamanho da janela

        return () => window.removeEventListener("resize", handleResize)  // Limpeza do evento
    }, [])

    const total = {
        temperature_avg: averages.reduce((acc, curr) => acc + (curr.temperature_avg ?? 0), 0),
        airHumidity_avg: averages.reduce((acc, curr) => acc + (curr.air_humidity_avg ?? 0), 0),
        soilHumidity_avg: averages.reduce((acc, curr) => acc + (curr.soil_humidity_avg ?? 0), 0),
    }

    if (isLoading) {
        return (
            <Card className="shadow-lg w-11/12">
                <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                    <div className="flex flex-1 flex-col text-White_Jiquiri justify-center gap-1 px-6 py-5 sm:py-6">
                        <CardTitle className="flex items-center gap-2">
                            Barras - Dados/Dia
                            <Droplet color={colors.White_Jiquiri} className="size-5" />
                        </CardTitle>
                        <CardDescription>Carregando...</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        )
    }

    if (isError) {
        return (
            <Card className="shadow-lg w-11/12">
                <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                    <div className="flex flex-1 flex-col text-White_Jiquiri justify-center gap-1 px-6 py-5 sm:py-6">
                        <CardTitle className="flex items-center gap-2">
                            Barras - Dados/Dia
                            <Droplet color={colors.White_Jiquiri} className="size-5" />
                        </CardTitle>
                        <CardDescription>{message || error?.message}</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        )
    }

    if (message) {
        return (
            <Card className="shadow-lg w-11/12">
                <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                    <div className="flex flex-1 flex-col text-White_Jiquiri justify-center gap-1 px-6 py-5 sm:py-6">
                        <CardTitle className="flex items-center gap-2">
                            Barras - Dados/Dia
                            <Droplet color={colors.White_Jiquiri} className="size-5" />
                        </CardTitle>
                        <CardDescription>{message}</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        )
    }

    return (
        <Card className="shadow-lg w-11/12">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col text-White_Jiquiri justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex items-center gap-2">
                        Barras - Dados/Dia
                        <Droplet color={colors.White_Jiquiri} className="size-5" />
                    </CardTitle>
                    <CardDescription>
                        Gráfico de barras com dados de temperatura, umidade do ar e do solo por dia.
                    </CardDescription>
                </div>
                <div className="flex">
                    {/* Botões para alternar entre os tipos de dados */}
                    {Object.keys(chartConfig).map((key) => {
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
                                    {total[chart].toFixed(1)}
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
                        data={averages}
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
                            interval={interval}
                            tickFormatter={(date) => {
                                const parsedDate = parse(date, 'dd/MM/yyyy', new Date())
                                return format(parsedDate, 'dd/MM')
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey={activeChart}
                                    labelFormatter={(value) => value}
                                />
                            }
                        />
                        {activeChart === "temperature_avg" && (
                            <Bar
                                dataKey="temperature_avg"
                                fill={chartConfig.temperature_avg.color}
                                name={chartConfig.temperature_avg.label}
                            />
                        )}
                        {activeChart === "airHumidity_avg" && (
                            <Bar
                                dataKey="air_humidity_avg"
                                fill={chartConfig.airHumidity_avg.color}
                                name={chartConfig.airHumidity_avg.label}
                            />
                        )}
                        {activeChart === "soilHumidity_avg" && (
                            <Bar
                                dataKey="soil_humidity_avg"
                                fill={chartConfig.soilHumidity_avg.color}
                                name={chartConfig.soilHumidity_avg.label}
                            />
                        )}
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
