import { useDispatch } from "react-redux"
export const ControlPanel = () => {
    const dispatch = useDispatch
    const onAgeIncrease = () => {

    }
    return (
        <div>
            <button onClick={onAgeIncrease}>Увеличить возраст</button>
            <button onClick={onAgeReset}>Сбросить возраст</button>
        </div>
    )
}