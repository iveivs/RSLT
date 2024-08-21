import { store } from "../store";
import { RESTART_GAME } from "";
import { useDispatch, useSelector } from "react-redux"
export const restartGame = () => {
    store.dispatch({ type: 'RESTART_GAME' });
};