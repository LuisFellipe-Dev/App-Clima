import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <header className={styles.header}>
            <div>
                <h1>App do Clima</h1>
            </div>
            <div>
                <h2>Sobre</h2>
            </div>
        </header>
    )
}