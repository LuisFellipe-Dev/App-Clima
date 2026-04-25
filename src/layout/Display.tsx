import { useEffect, useState } from 'react'
import { Weather } from '../services/weather'
import Filter from '../components/Filter'

import styles from './Display.module.css'

export default function Display(){
    const [data, setData] = useState<any>(null)

    async function init(){
        setData(await Weather.get(-5.8,-35.2))
    }
    useEffect(()=>{
        init()
    },[])
    useEffect(()=>{
        console.log(data)
    },[data])

    return(
        <div className={styles.display}>
            <div>
                <Filter/>
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
                            <td>{data?.hourly?.precipitation_probability?.[0] ?? "--"}%</td>
                            <td>{data?.current_weather?.temperature ?? "--"}C°</td>
                            <td>{data?.current_weather?.windspeed ??  "--"}km/h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}