import axios from "axios";
import { Coordenates } from "./coordenates";
import type { City } from "../intefaces/city";

const API_Weather = import.meta.env.VITE_API_WEATHER;

export const Weather = {
    async get(city: City){
        try {
            const locate = await Coordenates.getCoordenates(city?.nome);
            const response = await axios.get(API_Weather, {
                params: {
                    latitude: String(locate[0]?.lat),
                    longitude: String(locate[0]?.lon),
                    current_weather: String(true),
                    hourly: "precipitation_probability",
                }
            });
            return (await response).data;
        } catch (error) {
            console.log(error);
        }
    }
}