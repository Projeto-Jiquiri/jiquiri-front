import { useState, useEffect } from 'react'
import { isAfter, isBefore, isEqual, startOfMonth, endOfMonth, subMonths, parse } from 'date-fns'
import { useAllRecords } from '../fetchers/getAllRecords'
import { weatherData } from '@/constants/weatherData' // mock data temporariamente

type SensorData = {
    [key: string]: number
}

type AverageRecord = {
    date: string
    air_humidity_avg: number
    soil_humidity_avg: number
    temperature_avg: number
}

type SelectedMonth = 'current' | 'previous'

export function useDaysAveragesForOneMonth(selectedMonth: SelectedMonth) {
    const {
        // data: allData,
        isLoading: isLoadingApi,
        error,
        isError,
    } = useAllRecords()

    const allData = weatherData // mock data temporariamente

    const [averages, setAverages] = useState<AverageRecord[]>([])
    const [message, setMessage] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!allData || allData.length === 0) {
            setMessage('⚠️ Não foram encontrados dados.')
            return
        }

        setIsLoading(true)
        const now = new Date()

        // Definindo os intervalos de datas para o mês atual ou mês passado
        const startOfSelectedMonth = selectedMonth === 'current'
            ? startOfMonth(now)
            : startOfMonth(subMonths(now, 1))

        const endOfSelectedMonth = selectedMonth === 'current'
            ? endOfMonth(now)
            : endOfMonth(subMonths(now, 1))

        const selectedMonthData = allData.filter((record) => {
            const recordDate = parse(record.day, 'dd/MM/yyyy', new Date())
            return (isEqual(recordDate, startOfSelectedMonth) || isAfter(recordDate, startOfSelectedMonth)) &&
                (isEqual(recordDate, endOfSelectedMonth) || isBefore(recordDate, endOfSelectedMonth))
        })

        if (selectedMonthData.length === 0) {
            setMessage('⚠️ Não foram encontrados dados para o mês selecionado.')
            setIsLoading(false)
            return
        }

        const calculateAverage = (data: SensorData): number => {
            const values = Object.values(data)
            const sum = values.reduce((acc, value) => acc + value, 0)
            return sum / values.length
        }

        const dailyAverages: AverageRecord[] = selectedMonthData.map((record) => {
            const air_humidity_avg = calculateAverage(record.air_humidity)
            const soil_humidity_avg = calculateAverage(record.soil_humidity)
            const temperature_avg = calculateAverage(record.temperature)

            return {
                date: record.day,
                air_humidity_avg,
                soil_humidity_avg,
                temperature_avg
            }
        })

        setAverages(dailyAverages)
        setIsLoading(false)
        setMessage(null)

    }, [allData, selectedMonth]) // Agora o efeito depende de selectedMonth

    useEffect(() => {
        if (averages.length > 0 && averages.some((avg) => avg.air_humidity_avg === 0 || avg.soil_humidity_avg === 0 || avg.temperature_avg === 0)) {
            setMessage('⚠️ Alguns dados estão incompletos para o período selecionado.')
        }
    }, [averages])

    return {
        averages,
        isLoading: isLoading || isLoadingApi,
        message,
        isError,
        error,
    }
}
