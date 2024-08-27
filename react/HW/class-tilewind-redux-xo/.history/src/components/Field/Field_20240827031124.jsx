import { connect } from "react-redux";
import { WIN_PATTERNS } from "../../constants/winPatterns";
import FieldLayout from "./FieldLayout";
import { checkDraw, containsPattern } from "../../utilities";
import {
    setField,
    SET_CURRENT_PLAYER,
    SET_GAME_END,
    SET_IS_DRAW,
} from "../../actions";
import {
    selectCurrentPlayer,
    selectField,
    selectIsDraw,
    selectIsGameEnded,
} from "../../selectors";
import { Component } from "react";

class Field extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        const {
            field,
            currentPlayer,
            isGameEnded,
            isDraw,
            setField,
            SET_IS_DRAW,
            SET_GAME_END,
            SET_CURRENT_PLAYER,
        } = this.props;
        const updatedField = [...field];
        if (isGameEnded || isDraw || updatedField[i]) return;

        updatedField[i] = currentPlayer;
        setField(updatedField);

        const isWin = containsPattern(
            WIN_PATTERNS,
            updatedField,
            currentPlayer
        );
        if (checkDraw(updatedField)) {
            SET_IS_DRAW();
        }
        if (isWin) {
            SET_GAME_END();
        } else {
            SET_CURRENT_PLAYER();
        }
    }

    render() {
        const { field } = this.props;
        return <FieldLayout field={field} handleClick={this.handleClick} />;
    }
}

const mapStateToProps = (state) => ({
    currentPlayer: selectCurrentPlayer(state),
    isGameEnded: selectIsGameEnded(state),
    isDraw: selectIsDraw(state),
    field: selectField(state),
});

const mapDispatchToProps = (dispatch) => ({
    setField: (updatedField) => dispatch(setField(updatedField)),
    SET_CURRENT_PLAYER: () => dispatch(SET_CURRENT_PLAYER),
    SET_GAME_END: () => dispatch(SET_GAME_END),
    SET_IS_DRAW: () => dispatch(SET_IS_DRAW),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
