
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Information.module.css';
import {
    selectCurrentPlayer,
    selectIsDraw,
    selectIsGameEnded,
} from '../../selectors';

class InformationLayout extends Component {
    render() {
        const { currentPlayer, isDraw, isGameEnded } = this.props;
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
}

const mapStateToProps = (state) => ({
    currentPlayer: selectCurrentPlayer(state),
    isGameEnded: selectIsGameEnded(state),
    isDraw: selectIsDraw(state),
});

// Экспортируем компонент по умолчанию
export default connect(mapStateToProps)(InformationLayout);
