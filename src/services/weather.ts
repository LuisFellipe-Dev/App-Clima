import axios from "axios"

const API_Weather = import.meta.env.VITE_API_URL;

export const Weather = {
    async get(lat:number, long:number){
        try {
            const params = new URLSearchParams();
            params.append("latitude", String(lat));
            params.append("longitude", String(long));
            params.append("current_weather", String(true));
            params.append("hourly", "precipitation_probability");
            const response = axios.get(`${API_Weather}?${params.toString()}`);
            return (await response).data;
        } catch (error) {
            console.log(error);
        }
    }
}