import { useAllRecords } from '../fetchers/getAllRecords'
import { useEffect, useState } from 'react'
import { parse, format, subMonths } from 'date-fns'
// import { weatherData } from '@/constants/weatherData'

type MonthlyAverages = {
    month: string
    avgTemperature: number | null
    avgAirHumidity: number | null
    avgSoilHumidity: number | null
}

export function useMonthlyAverages() {
    const {
        data: allData,
        isLoading,
        error,
        isError,
    } = useAllRecords()

    // const allData = weatherData // mock data temporariamente

    const [averages, setAverages] = useState<MonthlyAverages[]>([])

    useEffect(() => {
        if (!allData?.length) return

        const now = new Date()

        const lastSixMonths = Array.from({ length: 6 }).map((_, index) => {
            const date = subMonths(now, 5 - index)
            return {
                month: format(date, 'MM/yyyy'),
                raw: date,
            }
        })

        // Agrupa os dados por mês
        const grouped: Record<string, typeof allData> = {}

        allData.forEach((entry) => {
            const parsedDate = parse(entry.day, 'dd/MM/yyyy', new Date())
            const monthKey = format(parsedDate, 'MM/yyyy')

            if (!grouped[monthKey]) {
                grouped[monthKey] = []
            }

            grouped[monthKey].push(entry)
        })

        // Monta o resultado final com ou sem dados
        const result: MonthlyAverages[] = lastSixMonths.map(({ month }) => {
            const entries = grouped[month]

            if (!entries || !entries.length) {
                return {
                    month,
                    avgTemperature: null,
                    avgAirHumidity: null,
                    avgSoilHumidity: null,
                }
            }

            const collectValues = (
                sensorType: 'temperature' | 'air_humidity' | 'soil_humidity'
            ): number[] => {
                return entries.flatMap((entry) =>
                    Object.values(entry[sensorType])
                )
            }

            const calcAvg = (values: number[]): number | null => {
                if (!values.length) return null
                const sum = values.reduce((a, b) => a + b, 0)
                return parseFloat((sum / values.length).toFixed(2))
            }

            return {
                month,
                avgTemperature: calcAvg(collectValues('temperature')),
                avgAirHumidity: calcAvg(collectValues('air_humidity')),
                avgSoilHumidity: calcAvg(collectValues('soil_humidity')),
            }
        })

        // Ordenar o resultado pelos meses de forma crescente (mês mais recente primeiro)
        result.sort((a, b) => {
            const dateA = parse(a.month, 'MM/yyyy', new Date())
            const dateB = parse(b.month, 'MM/yyyy', new Date())
            return dateB.getTime() - dateA.getTime() // Ordenação decrescente (mais recente primeiro)
        })

        setAverages(result)
    }, [allData])

    return {
        data: averages,
        isLoading,
        isError,
        error,
    }
}
