import { seDispatch } from "react-redux"
export const ControlPanel = () => {
    const dispatch = 
    const onAgeIncrease = () => {

    }
    return (
        <div>
            <button onClick={onAgeIncrease}>Увеличить возраст</button>
            <button onClick={onAgeReset}>Сбросить возраст</button>
        </div>
    )
}