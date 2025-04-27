import { useAllRecords } from '../fetchers/getAllRecords'
import { useEffect, useState } from 'react'
import { format, subDays, eachDayOfInterval } from 'date-fns'
import { IHourlyReadings } from '@/services/interfaces/allRecordsInterface'

type DailyAverages = {
    date: string
    avgTemperature: number | null
    avgAirHumidity: number | null
    avgSoilHumidity: number | null
}

type UseAveragesProps = {
    specificDate?: string // Data específica no formato 'dd/MM/yyyy'
}

export function useWeeklyAverages({ specificDate }: UseAveragesProps) {
    const {
        data: allData,
        isLoading,
        error,
        isError,
    } = useAllRecords()

    // const allData = weatherData // Mock data temporariamente

    const [averages, setAverages] = useState<DailyAverages[]>([])

    useEffect(() => {
        if (!allData?.length) return

        if (specificDate) {
            // Retorna os dados para o dia específico
            const entry = allData.find((e) => e.day === specificDate)
            if (entry) {
                const getAvg = (sensor: IHourlyReadings) => {
                    const values = Object.values(sensor)
                    if (values.length === 0) return null
                    const sum = values.reduce((a, b) => a + b, 0)
                    return parseFloat((sum / values.length).toFixed(2))
                }

                setAverages([
                    {
                        date: specificDate,
                        avgTemperature: getAvg(entry.temperature),
                        avgAirHumidity: getAvg(entry.air_humidity),
                        avgSoilHumidity: getAvg(entry.soil_humidity),
                    },
                ])
            } else {
                setAverages([])
            }
        } else {
            // Retorna os dados da última semana
            const today = new Date()
            const sevenDaysAgo = subDays(today, 6)

            const daysInRange = eachDayOfInterval({
                start: sevenDaysAgo,
                end: today,
            }).map((d) => format(d, 'dd/MM/yyyy'))

            const result: DailyAverages[] = daysInRange.map((date) => {
                const entry = allData.find((e) => e.day === date)

                if (!entry) {
                    return {
                        date,
                        avgTemperature: null,
                        avgAirHumidity: null,
                        avgSoilHumidity: null,
                    }
                }

                const getAvg = (sensor: IHourlyReadings) => {
                    const values = Object.values(sensor)
                    if (values.length === 0) return null
                    const sum = values.reduce((a, b) => a + b, 0)
                    return parseFloat((sum / values.length).toFixed(2))
                }

                return {
                    date,
                    avgTemperature: getAvg(entry.temperature),
                    avgAirHumidity: getAvg(entry.air_humidity),
                    avgSoilHumidity: getAvg(entry.soil_humidity),
                }
            })

            setAverages(result)
        }
    }, [allData, specificDate])

    return {
        data: averages,
        isLoading,
        isError,
        error,
    }
}
