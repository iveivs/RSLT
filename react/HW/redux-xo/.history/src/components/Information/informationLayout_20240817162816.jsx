import { store } from "../../store";
import styles from "./Information.module.css";
export const InformationLayout = () => {
    const { isDraw, isGameEnded, currentPlayer } = store.getState();
    return (

        <div className={styles.info_container}>
            {isDraw ? (
                <p>Ничья</p>
            ) : isGameEnded ? (
                <p className={styles.win}>Победа: {currentPlayer}</p>
            ) : (
                <p className={styles.currentPlayer}>
                    Сейчас ходит: {currentPlayer}
                </p>
            )}
        </div>
    );
};
