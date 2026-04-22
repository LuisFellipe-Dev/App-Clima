import Filter from '../components/Filter'

import styles from './Display.module.css'

export default function Display(){
    return(
        <div className={styles.display}>
            <div>
                <Filter/>
            </div>
        </div>
    )
}