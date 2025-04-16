import { ISensorData } from "@/services/interfaces/allRecordsInterface";
import { AxiosPromise } from "axios";
import api from "../api";
import { useQuery } from "@tanstack/react-query";

export async function getAllRecords(): AxiosPromise<ISensorData> {
    try {
        const response = await api.get<ISensorData>('/allRecords');
        return response;

    } catch (error) {
        console.error('Error fetching all records:', error);
        throw error;
    }
}


export function useAllRecords() {
    const query = useQuery({
        queryKey: ["allRecords"],
        queryFn: getAllRecords,
    })

    return {
        ...query,
        data: query.data?.data,
    };
}