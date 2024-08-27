import styles from "./Field.module.css";
import { RESTART_GAME } from "../../actions";
import { connect } from "react-redux"

export const FieldLayout = ({ field, handleClick }) => {
    const dispatch = useDispatch()
    const restartGame = () => {
        dispatch(RESTART_GAME)
    }
    return (
        <>
            <div className={styles.container}>
                {field.map((elem, i) => (
                    <div
                        onClick={() => handleClick(i)}
                        key={i}
                        className={`${styles.fieldItem} ${
                            styles.fieldItem + (i + 1)
                        }`}
                    >
                        {elem}
                    </div>
                ))}
            </div>
            <div className="cover_btn">
                <button onClick={restartGame} className={styles.restartGameBtn}>
                    Начать заново
                </button>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setField: (updatedField) => dispatch(setField(updatedField)),
    SET_CURRENT_PLAYER: () => dispatch(SET_CURRENT_PLAYER),
    SET_GAME_END: () => dispatch(SET_GAME_END),
    SET_IS_DRAW: () => dispatch(SET_IS_DRAW),
    RESTART_GAME: () => dispatch
});
