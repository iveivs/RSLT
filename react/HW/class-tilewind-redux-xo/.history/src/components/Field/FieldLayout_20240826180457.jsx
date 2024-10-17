import styles from "./Field.module.css";
import { RESTART_GAME } from "../../actions";
import { connect } from "react-redux"
import { Component } from "react";

class FieldLayout extends Component  {
    // const dispatch = useDispatch()
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
    RESTART_GAME: () => dispatch(RESTART_GAME)
});

export connect(null, mapDispatchToProps)(FieldLayout)