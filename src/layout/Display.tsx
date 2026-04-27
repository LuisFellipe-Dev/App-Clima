import { useState } from 'react'
import Filter from '../components/Filter'

import styles from './Display.module.css'

export default function Display(){
    const [data, setData] = useState<any>(null)

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