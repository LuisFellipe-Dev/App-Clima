import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';

import { Cities } from '../services/cities';
import { Weather } from '../services/weather';

import type { City } from '../interfaces/City';

export default function Filter({setData}: {setData: React.Dispatch<React.SetStateAction<any>>}){
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<object>({});
    const loading = open && options.length === 0;
    const filter = createFilterOptions<City>({limit: 15});

    async function getWeather(city: object){
        const timer = setTimeout(async () => {
            setData(await Weather.get(city));
        },500);
        return () => clearTimeout(timer);
    }

    useEffect(() => {
        if(!loading) return undefined;
        async function getCities(){
            let cities = await Cities.getCities();
            setOptions(cities);
        }
        getCities();
    },[loading])

    return(
        <Autocomplete
            id="locateAutocomplete"
            fullWidth
            filterOptions={filter}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            getOptionKey={(option) => option.id}
            getOptionLabel={(option) => option.nome || ""}
            value={selectedCity}
            onChange={(_, newValue) => {
                if(newValue === null) return;
                setSelectedCity(newValue);
                getWeather(newValue);
            }}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Selecione uma Cidade..."
                />
            )}
        />
    )
}