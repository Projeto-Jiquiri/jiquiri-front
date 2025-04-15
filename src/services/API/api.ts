import axios, { AxiosPromise } from 'axios';
import { ISensorData } from '../interfaces/allRecordsInterface';

const baseURL = process.env.NEXT_PUBLIC_API_URL || undefined;


axios.defaults.withCredentials = true;

export async function getAllRecords(): AxiosPromise<ISensorData> {
    try {
        const response = await axios.get<ISensorData>(baseURL + '/all_records');
        return response;

    } catch (error) {
        console.error('Error fetching all records:', error);
        throw error;
    }
}