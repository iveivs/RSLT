import { store } from "../store";
const dispatch = useDispatch()
export const restartGame = () => {
    store.dispatch({ type: 'RESTART_GAME' });
};