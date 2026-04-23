import Filter from '../components/Filter'

import styles from './Display.module.css'

export default function Display(){
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
                            <td>--%</td>
                            <td>--C°</td>
                            <td>--Km/h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}