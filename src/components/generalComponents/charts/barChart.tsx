"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { format, parse } from 'date-fns' // Importar a função format
import {
    Thermometer,
    Droplet,
    CloudyIcon,
} from "lucide-react";

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

import { colors } from "@/styles/colors"
import { useDaysAveragesForOneMonth } from "@/services/API/adapters/useDailyAveragesForDays"
import { Skeleton } from "@/components/ui/skeleton"

const chartConfig = {
    temperature_avg: {
        label: "Temperatura",
        color: colors.Orange_Jiquiri,
        icon: Thermometer,
    },
    airHumidity_avg: {
        label: "Umidade/Ar",
        color: colors.Light_Green_Jiquiri,
        icon: CloudyIcon,
    },
    soilHumidity_avg: {
        label: "Umidade/Solo",
        color: colors.Dark_Green_Jiquiri,
        icon: Droplet,
    },
} satisfies ChartConfig

export function BarChartComponent() {
    const { averages, isLoading, message, isError, error } = useDaysAveragesForOneMonth("previous")
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("temperature_avg")
    const [interval, setInterval] = React.useState<number>(0)  // Estado para o intervalo
    const ActiveIcon = chartConfig[activeChart].icon;

    React.useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            if (windowWidth <= 768) {
                setInterval(4)
            } else {
                setInterval(0)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)  // Limpeza do evento
    }, [])

    // Total dos valores válidos
    const total = {
        temperature_avg: averages.reduce((acc, curr) => acc + (curr.temperature_avg ?? 0), 0),
        airHumidity_avg: averages.reduce((acc, curr) => acc + (curr.air_humidity_avg ?? 0), 0),
        soilHumidity_avg: averages.reduce((acc, curr) => acc + (curr.soil_humidity_avg ?? 0), 0),
    }

    // Filtra os dias válidos (onde todos os valores são diferentes de null ou undefined)
    const validDays = averages.filter(
        (item) =>
            item.temperature_avg != null &&
            item.air_humidity_avg != null &&
            item.soil_humidity_avg != null
    ).length;

    // Calcula a média, evitando dividir por 0
    const averagesWithTotal = {
        temperature_avg: validDays ? total.temperature_avg / validDays : 0,
        airHumidity_avg: validDays ? total.airHumidity_avg / validDays : 0,
        soilHumidity_avg: validDays ? total.soilHumidity_avg / validDays : 0,
    }

    if (isLoading) {
        return (
            <Card className="shadow-lg w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
                <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                    <div className="flex flex-1 flex-col text-White_Jiquiri justify-center gap-1 px-6 py-5 sm:py-6">
                        <CardTitle className="flex items-center gap-2">
                            Barras - Dados/Dia
                            <Droplet color={colors.White_Jiquiri} className="size-5" />
                        </CardTitle>
                        <CardDescription>Carregando...</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex justify-center items-center gap-8 px-2 sm:p-6">
                    <Skeleton className="h-[200px] w-full sm:h-[250px] md:h-[300px] mb-4" />
                </CardContent>

            </Card>
        )
    }

    if (isError) {
        return (
            <Card className="shadow-lg w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
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
            <Card className="shadow-lg w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
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
        <Card className="shadow-lg w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col text-White_Jiquiri justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex items-center gap-2">
                        Barras - Dados/Dia
                        <ActiveIcon color={colors.White_Jiquiri} className="size-5" />
                    </CardTitle>
                    <CardDescription>
                        Gráfico de barras com dados de temperatura, umidade do ar e do solo por dia.
                    </CardDescription>
                </div>
                <div className="flex">
                    {/* Botões para alternar entre os tipos de dados */}
                    {Object.keys(chartConfig).map((key) => {
                        const chart = key as keyof typeof chartConfig;
                        const { label, icon: Icon } = chartConfig[chart];

                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="relative z-30 flex flex-1 cursor-pointer flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Icon className="h-3 w-3 shrink-0" style={{ color: chartConfig[chart].color }} />
                                    {label}
                                </span>

                                <span className="text-lg font-bold leading-none sm:text-3xl">
                                    {averagesWithTotal[chart].toFixed(1)}
                                </span>
                            </button>
                        );
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
