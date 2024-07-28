import styles from "./Game.module.css";
import { Field, Information } from './components'

export const GameLayout = ({status, currentPlauyer, field}) => {
    return (
        <>
            <div className={styles.game}>
                <h1>Game</h1>
                <Information status={status} currentPlauyer={currentPlauyer} />
                <Field status={status} currentPlauyer={currentPlauyer} field={field} handleCellClick= />
                <button className={styles.restartButton}>Начать заново</button>
            </div>
        </>
    );
};
