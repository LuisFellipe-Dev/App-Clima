import { useState, useEffect } from 'react'
import Filter from '../components/Filter'

import styles from './Display.module.css'

export default function Display(){
    const date = new Date()
    const [data, setData] = useState<any>(null)
    const [key, setKey] = useState<number>(0)

    function getKey(data: any){
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const validateDate = `${year}-${month}-${day}T${hours}:00`;
        for(let i = 0; i < data?.hourly?.time?.length; i++){
            console.log(data?.hourly?.time?.[i], validateDate)
            if(data?.hourly?.time?.[i] === validateDate){
                setKey(i)
                console.log(i)
                break
            }
        }
    }

    useEffect(() => {
        getKey(data)
    },[data])

    return(
        <div className={styles.display}>
            <div className={styles.Autocomplete}>
                <Filter setData={setData}/>
            </div>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Chuva</th>
                            <th>Temperatura</th>
                            <th>Vento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data?.hourly?.precipitation_probability?.[key] ?? "--"}%</td>
                            <td>{data?.current_weather?.temperature ?? "--"}C°</td>
                            <td>{data?.current_weather?.windspeed ??  "--"}km/h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}