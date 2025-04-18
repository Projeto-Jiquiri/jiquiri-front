import { useAllRecords } from './fetchers/getAllRecords'
import { useEffect, useState } from 'react'
import { isToday, isYesterday, format, parse } from 'date-fns'
import { weatherData } from '@/constants/weatherData'

export type FilterType = 'today' | 'yesterday' | Date

type FlattenedData = {
    hour: string
    value: number
    date: string
}

type FlattenedSensors = {
    temperature: FlattenedData[]
    air_humidity: FlattenedData[]
    soil_humidity: FlattenedData[]
}

export function useFilteredRecords(filter: FilterType) {
    const {
        // data: allData = [],
        isLoading,
        error,
        isError,
    } = useAllRecords()

    const allData = weatherData // mock

    const [filtered, setFiltered] = useState<FlattenedSensors>({
        temperature: [],
        air_humidity: [],
        soil_humidity: [],
    })
    const [message, setMessage] = useState<string | null>(null)

    useEffect(() => {
        if (!allData.length) return;

        const now = new Date();
        const todayAt18 = new Date(now);
        todayAt18.setHours(18, 0, 0, 0);

        const normalizedFilter =
            filter instanceof Date ? format(filter, 'dd/MM/yyyy') : filter;

        const result = allData.filter((item: { day: string }) => {
            const parsed = parse(item.day, 'dd/MM/yyyy', new Date());

            switch (normalizedFilter) {
                case 'today':
                    return isToday(parsed);
                case 'yesterday':
                    return isYesterday(parsed);
                default:
                    if (typeof normalizedFilter === 'string') {
                        return format(parsed, 'dd/MM/yyyy') === normalizedFilter;
                    }
                    return false;
            }
        });

        // 🔁 Flatten para cada sensor
        const temperature = result.flatMap((entry) =>
            Object.entries(entry.temperature).map(([hour, value]) => ({
                hour,
                value,
                date: entry.day,
            }))
        );

        const air_humidity = result.flatMap((entry) =>
            Object.entries(entry.air_humidity).map(([hour, value]) => ({
                hour,
                value,
                date: entry.day,
            }))
        );

        const soil_humidity = result.flatMap((entry) =>
            Object.entries(entry.soil_humidity).map(([hour, value]) => ({
                hour,
                value,
                date: entry.day,
            }))
        );

        setFiltered({ temperature, air_humidity, soil_humidity });

        if (normalizedFilter === 'today') {
            const hasToday = result.length > 0;
            if (!hasToday && now < todayAt18) {
                setMessage('⚠️ Os dados de hoje ainda não foram recebidos. Atualizações chegam após às 18h.');
            } else {
                setMessage(null);
            }
        } else {
            setMessage(null);
        }
    }, [allData, filter]);

    return {
        data: filtered,
        isLoading,
        isError,
        error,
        message,
    }
}
