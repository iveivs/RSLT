import styles from "./Information.module.css";
import { useSelector } from "react-redux"
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from "../../selectors"

export const InformationLayout = () => {
    const currentPlayer = useSelector(selectCurrentPlayer)
    const isGameEnded = useSelector(selectIsGameEnded)
    const isDraw = useSelector(selectIsDraw)

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

const mapStateToProps = (state) => {
    currentPlayer: selectCurrentPlayer()
isGameEnded
isDraw
}
