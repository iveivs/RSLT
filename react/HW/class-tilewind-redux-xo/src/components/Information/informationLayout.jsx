import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    selectCurrentPlayer,
    selectIsDraw,
    selectIsGameEnded,
} from '../../selectors';

class InformationLayout extends Component {
    render() {
        const { currentPlayer, isDraw, isGameEnded } = this.props;
        return (
            <div className="text-center mt-24 mb-10 text-2xl">
                {isDraw ? (
                    <p>Ничья</p>
                ) : isGameEnded ? (
                    <p className="text-orange-500 text-2xl">Победа: {currentPlayer}</p>
                ) : (
                    <p>Сейчас ходит: {currentPlayer}</p>
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

export default connect(mapStateToProps)(InformationLayout);
