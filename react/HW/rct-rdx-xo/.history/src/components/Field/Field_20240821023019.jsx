import { store } from "../../store";
import { useDispatch, useSelector } from "react-redux"
import { WIN_PATTERNS } from "../../constants/winPatterns";
import { FieldLayout } from "./FieldLayout";
import { checkDraw, containsPattern } from "../../utilities";

const Field = () => {
    console.log('STORE', store.getState());
    // const myState = useSelector()
    // console.log('myState', myState);
    const { currentPlayer, isGameEnded, isDraw, field } = store.getState();

    const handleClick = (i) => {
        const updatedField = [...field];
        if (isGameEnded || isDraw || updatedField[i]) return;

        updatedField[i] = currentPlayer;
        store.dispatch({ type: "SET_FIELD", payload: updatedField });
        const isWin = containsPattern(
            WIN_PATTERNS,
            updatedField,
            currentPlayer
        );
        if (checkDraw(updatedField)) {
            store.dispatch({ type: "SET_IS_DRAW" });
        }
        if (isWin) {
            store.dispatch({ type: "SET_GAME_END" });
        } else {
            store.dispatch({
                type: "SET_CURRENT_PLAYER",
            });
        }
    };

    return <FieldLayout field={field} handleClick={handleClick} />;
};

export default Field;
