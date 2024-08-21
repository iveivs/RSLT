// import { store } from "../../store";
import { useDispatch, useSelector } from "react-redux"
import { WIN_PATTERNS } from "../../constants/winPatterns";
import { FieldLayout } from "./FieldLayout";
import { checkDraw, containsPattern } from "../../utilities";
import { setField, SET_CURRENT_PLAYER, SET_GAME_END, SET_IS_DRAW } from "../../actions";
import { selectCurrentPlayer, selectField, selectIsDraw, selectIsGameEnded } from "../../selectors"

const Field = () => {
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
            // store.dispatch({ type: "SET_IS_DRAW" });
            dispatch(SET_IS_DRAW);
        }
        if (isWin) {
            // store.dispatch({ type: "SET_GAME_END" });
            dispatch(SET_GAME_END);
        } else {
            // store.dispatch({
            //     type: "SET_CURRENT_PLAYER",
            // });
            dispatch(SET_CURRENT_PLAYER);
        }
        // console.log('GET STORE CLICK', store.getState().field);
        // console.log('CUR PLAYER', store.getState().currentPlayer);
    };

    return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;
