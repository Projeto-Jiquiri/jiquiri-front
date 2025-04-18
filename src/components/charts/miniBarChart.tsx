"use client"

import { ThermometerSun, Droplet, Flower } from "lucide-react"
import { Bar, BarChart, XAxis } from "recharts"
import { parse, format } from "date-fns"
import { ptBR } from "date-fns/locale"

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
} from "@/components/ui/chart"

import { colors } from "@/styles/colors"
import { useWeeklyAverages } from "@/services/API/adapters/useWeekAverages"

const chartConfig = {
    temperature: {
        label: "Média da Temperatura",
        color: colors.Orange_Jiquiri,
        icon: ThermometerSun,
    },
    airHumidity: {
        label: "Média da Umidade/Ar",
        color: colors.Light_Green_Jiquiri,
        icon: Droplet,
    },
    soilHumidity: {
        label: "Média da Umidade/Solo",
        color: colors.Dark_Green_Jiquiri,
        icon: Flower,
    },
} satisfies ChartConfig

interface WeatherData {
    date: string
    temperature: number | null
    airHumidity: number | null
    soilHumidity: number | null
}

export function MiniBarComponent() {
    const { data, isLoading, isError, error } = useWeeklyAverages()

    if (isLoading) {
        return (
            <Card className="shadow-lg w-11/12 md:w-8/12 lg:h-[37.5vh] lg:w-[40vw] xl:w-[20vw] xl:h-[28vh] 2xl:w-[20vw] 2xl:h-[32vh]">
                <CardHeader>
                    <CardTitle>Média Semanal</CardTitle>
                    <CardDescription>Gráfico Média Semanal</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center items-center h-full w-full">
                        <p>Carregando...</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (isError) {
        return (
            <Card className="shadow-lg w-11/12 md:w-8/12 lg:h-[37.5vh] lg:w-[40vw] xl:w-[20vw] xl:h-[28vh] 2xl:w-[20vw] 2xl:h-[32vh]">
                <CardHeader>
                    <CardTitle>Média Semanal</CardTitle>
                    <CardDescription>Gráfico Média Semanal</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center items-center h-full w-full">
                        <p>Erro ao carregar os dados: {error?.message}</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    const weatherDataWeek: WeatherData[] = data.map((entry) => ({
        date: entry.date,
        temperature: entry.avgTemperature,
        airHumidity: entry.avgAirHumidity,
        soilHumidity: entry.avgSoilHumidity,
    }))

    return (
        <Card className="shadow-lg w-11/12 md:w-8/12 lg:h-[37.5vh] lg:w-[40vw] xl:w-[20vw] xl:h-[28vh] 2xl:w-[20vw] 2xl:h-[32vh]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-White_Jiquiri">
                    Média Semanal
                    <ThermometerSun size={18} className="text-Orange_Jiquiri" />
                </CardTitle>
                <CardDescription>Média Semanal de Temperatura e Umidade do Ar e Solo</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-100%">
                    <BarChart data={weatherDataWeek}>
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => {
                                try {
                                    const parsedDate = parse(value, "dd/MM/yyyy", new Date())
                                    return format(parsedDate, "EEE", { locale: ptBR }).slice(0, 3)
                                } catch {
                                    return value
                                }
                            }}
                        />
                        <Bar
                            dataKey="temperature"
                            stackId="a"
                            fill={chartConfig.temperature.color}
                        />
                        <Bar
                            dataKey="airHumidity"
                            stackId="a"
                            fill={chartConfig.airHumidity.color}
                        />
                        <Bar
                            dataKey="soilHumidity"
                            stackId="a"
                            fill={chartConfig.soilHumidity.color}
                            radius={[4, 4, 0, 0]}
                        />

                        {/* Barra cinza para dias sem dados */}
                        <Bar
                            dataKey={(entry: WeatherData) => {
                                const hasData =
                                    entry.temperature !== null &&
                                    entry.airHumidity !== null &&
                                    entry.soilHumidity !== null
                                return hasData ? 0 : 100
                            }}
                            stackId="a"
                            fill={colors.Gray_Jiquiri}
                            radius={[4, 4, 0, 0]}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={({ payload, label }) => {
                                let labelFormatted = label
                                try {
                                    const parsedLabel = parse(label, "dd/MM/yyyy", new Date())
                                    labelFormatted = format(parsedLabel, "EEEE dd/MM", {
                                        locale: ptBR,
                                    })
                                } catch {
                                    // mantém o valor original
                                }

                                return (
                                    <div className="rounded-lg bg-Black_Jiquiri/90 p-4 text-sm text-white shadow-md space-y-2">
                                        <p className="text-base font-semibold">
                                            {labelFormatted}
                                        </p>
                                        {payload?.map((entry, index) => {
                                            const config = chartConfig[entry.dataKey as keyof typeof chartConfig]
                                            if (config) {
                                                const value = Number(entry.value).toFixed(1)
                                                const unit = entry.dataKey === "temperature" ? "º" : "%"
                                                return (
                                                    <div key={index} className="flex justify-between gap-6">
                                                        <span className="flex items-center gap-2">
                                                            <span
                                                                className="inline-block size-3 rounded-sm"
                                                                style={{ backgroundColor: config.color }}
                                                            />
                                                            {config.label}
                                                        </span>
                                                        <span className="tabular-nums">
                                                            {value}{unit}
                                                        </span>
                                                    </div>
                                                )
                                            }
                                            return null
                                        })}
                                    </div>
                                )
                            }}
                        />

                        {/* <ChartLegend className="text-White_Jiquiri" content={<ChartLegendContent />} /> */}
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
