import Search from '../assets/Search.png'
import styles from './Filter.module.css'

export default function Filter(){
    return(
        <div className={styles.filter}>
            <input name='City' id='City' placeholder="Digite o Nome da Cidade"/>
            <img src={Search}/>
        </div>  
    )
}