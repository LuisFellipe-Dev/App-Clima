import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import { Cities } from '../services/cities'

import type { City } from '../interfaces/City'

export default function Filter(){
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState<City[]>([])
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const loading = open && options.length === 0;
    const filter = createFilterOptions({limit: 15});

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
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.nome}
            value={selectedCity}
            onChange={(event, newValue) => {
                setSelectedCity(newValue);
                console.log(newValue);
            }}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Selecione uma Cidade..."
                    InputProps={{
                        ...params.InputProps,
                        endAdornment:(
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps?.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />
    )
}