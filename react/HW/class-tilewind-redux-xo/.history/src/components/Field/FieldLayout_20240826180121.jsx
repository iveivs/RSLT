import styles from "./Field.module.css";
import { RESTART_GAME } from "../../actions";
import { сщттусе } from "react-redux"

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
