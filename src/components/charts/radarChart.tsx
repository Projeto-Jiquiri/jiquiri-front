"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
import { colors } from "@/styles/colors"
import { monthlyAverages } from "@/constants/weatherData"

const chartConfig = {
    temperature: {
        label: "Temperatura",
        color: colors.Orange_Jiquiri,
    },
    humidity: {
        label: "Umidade",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function RadarChartComponent() {
    return (
        <Card className="shadow-lg">
            <CardHeader className="items-start pb-4 text-White_Jiquiri">
                <CardTitle>Radar - Meses Anteriores</CardTitle>
                <CardDescription>
                    Temperatura e umidade dos meses
                    <br />
                    anteriores
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square 2xl:w-[290px] 2xl:h-[250px]"
                >
                    <RadarChart
                        data={monthlyAverages}
                        margin={{
                            top: -40,
                            bottom: -10,
                        }}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Radar dataKey="humidity" fill="var(--color-humidity)" />
                        <Radar
                            dataKey="temperature"
                            fill="var(--color-temperature"
                            fillOpacity={0.6}

                        />

                        <PolarAngleAxis
                            dataKey="month"
                        // tick={({ x, y, textAnchor, index, ...props }) => {
                        //     const data = monthlyAverages[index];
                        //     const monthName = getMonthName(data.month);
                        //     return (
                        //         <text
                        //             x={x}
                        //             y={index === 0 ? y - 10 : y}
                        //             textAnchor={textAnchor}
                        //             fontSize={13}
                        //             fontWeight={500}
                        //             {...props}
                        //         >
                        //             <tspan
                        //                 x={x}
                        //                 dy={".5rem"}
                        //                 fontSize={12}
                        //                 className="fill-muted-foreground"
                        //             >
                        //                 {monthName}
                        //             </tspan>
                        //         </text>
                        //     );
                        // }}
                        />

                        <PolarGrid gridType="circle" radialLines={false} />
                        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

// const getMonthName = (dateString: string) => {
//     const date = new Date(dateString + '-01');
//     return date.toLocaleDateString('pt-BR', { month: 'long' });
// };