import styles from "./Information.module.css";
import { connect } from "react-redux";
import {
    selectCurrentPlayer,
    selectIsDraw,
    selectIsGameEnded,
} from "../../selectors";
import { Component } from "react";

class InformationLayout extends Component {
    constructor
    render() {
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
    }
};

const mapStateToProps = (state) => ({
    currentPlayer: selectCurrentPlayer(state),
    isGameEnded: selectIsGameEnded(state),
    isDraw: selectIsDraw(state),
});

export default connect(mapStateToProps)()
