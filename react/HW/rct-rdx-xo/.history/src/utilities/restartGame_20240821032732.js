// import { store } from "../store";
import { RESTART_GAME } from "../actions";
import { useDispatch } from "react-redux"
export const restartGame = () => {
    const dispatch = useDispatch()
    dispatchRESTART_GAME()
    // store.dispatch({ type: 'RESTART_GAME' });
};