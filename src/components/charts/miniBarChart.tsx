"use client"

import { Thermometer, Droplet } from "lucide-react"
import { Bar, BarChart, XAxis } from "recharts"

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

import { weatherDataWeek } from "@/constants/weatherData";
import { colors } from "@/styles/colors"

const chartConfig = {
    temperature: {
        label: "Temperatura",
        color: colors.Purple_Jiquiri,
        icon: Thermometer,
    },
    humidity: {
        label: "Umidade",
        color: "var(--chart-2)",
        icon: Droplet,
    },
} satisfies ChartConfig

export function MiniBarComponent() {
    return (
        <Card className="shadow-lg w-11/12 md:w-8/12 lg:h-[37.5vh] lg:w-[40vw] xl:w-[20vw] xl:h-[28vh] 2xl:w-[18vw] 2xl:h-[30vh]">
            <CardHeader>
                <CardTitle>Semanal</CardTitle>
                <CardDescription>Gráfico Semanal</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={weatherDataWeek}>
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => {
                                return new Date(value).toLocaleDateString("pt-BR", {
                                    weekday: "short",
                                })
                            }}
                        />
                        <Bar
                            dataKey="temperature"
                            stackId="a"
                            fill={colors.Orange_Jiquiri}
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="humidity"
                            stackId="a"
                            fill="var(--chart-2)"
                            radius={[4, 4, 0, 0]}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                            cursor={false}
                            defaultIndex={1}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
