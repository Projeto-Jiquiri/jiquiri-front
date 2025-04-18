export interface IHourlyReadings {
    h01: number;
    h02: number;
    h03: number;
    h04: number;
    h05: number;
    h06: number;
    h07: number;
    h08: number;
    h09: number;
    h10: number;
    h11: number;
    h12: number;
    h13: number;
}

export interface ISensorEntry {
    id: number;
    day: string; // "03/03/2025"
    timestamp: string; // "Mon, 03 Mar 2025 00:00:00 GMT"
    air_humidity: IHourlyReadings;
    soil_humidity: IHourlyReadings;
    temperature: IHourlyReadings;
}

export type ISensorData = Array<ISensorEntry>
