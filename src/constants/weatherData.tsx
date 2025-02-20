
export type WeatherDataType = {
    date: string;
    temperature: number;
    humidity: number;
}[];

export const weatherData = [
    { date: "2024-04-01", temperature: 22, humidity: 65 },
    { date: "2024-04-02", temperature: 24, humidity: 60 },
    { date: "2024-04-03", temperature: 21, humidity: 70 },
    { date: "2024-04-04", temperature: 26, humidity: 55 },
    { date: "2024-04-05", temperature: 28, humidity: 50 },
    { date: "2024-04-06", temperature: 27, humidity: 52 },
    { date: "2024-04-07", temperature: 23, humidity: 68 },
    { date: "2024-04-08", temperature: 29, humidity: 45 },
    { date: "2024-04-09", temperature: 20, humidity: 75 },
    { date: "2024-04-10", temperature: 25, humidity: 58 },
    { date: "2024-04-11", temperature: 26, humidity: 54 },
    { date: "2024-04-12", temperature: 24, humidity: 61 },
    { date: "2024-04-13", temperature: 27, humidity: 50 },
    { date: "2024-04-14", temperature: 22, humidity: 66 },
    { date: "2024-04-15", temperature: 21, humidity: 72 },
    { date: "2024-04-16", temperature: 23, humidity: 67 },
    { date: "2024-04-17", temperature: 28, humidity: 48 },
    { date: "2024-04-18", temperature: 30, humidity: 42 },
    { date: "2024-04-19", temperature: 24, humidity: 59 },
    { date: "2024-04-20", temperature: 22, humidity: 63 },
    { date: "2024-04-21", temperature: 23, humidity: 70 },
    { date: "2024-04-22", temperature: 25, humidity: 55 },
    { date: "2024-04-23", temperature: 24, humidity: 60 },
    { date: "2024-04-24", temperature: 29, humidity: 47 },
    { date: "2024-04-25", temperature: 26, humidity: 52 },
    { date: "2024-04-26", temperature: 20, humidity: 74 },
    { date: "2024-04-27", temperature: 28, humidity: 49 },
    { date: "2024-04-28", temperature: 21, humidity: 69 },
    { date: "2024-04-29", temperature: 26, humidity: 55 },
    { date: "2024-04-30", temperature: 30, humidity: 45 },
    { date: "2024-05-01", temperature: 25, humidity: 58 },
    { date: "2024-05-02", temperature: 27, humidity: 54 },
    { date: "2024-05-03", temperature: 28, humidity: 50 },
    { date: "2024-05-04", temperature: 26, humidity: 53 },
    { date: "2024-05-05", temperature: 24, humidity: 60 },
    { date: "2024-05-06", temperature: 29, humidity: 48 },
    { date: "2024-05-07", temperature: 30, humidity: 45 },
    { date: "2024-05-08", temperature: 22, humidity: 67 },
    { date: "2024-05-09", temperature: 23, humidity: 64 },
    { date: "2024-05-10", temperature: 27, humidity: 52 },
    { date: "2024-05-11", temperature: 25, humidity: 55 },
    { date: "2024-05-12", temperature: 26, humidity: 58 },
    { date: "2024-05-13", temperature: 28, humidity: 50 },
    { date: "2024-05-14", temperature: 30, humidity: 47 },
    { date: "2024-05-15", temperature: 31, humidity: 43 },
    { date: "2024-05-16", temperature: 29, humidity: 48 },
    { date: "2024-05-17", temperature: 27, humidity: 53 },
    { date: "2024-05-18", temperature: 26, humidity: 56 },
    { date: "2024-05-19", temperature: 24, humidity: 60 },
    { date: "2024-05-20", temperature: 23, humidity: 63 },
    { date: "2024-05-21", temperature: 22, humidity: 68 },
    { date: "2024-05-22", temperature: 21, humidity: 72 },
    { date: "2024-05-23", temperature: 25, humidity: 58 },
    { date: "2024-05-24", temperature: 28, humidity: 50 },
    { date: "2024-05-25", temperature: 30, humidity: 47 },
    { date: "2024-05-26", temperature: 27, humidity: 52 },
    { date: "2024-05-27", temperature: 26, humidity: 55 },
    { date: "2024-05-28", temperature: 24, humidity: 60 },
    { date: "2024-05-29", temperature: 22, humidity: 66 },
    { date: "2024-05-30", temperature: 21, humidity: 70 },
    { date: "2024-05-31", temperature: 23, humidity: 65 },
    { date: "2024-06-01", temperature: 26, humidity: 55 },
    { date: "2024-06-02", temperature: 27, humidity: 50 },
    { date: "2024-06-03", temperature: 29, humidity: 48 },
    { date: "2024-06-04", temperature: 31, humidity: 42 },
    { date: "2024-06-05", temperature: 30, humidity: 45 },
    { date: "2024-06-06", temperature: 28, humidity: 50 },
    { date: "2024-06-07", temperature: 27, humidity: 52 },
    { date: "2024-06-08", temperature: 25, humidity: 55 },
    { date: "2024-06-09", temperature: 24, humidity: 60 },
    { date: "2024-06-10", temperature: 23, humidity: 65 },
    { date: "2024-06-11", temperature: 22, humidity: 68 },
    { date: "2024-06-12", temperature: 21, humidity: 72 },
    { date: "2024-06-13", temperature: 25, humidity: 58 },
    { date: "2024-06-14", temperature: 27, humidity: 50 },
    { date: "2024-06-15", temperature: 29, humidity: 48 },
] as WeatherDataType;


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
] as WeatherDataType;







