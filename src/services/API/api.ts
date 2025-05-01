import axios from 'axios';

const baseURL = process.env.API_URL || undefined;

export const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api
