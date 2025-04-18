
export type WeatherDataType = {
    id: number;
    day: string;
    timestamp: string;
    air_humidity: {
        [key: string]: number;
    };
    soil_humidity: {
        [key: string]: number;
    };
    temperature: {
        [key: string]: number;
    };
}[];

export const weatherData = [
    {
        "id": 1,
        "day": "13/04/2025",
        "timestamp": "Sun, 13 Apr 2025 00:00:00 GMT",
        "air_humidity": {
            "h01": 30.21, "h02": 28.45, "h03": 34.12, "h04": 36.78, "h05": 40.55,
            "h06": 42.19, "h07": 41.78, "h08": 39.23, "h09": 35.67, "h10": 32.44,
            "h11": 30.98, "h12": 29.65, "h13": 31.11
        },
        "soil_humidity": {
            "h01": 25.67, "h02": 27.89, "h03": 30.22, "h04": 33.11, "h05": 35.44,
            "h06": 36.77, "h07": 34.56, "h08": 31.23, "h09": 28.97, "h10": 26.12,
            "h11": 24.88, "h12": 27.54, "h13": 29.47
        },
        "temperature": {
            "h01": 21.34, "h02": 23.78, "h03": 26.11, "h04": 28.92, "h05": 30.55,
            "h06": 32.12, "h07": 34.88, "h08": 35.67, "h09": 33.44, "h10": 31.56,
            "h11": 28.79, "h12": 25.88, "h13": 22.45
        }
    },
    {
        "id": 2,
        "day": "14/04/2025",
        "timestamp": "Mon, 14 Apr 2025 00:00:00 GMT",
        "air_humidity": {
            "h01": 29.45, "h02": 30.12, "h03": 32.77, "h04": 35.90, "h05": 39.44,
            "h06": 41.80, "h07": 43.65, "h08": 41.11, "h09": 38.77, "h10": 36.09,
            "h11": 34.66, "h12": 32.33, "h13": 30.88
        },
        "soil_humidity": {
            "h01": 26.11, "h02": 28.34, "h03": 31.56, "h04": 34.45, "h05": 36.22,
            "h06": 37.88, "h07": 35.65, "h08": 32.43, "h09": 30.11, "h10": 27.99,
            "h11": 26.45, "h12": 29.33, "h13": 31.12
        },
        "temperature": {
            "h01": 22.33, "h02": 24.76, "h03": 27.90, "h04": 30.55, "h05": 32.33,
            "h06": 34.78, "h07": 36.12, "h08": 37.44, "h09": 35.23, "h10": 33.01,
            "h11": 30.99, "h12": 28.21, "h13": 25.88
        }
    },
    {
        "id": 3,
        "day": "15/04/2025",
        "timestamp": "Tue, 15 Apr 2025 00:00:00 GMT",
        "air_humidity": {
            "h01": 28.90, "h02": 31.22, "h03": 33.78, "h04": 36.01, "h05": 38.56,
            "h06": 40.99, "h07": 42.67, "h08": 40.12, "h09": 37.89, "h10": 35.77,
            "h11": 33.55, "h12": 31.99, "h13": 30.12
        },
        "soil_humidity": {
            "h01": 25.12, "h02": 27.44, "h03": 30.88, "h04": 33.66, "h05": 35.88,
            "h06": 36.12, "h07": 34.78, "h08": 31.99, "h09": 29.44, "h10": 27.88,
            "h11": 26.01, "h12": 28.55, "h13": 30.33
        },
        "temperature": {
            "h01": 21.99, "h02": 23.77, "h03": 26.55, "h04": 29.12, "h05": 31.44,
            "h06": 33.99, "h07": 35.88, "h08": 36.55, "h09": 34.22, "h10": 32.01,
            "h11": 29.78, "h12": 27.33, "h13": 24.88
        }
    },
    {
        "id": 4,
        "day": "16/04/2025",
        "timestamp": "Wed, 16 Apr 2025 00:00:00 GMT",
        "air_humidity": {
            "h01": 27.44, "h02": 29.11, "h03": 31.55, "h04": 34.90, "h05": 37.22,
            "h06": 39.66, "h07": 41.55, "h08": 39.22, "h09": 36.44, "h10": 34.33,
            "h11": 32.12, "h12": 30.88, "h13": 29.44
        },
        "soil_humidity": {
            "h01": 24.55, "h02": 26.78, "h03": 29.88, "h04": 32.99, "h05": 34.44,
            "h06": 35.66, "h07": 33.77, "h08": 30.66, "h09": 28.44, "h10": 26.22,
            "h11": 24.88, "h12": 27.12, "h13": 29.01
        },
        "temperature": {
            "h01": 20.55, "h02": 22.88, "h03": 25.44, "h04": 28.12, "h05": 30.77,
            "h06": 32.99, "h07": 34.22, "h08": 35.33, "h09": 33.12, "h10": 31.01,
            "h11": 28.44, "h12": 26.55, "h13": 23.77
        }
    },
    {
        "id": 5,
        "day": "17/04/2025",
        "timestamp": "Thu, 17 Apr 2025 00:00:00 GMT",
        "air_humidity": {
            "h01": 28.12, "h02": 30.77, "h03": 33.01, "h04": 36.22, "h05": 38.44,
            "h06": 40.66, "h07": 42.33, "h08": 39.99, "h09": 37.12, "h10": 34.88,
            "h11": 32.66, "h12": 30.77, "h13": 29.33
        },
        "soil_humidity": {
            "h01": 25.01, "h02": 27.22, "h03": 30.55, "h04": 33.12, "h05": 35.44,
            "h06": 36.77, "h07": 34.66, "h08": 31.55, "h09": 29.11, "h10": 27.01,
            "h11": 25.33, "h12": 28.12, "h13": 30.01
        },
        "temperature": {
            "h01": 21.66, "h02": 24.33, "h03": 27.12, "h04": 30.01, "h05": 32.44,
            "h06": 34.88, "h07": 36.55, "h08": 37.44, "h09": 35.22, "h10": 33.01,
            "h11": 30.88, "h12": 28.12, "h13": 25.55
        }
    }
];


