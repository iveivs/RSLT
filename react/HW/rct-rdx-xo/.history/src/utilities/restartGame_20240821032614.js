import { store } from "../store";
import { RESTART_GAME } from "../actions";
import { useDispatch, useSelector } from "react-redux"
export const restartGame = () => {
    di
    store.dispatch({ type: 'RESTART_GAME' });
};