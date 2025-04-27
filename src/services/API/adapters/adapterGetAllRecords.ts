import { useAllRecords } from '../fetchers/getAllRecords'
import { useEffect, useState } from 'react'
import { isToday, isYesterday, format, parse, isBefore } from 'date-fns'
// import { weatherData } from '@/constants/weatherData'

export type FilterType = 'today' | 'yesterday' | 'specific' | Date

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

export function useFilteredGetAllRecords(filter: FilterType) {
    const {
        data: allData,
        isLoading,
        error,
        isError,
    } = useAllRecords()

    // const allData = weatherData // mock data temporarily

    const [filtered, setFiltered] = useState<FlattenedSensors>({
        temperature: [],
        air_humidity: [],
        soil_humidity: [],
    })
    const [message, setMessage] = useState<string | null>(null)

    useEffect(() => {
        if (!allData?.length) return;

        const now = new Date();
        const todayAt18 = new Date(now);
        todayAt18.setHours(18, 0, 0, 0);

        const dataAntiga = allData.reduce((oldest, item) => {
            const parsed = parse(item.day, 'dd/MM/yyyy', new Date());
            return oldest && isBefore(oldest, parsed) ? oldest : parsed;
        }, null as Date | null);

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
            } else if (!hasToday) {
                setMessage('⚠️ Não foram encontrados dados para hoje. Verifique a conexão com os dispositivos.');
            } else {
                setMessage(null);
            }
        } else if (normalizedFilter === 'yesterday') {
            const hasYesterday = result.length > 0;
            if (!hasYesterday) {
                setMessage('⚠️ Não foram encontrados dados para ontem. Verifique a conexão com os dispositivos.');
            } else {
                setMessage(null);
            }
        } else if (filter instanceof Date || normalizedFilter === 'specific') {
            if (result.length === 0) {
                if (filter instanceof Date) {
                    const selectedDate = filter;

                    if (dataAntiga && isBefore(selectedDate, dataAntiga)) {
                        setMessage(`⚠️ Não temos registros para datas anteriores a ${format(dataAntiga, 'dd/MM/yyyy')}.`);
                    }
                    else if (isBefore(now, selectedDate)) {
                        setMessage('⚠️ Não é possível visualizar dados para datas futuras.');
                    }
                    else {
                        setMessage('⚠️ Não foram encontrados dados para a data selecionada.');
                    }
                } else {
                    setMessage('⚠️ Selecione uma data para visualizar os dados.');
                }
            } else {
                setMessage(null);
            }
        } else {
            setMessage(null);
        }

        if (result.length > 0 && (temperature.length < 3 || air_humidity.length < 3 || soil_humidity.length < 3)) {
            setMessage('⚠️ Dados incompletos para o período selecionado. Alguns sensores podem não estar funcionando corretamente.');
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