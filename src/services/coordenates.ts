import axios from "axios";

const API_COORDENATES = import.meta.env.VITE_API_COORDENATES;

export const Coordenates = {
    async getCoordenates(city: string){
        try {
            const response = await axios.get(API_COORDENATES, {
                params: {
                    q: city,
                    format: 'json',
                    limit: 1,
                }
            });
            return (await response).data;
        } catch (error) {
            console.log(error);
        }
        
    }
}
