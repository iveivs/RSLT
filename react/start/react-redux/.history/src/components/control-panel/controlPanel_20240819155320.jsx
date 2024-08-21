import { useDispatch } from "react-redux"
import { increaseAge, RESET_AGE} from './../../actions'
export const ControlPanel = () => {
    const dispatch = useDispatch()

    const onAgeIncrease = () => {
        dispatch(increaseAge())
    }

    const onAgeReset = () => {
        dispatch(RESET_AGE)
    }

    return (
        <div>
            <button onClick={onAgeIncrease}>Увеличить возраст</button>
            <button onClick={onAgeReset}>Сбросить возраст</button>
        </div>
    )
}