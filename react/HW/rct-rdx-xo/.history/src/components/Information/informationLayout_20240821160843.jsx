import { store } from "../../store";
import styles from "./Information.module.css";
import { setField, SET_CURRENT_PLAYER, SET_GAME_END, SET_IS_DRAW } from "../../actions";
import { selectCurrentPlayer, selectField, selectIsDraw, selectIsGameEnded } from "../../selectors"

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
