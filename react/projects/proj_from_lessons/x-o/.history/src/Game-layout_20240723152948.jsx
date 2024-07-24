import styles from "./Game.module.css";
import { Field, Information } from './components'

export const GameLayout = () => {
    return (
        <>
            <div className={styles.game}>
                <h1>Game</h1>
                <Information  />
                <Field  />
                <button className={styles.restartButton}>Начать заново</button>
            </div>
        </>
    );
};
