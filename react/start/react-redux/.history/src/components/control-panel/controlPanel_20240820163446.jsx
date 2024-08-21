import { useDispatch } from "react-redux"
import { increaseAge, RESET_AGE, changeUser} from './../../actions'
export const ControlPanel = () => {
    const dispatch = useDispatch()

    const onAgeIncrease = () => {
        dispatch(increaseAge(3))
    }

    const onAgeReset = () => {
        dispatch(RESET_AGE)
    }

    const onUserChange = () => {
        dispatch(changeUser)
    }

    return (
        <div>
            <button onClick={onAgeIncrease}>Увеличить возраст</button>
            <button onClick={onAgeReset}>Сбросить возраст</button>
            <button onClick={onUserChange}>Сменить пользователя</button>
        </div>
    )
}