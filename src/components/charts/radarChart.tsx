"use client"

import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart as RechartsRadarChart,
} from "recharts"
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
import { Skeleton } from "@/components/ui/skeleton" // Importando o Skeleton
import { colors } from "@/styles/colors"
import { useMonthlyAverages } from "@/services/API/adapters/useMonthlyAverages"
import { parse, format } from "date-fns"

// Função para pegar o nome abreviado do mês a partir de uma string no formato "MM/YYYY"
const getShortMonthName = (month: string) => {
    const parsedDate = parse(month, "MM/yyyy", new Date()) // "MM/yyyy" para formatar corretamente
    return format(parsedDate, "MMM") // "MMM" para o nome abreviado do mês
}

const chartConfig = {
    temperature: {
        label: "Temperatura",
        color: colors.Orange_Jiquiri,
    },
    humidity: {
        label: "Umidade (Solo + Ar)",
        color: colors.Light_Green_Jiquiri,
    },
} satisfies ChartConfig

export function RadarChartComponent() {
    const { data: monthlyAverages, isLoading, isError, error } = useMonthlyAverages()

    if (isLoading) {
        return (
            <Card className="shadow-lg">
                <CardHeader className="items-start pb-4 text-White_Jiquiri">
                    <CardTitle>Radar - Meses Anteriores</CardTitle>
                    <CardDescription>Temperatura e umidade dos meses anteriores</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center items-center h-60">
                        <Skeleton className="w-full h-full rounded-lg" />
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (isError) {
        return (
            <Card className="shadow-lg">
                <CardHeader className="items-start pb-4 text-White_Jiquiri">
                    <CardTitle>Radar - Meses Anteriores</CardTitle>
                    <CardDescription>Temperatura e umidade dos meses anteriores</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center items-center h-40">
                        <p>Erro ao carregar os dados: {error?.message}</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    // Preparar os dados para o gráfico
    const chartData = monthlyAverages.map((entry) => {
        const { avgTemperature, avgSoilHumidity, avgAirHumidity } = entry
        const humidity =
            (avgSoilHumidity ?? 0) + (avgAirHumidity ?? 0)

        return {
            month: getShortMonthName(entry.month), // Usando a função para formatar o nome abreviado do mês
            temperature: avgTemperature ?? 0,
            humidity,
        }
    })

    return (
        <Card className="shadow-lg">
            <CardHeader className="items-start pb-4 text-White_Jiquiri">
                <CardTitle>Radar - Meses Anteriores</CardTitle>
                <CardDescription>Temperatura e umidade dos meses anteriores</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-80 h-60 lg:w-[20vw] md:w-80 md:h-80 lg:h-[24vh] xl:w-[16vw] xl:h-[29vh] 2xl:w-[14vw] 2xl:h-[27vh]"
                >
                    <RechartsRadarChart
                        data={chartData}
                        margin={{ top: -40, bottom: -10 }}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={({ payload, label }) => {
                                return (
                                    <div className="rounded-lg bg-Black_Jiquiri/90 p-4 text-sm text-white shadow-md space-y-2">
                                        <p className="text-base font-semibold">{label}</p>
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

                        <Radar
                            dataKey="humidity"
                            fill={chartConfig.humidity.color}
                            fillOpacity={0.4}
                            stroke={chartConfig.humidity.color}
                        />
                        <Radar
                            dataKey="temperature"
                            fill={chartConfig.temperature.color}
                            fillOpacity={0.6}
                            stroke={chartConfig.temperature.color}
                        />
                        <PolarAngleAxis dataKey="month" />
                        <PolarGrid gridType="circle" radialLines={false} />
                        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
                    </RechartsRadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
