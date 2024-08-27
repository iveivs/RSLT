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
    const dispatch = useDispatch()
    const currentPlayer = useSelector(selectCurrentPlayer)
    const isGameEnded = useSelector(selectIsGameEnded)
    const isDraw = useSelector(selectIsDraw)
    const field = useSelector(selectField)

    const handleClick = (i) => {
        const updatedField = [...field];
        if (isGameEnded || isDraw || updatedField[i]) return;

        updatedField[i] = currentPlayer;
        dispatch(setField(updatedField))
        
        const isWin = containsPattern(
            WIN_PATTERNS,
            updatedField,
            currentPlayer
        );
        if (checkDraw(updatedField)) {
            dispatch(SET_IS_DRAW);
        }
        if (isWin) {
            dispatch(SET_GAME_END);
        } else {
            dispatch(SET_CURRENT_PLAYER);
        }
    };
    render() {
        const { field } = this.
        return <FieldLayout field={field} handleClick={handleClick} />;
    }
    
};

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
    field: state.field,
})

const Field = connect(mapStateToProps)(FieldContainer)

export default Field;

