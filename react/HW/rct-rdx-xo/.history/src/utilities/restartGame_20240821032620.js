import { store } from "../store";
import { RESTART_GAME } from "../actions";
import { useDispatch, useSelector } from "react-redux"
export const restartGame = () => {
    const dispatch
    store.dispatch({ type: 'RESTART_GAME' });
};