// import { useDispatch, useSelector } from "react-redux"
// import { WIN_PATTERNS } from "../../constants/winPatterns";
// import { FieldLayout } from "./FieldLayout";
// import { checkDraw, containsPattern } from "../../utilities";
// import { setField, SET_CURRENT_PLAYER, SET_GAME_END, SET_IS_DRAW } from "../../actions";
// import { selectCurrentPlayer, selectField, selectIsDraw, selectIsGameEnded } from "../../selectors"

// const Field = () => {
//     const dispatch = useDispatch()
//     const currentPlayer = useSelector(selectCurrentPlayer)
//     const isGameEnded = useSelector(selectIsGameEnded)
//     const isDraw = useSelector(selectIsDraw)
//     const field = useSelector(selectField)

//     const handleClick = (i) => {
//         const updatedField = [...field];
//         if (isGameEnded || isDraw || updatedField[i]) return;

//         updatedField[i] = currentPlayer;
//         dispatch(setField(updatedField))
        
//         const isWin = containsPattern(
//             WIN_PATTERNS,
//             updatedField,
//             currentPlayer
//         );
//         if (checkDraw(updatedField)) {
//             dispatch(SET_IS_DRAW);
//         }
//         if (isWin) {
//             dispatch(SET_GAME_END);
//         } else {
//             dispatch(SET_CURRENT_PLAYER);
//         }
//     };

//     return <FieldLayout field={field} handleClick={handleClick} />;
// };

// export default Field;

import { connect } from "react-redux"
import { WIN_PATTERNS } from "../../constants/winPatterns";
import { FieldLayout } from "./FieldLayout";
import { checkDraw, containsPattern } from "../../utilities";
import { setField, SET_CURRENT_PLAYER, SET_GAME_END, SET_IS_DRAW } from "../../actions";
import { selectCurrentPlayer, selectField, selectIsDraw, selectIsGameEnded } from "../../selectors"
import { Component } from "react";

class FieldContainer extends Component {
    constructor(props){
        super(props)
    }
    // dispatch = useDispatch()
    // currentPlayer = useSelector(selectCurrentPlayer)
    // isGameEnded = useSelector(selectIsGameEnded)
    // isDraw = useSelector(selectIsDraw)
    // field = useSelector(selectField)

    handleClick = (i) => {
        const { field, currentPlayer, isGameEnded, isDraw, setField, SET_IS_DRAW, SET_GAME_END, SET_CURRENT_PLAYER } = this.props;
        const updatedField = [...field];
        if (isGameEnded || isDraw || updatedField[i]) return;

        updatedField[i] = currentPlayer;
        // dispatch(setField(updatedField))
        setField(updatedField);
        
        const isWin = containsPattern(
            WIN_PATTERNS,
            updatedField,
            currentPlayer
        );
        if (checkDraw(updatedField)) {
            SET_IS_DRAW
        }
        if (isWin) {
            SET_GAME_END
        } else {
            SET_CURRENT_PLAYER
        }
    };
    render() {
        const { field } = this.props
        return <FieldLayout field={field} handleClick={this.handleClick} />;
    }
    
};

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
    field: state.field,
})

const mapDispatchToProps = (dispatch) => ({
    setField: (updatedField) => dispatch(setField(updatedField)),
    SET_CURRENT_PLAYER: () => dispatch(SET_CURRENT_PLAYER),
    SET_GAME_END: () => dispatch(SET_GAME_END),
    SET_IS_DRAW: () => dispatch(SET_IS_DRAW),
});

const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer)

export default Field;