export const monthlyAverages = [
    { month: "Abril", temperature: Math.random() < 0.5 ? 18.5 : 35.2, humidity: Math.random() < 0.5 ? 80.1 : 55.3 },
    { month: "Maio", temperature: Math.random() < 0.5 ? 20.3 : 38.7, humidity: Math.random() < 0.5 ? 78.6 : 50.9 },
    { month: "Junho", temperature: Math.random() < 0.5 ? 22.1 : 40.0, humidity: Math.random() < 0.5 ? 76.4 : 48.2 },
    { month: "Julho", temperature: Math.random() < 0.5 ? 19.7 : 39.3, humidity: Math.random() < 0.5 ? 79.8 : 52.1 },
    { month: "Agosto", temperature: Math.random() < 0.5 ? 21.4 : 37.9, humidity: Math.random() < 0.5 ? 75.3 : 49.5 },
    { month: "Setembro", temperature: Math.random() < 0.5 ? 23.2 : 36.5, humidity: Math.random() < 0.5 ? 74.1 : 53.7 },
];


export const weatherDataWeek = [
    { date: "2024-04-01", temperature: 22, humidity: 65 },
    { date: "2024-04-02", temperature: 24, humidity: 60 },
    { date: "2024-04-03", temperature: 21, humidity: 70 },
    { date: "2024-04-04", temperature: 26, humidity: 55 },
    { date: "2024-04-05", temperature: 28, humidity: 50 },
    { date: "2024-04-06", temperature: 27, humidity: 52 },
    { date: "2024-04-07", temperature: 23, humidity: 68 },
];







