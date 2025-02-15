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

import { weatherData } from "@/constants/weatherData";

const chartConfig = {
    temperature: {
        label: "Temperatura",
        color: "hsl(var(--chart-1))",
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
        <Card className="shadow-lg 2xl:w-6/12">
            <CardHeader>
                <CardTitle>Tooltip</CardTitle>
                <CardDescription>Tooltip with icons.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={weatherData}>
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
                            fill="var(--color-running)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="humidity"
                            stackId="a"
                            fill="var(--color-swimming)"
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
