import { useDispatch } from "react-redux"
import {} from './'
export const ControlPanel = () => {
    const dispatch = useDispatch()

    const onAgeIncrease = () => {
        dispatch()
    }

    const onAgeReset = () => {
        dispatch()
    }

    return (
        <div>
            <button onClick={onAgeIncrease}>Увеличить возраст</button>
            <button onClick={onAgeReset}>Сбросить возраст</button>
        </div>
    )
}