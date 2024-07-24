import styles from './Game.module.css'
export const GameLayout = () => {
    return <>
        <div className={styles.game}>
            <h1>Game</h1>
            <div className={styles.information}></div>
            <div className={styles.field}></div>
            <button className={styles}></button>
        </div>
    </>
}