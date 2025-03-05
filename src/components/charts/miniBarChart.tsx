"use client"

import { Footprints, Waves } from "lucide-react"
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
        color: colors.Orange_Jiquiri,
        icon: Footprints,
    },
    humidity: {
        label: "Umidade",
        color: "hsl(var(--chart-2))",
        icon: Waves,
    },
} satisfies ChartConfig

export function MiniBarComponent() {
    return (
        <Card className="shadow-lg 2xl:w-5/12">
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
                            fill="hsl(var(--chart-2))"
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
