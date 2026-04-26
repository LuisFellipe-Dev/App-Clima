import axios from "axios"

const API_Cities = import.meta.env.VITE_API_CITIES;

export const Cities = {
    async getCities(){
        try {
            const response = await axios.get(API_Cities)
            return (await response).data;
        } catch (error) {
            console.log(error)
        }
    }
}